import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {testUserTableValues} from '../../test/testConstant'
import InquiryDetailModal from '../../../components/Modal/partnerCenter/inquiry/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {inquiryListColumns} from '../../../utils/columns/officialMall/Columns'

const InquiryList = () => {
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
  /** User list Columns */

  useEffect(() => {
    setItems(testUserTableValues)
  }, [])

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const handleInquiryModalOnChange = ({target: {value}}) => {
    setInquiryMsg(value)
  }
  const handleInquiryModalOnClick = () => {
    setItems(items.map(value => (value.id === selectedItem.id ? {...selectedItem, answer: inquiryMsg} : value)))
    setInquiryMsg('')
    setShowModal(!showModal)
  }
  return (
    <CRow>
      <PageHeader title='1 : 1 문의 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate items={items} onClick={handleShowModal} columns={inquiryListColumns} className={'userList'} />
          </CCardBody>
        </CCard>
      </CCol>
      <InquiryDetailModal
        item={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        value={inquiryMsg}
        onChange={handleInquiryModalOnChange}
        onClick={handleInquiryModalOnClick}
      />
    </CRow>
  )
}

export default InquiryList
