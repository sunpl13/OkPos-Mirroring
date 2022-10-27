import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../../components/list/ListTemplate'
import {testUserTableValues} from '../../../test/testConstant'
import InquiryDetailModal from '../../../../components/Modal/users/InquiryDetailModal'
import PageHeader from '../../../../components/common/PageHeader'

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
      <PageHeader title='1 : 1 문의 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
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
