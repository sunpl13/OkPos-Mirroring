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
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    userName: '',
    email: '',
    phoneNumber: '',
    text: '',
    firstRegistration: '',
    answer: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [inquiryMsg, setInquiryMsg] = useState('')

  // 1:1 문의 리스트 API
  const getInquirys = async () => {
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
    getInquirys()
  }, [])

  /** Open Modal*/
  const handleShowModal = async ({id}) => {
    //setSelectedItem(item)
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
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleInquiryModalOnChange = ({target: {value, id}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleInquiryModalUpdate = () => {
    setItems(items.map(value => (value.id === selectedItem.id ? {...selectedItem, answer: inquiryMsg} : value)))
    setShowModal(!showModal)
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
        onChange={handleInquiryModalOnChange}
        upDate={handleInquiryModalUpdate}
      />
    </CRow>
  )
}

export default UserInquiryList
