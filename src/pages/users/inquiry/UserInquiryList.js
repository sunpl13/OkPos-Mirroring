import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {testUserTableValues} from '../../test/testConstant'
import InquiryDetailModal from '../../../components/Modal/users/InquiryDetailModal'

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
  /** User list Columns */
  const userListColumns = [
    {
      key: 'id',
      _props: {color: 'primary', className: 'userId'},
    },
    {
      key: 'inquiryType',
      _props: {color: 'primary', className: 'inquiryType'},
    },
    {
      key: 'userName',
      _props: {color: 'primary', className: 'userName'},
    },
    {
      key: 'email',
      _props: {color: 'primary', className: 'email'},
    },
    {
      key: 'phoneNumber',
      _props: {color: 'primary', className: 'phoneNumber'},
    },
    {
      key: 'enrollmentAt',
      _props: {color: 'primary', className: 'createdAt'},
    },
  ]

  const handleRetrieveTestList = async () => {
    setItems(testUserTableValues)
  }

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const handleInquiryModalOnChange = ({target: {value}}) => {
    setInquiryMsg(value)
  }
  const handleInquiryModalOnClick = () => {
    setSelectedItem({
      ...selectedItem,
      answer: inquiryMsg,
    })
    console.log(selectedItem)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={12}>
                <CButton color='primary' onClick={handleRetrieveTestList}>
                  조회하기
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate items={items} onClick={handleShowModal} columns={userListColumns} className={'userList'} />
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

export default UserInquiryList
