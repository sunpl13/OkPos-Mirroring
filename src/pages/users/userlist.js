import React, {useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {testUserTableValues} from '../test/testConstant'
import ListTemplate from '../../components/list/ListTemplate'
import UserAddModalTemplate from '../../components/Modal/UserAddModalTemplate'
import UserDetailModal from '../../components/Modal/UserDetailModal'

const UserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({
    id: 0,
    userName: '',
    businessNumber: '',
    createdAt: '',
    status: true,
    phoneNumber: '',
    businessRegistration: '',
    businessName: '',
    businessAddress: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const handleRetrieveTestList = async () => {
    setItems(testUserTableValues)
  }
  const handleUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleUserDetailModal = () => {
    setShowModal(!showModal)
  }
  const handleUserItemAddModalOnChange = ({target}) => {
    const {id, value} = target
    setItem({
      ...item,
      [id]: value,
    })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleRetrieveTestList}>
                  조회하기
                </CButton>
              </CCol>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleUserItemAddModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate items={items} onClick={handleUserDetailModal} />
          </CCardBody>
        </CCard>
      </CCol>
      <UserAddModalTemplate
        value={item}
        visible={showAddModal}
        setVisible={setShowAddModal}
        onChange={handleUserItemAddModalOnChange}
      />
      <UserDetailModal value={item} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default UserList
