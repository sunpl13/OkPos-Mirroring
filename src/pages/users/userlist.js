import React, {useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CButton,
  CRow,
  CModalBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CFormLabel,
  CFormInput,
} from '@coreui/react'
import {testUserTableValues} from '../test/testConstant'
import ListTemplate from '../../components/list/ListTemplate'

const UserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const handleRowClick = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleRetrieveTestList = async () => {
    setItems(testUserTableValues)
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
            <ListTemplate items={items} onClick={handleRowClick} />
          </CCardBody>
        </CCard>
      </CCol>
      <CModal size='lg' visible={showModal} onClose={() => setShowModal(false)}>
        <CModalHeader>
          <CModalTitle>{`User ID : ${selectedItem.id}`}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
              id
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type='text' id='staticEmail' defaultValue={selectedItem.id} readOnly />
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
              Email
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type='text' id='staticEmail' defaultValue={selectedItem.email} readOnly />
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
              Phone Number
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type='text' id='staticEmail' defaultValue={selectedItem.phoneNumber} readOnly />
            </CCol>
          </CRow>
        </CModalBody>
      </CModal>
    </CRow>
  )
}

export default UserList
