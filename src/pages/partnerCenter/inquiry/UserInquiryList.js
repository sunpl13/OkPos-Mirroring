import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import InquiryDetailModal from '../../../components/Modal/partnerCenter/inquiry/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userInquiryListColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const UserInquiryList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    content: '',
    id: 0,
    inquiryCategory: '',
    inquiryFiles: [],
    inquiryReplies: [],
    userName: '',
    userPhoneNum: '',
  })
  const [editCheck, setEditCheck] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [inquiryMsg, setInquiryMsg] = useState('')
  const [editor, setEditor] = useState('')
  // 1:1 문의 리스트 API
  const getInquiry = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INQUIRIES}?page=${1}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        setItems(data.result.inquiryPartnerDTOs)
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getInquiry()
  }, [])

  /** Open Modal*/
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INQUIRIES}/${id}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        const {result} = data
        setSelectedItem(result)
        setEditCheck(result.inquiryReplies)
        if (result.inquiryReplies.length !== 0) {
          setEditor(result.inquiryReplies[result.inquiryReplies.length - 1].content)
        }
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleInquiryModalOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.GET_PARTNER_INQUIRIES}/${id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          setSelectedItem({
            ...selectedItem,
            ...data.result,
          })
          setEditCheck(data.result.inquiryReplies)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  // Editor onChange
  const handleInquiryModalOnChange = htmlTagValue => {
    setEditor(htmlTagValue)
  }

  // Modal UPDate
  const handleInquiryModalUpdate = async () => {
    const {id} = selectedItem
    console.log(inquiryMsg)
    if (editCheck.length !== 0) {
      if (window.confirm('답변을 수정하시겠습니까?')) {
        if (!editor) return alert('답벼을 작성해 주세요.')

        try {
          const {data} = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.GET_PARTNER_INQUIRIES}/reply/${id}`,
            // admin/partner/inquiries/reply/:replyId
            data: editor,
          })
          console.log(data)
          if (!data.isSuccess || isEmpty(data?.result)) {
            return
          }
          if (data?.code === 1000) {
            setShowModal(false)
            return alert(data?.message)
          } else {
            alert(data?.message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else if (window.confirm('답변을 등록하시겠습니까?')) {
      if (!inquiryMsg) return alert('답변을 작성해 주세요.')
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.POST,
          url: `${EndPoint.GET_PARTNER_INQUIRIES}/${id}/reply`,
          data: editCheck,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          setShowModal(false)
          return alert(data?.message)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    if (!showModal) {
      setEditor('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='1 : 1 문의 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowModal}
              columns={userInquiryListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <InquiryDetailModal
        visible={showModal}
        setVisible={setShowModal}
        value={selectedItem}
        replies={inquiryMsg}
        onChange={handleInquiryModalOnChange}
        upDate={handleInquiryModalUpdate}
        onDelete={handleInquiryModalOnDelete}
        setValue={setInquiryMsg}
        editor={editor}
        setEditor={setEditor}
      />
    </CRow>
  )
}

export default UserInquiryList
