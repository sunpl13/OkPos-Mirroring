import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../../components/list/ListTemplate'
import InquiryDetailModal from '../../../../components/Modal/partnerCenter/inquiry/InquiryDetailModal'
import PageHeader from '../../../../components/common/PageHeader'
import {userInquiryListColumns} from '../../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {isEmpty} from '../../../../utils/utility'

const UserInquiryList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [inquiryMsg, setInquiryMsg] = useState('')

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
        setSelectedItem(data.result)
        setEditCheck(data.result.inquiryReplies)
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
          setSelectedItem(data.result)
          setEditCheck(data.result.inquiryReplies)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
      console.log(id)
    }
  }
  const handleInquiryModalOnChange = ({target: {value}}) => {
    setInquiryMsg(value)
    console.log(value)
  }
  const handleInquiryModalUpdate = () => {
    if (editCheck.inquiryReplies?.content !== inquiryMsg) {
      console.log(editCheck.inquiryReplies?.content, inquiryMsg)
      if (editCheck.inquiryReplies?.content) {
        if (window.confirm('답변을 등록하시겠습니까?')) {
          console.log('tttt2')
        }
      } else {
        if (window.confirm('답변을 수정하시겠습니까?')) {
          console.log('test1')
        }
      }
    }
  }
  useEffect(() => {
    if (!showModal) {
      setInquiryMsg('')
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
      />
    </CRow>
  )
}

export default UserInquiryList
