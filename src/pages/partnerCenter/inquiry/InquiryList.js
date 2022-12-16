import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import InquiryDetailModal from '../../../components/Modal/partnerCenter/inquiry/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userInquiryListColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const InquiryList = () => {
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
  const [editor, setEditor] = useState('')

  // 1:1 문의 리스트 API
  const getInquiry = async () => {
    try {
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INQUIRIES}?page=${1}`,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result.inquiryPartnerDTOs)
      } else {
        alert(message)
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
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INQUIRIES}/${id}`,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setSelectedItem(result)
        setEditCheck(result.inquiryReplies)
        if (result.inquiryReplies.length !== 0) {
          setEditor(result.inquiryReplies[result.inquiryReplies.length - 1].content)
        }
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // 1:1 문의 삭제
  const handleInquiryModalOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말 삭제하시겠습니까?')) {
      try {
        const {
          data: {result, isSuccess, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.GET_PARTNER_INQUIRIES}/reply/${id}`,
        })
        if (!isSuccess || isEmpty(result)) {
          return
        }
        if (code === 1000) {
          alert(message)
          window.location.reload()
        } else {
          alert(message)
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

  // 1 : 1 문이 업데이트
  const handleInquiryModalUpdate = async () => {
    const {id} = selectedItem
    if (editCheck.length !== 0) {
      if (window.confirm('답변을 수정하시겠습니까?')) {
        if (!editor) return alert('답변을 작성해 주세요.')
        try {
          const {
            data: {result, isSuccess, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.GET_PARTNER_INQUIRIES}/reply/${id}`,
            data: {
              content: editor,
            },
          })
          if (!isSuccess || isEmpty(result)) {
            return
          }
          if (code === 1000) {
            setShowModal(false)
            return alert(message)
          } else {
            alert(message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else if (window.confirm('답변을 등록하시겠습니까?')) {
      if (!editor) return alert('답변을 작성해 주세요.')
      try {
        const {
          data: {result, isSuccess, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.POST,
          url: `${EndPoint.GET_PARTNER_INQUIRIES}/${id}/reply`,
          data: {
            content: editor,
          },
        })
        if (!isSuccess || isEmpty(result)) {
          return alert(message)
        }
        if (code === 1000) {
          setShowModal(false)
          return alert(message)
        } else {
          alert(message)
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
        onChange={handleInquiryModalOnChange}
        upDate={handleInquiryModalUpdate}
        onDelete={handleInquiryModalOnDelete}
        editor={editor}
        setValue={setEditor}
      />
    </CRow>
  )
}

export default InquiryList
