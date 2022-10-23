import React, {useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {testUserTableValues} from '../test/testConstant'
import ListTemplate from '../../components/list/ListTemplate'
import UserAddModalTemplate from '../../components/Modal/UserAddModalTemplate'
import UserDetailModal from '../../components/Modal/UserDetailModal'
import moment from 'moment/moment'

const UserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({
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
  /** UserList Columns */
  const userListColumns = [
    {
      key: 'id',
      _props: {color: 'primary', className: 'userId'},
    },
    {
      key: 'userName',
      _props: {color: 'primary', className: 'userName'},
    },
    {
      key: 'businessNumber',
      _props: {color: 'primary', className: 'businessNumber'},
    },
    {
      key: 'phoneNumber',
      _props: {color: 'primary', className: 'phoneNumber'},
    },
    {
      key: 'createdAt',
      _props: {color: 'primary', className: 'createdAt'},
    },
    {
      key: 'status',
      _props: {color: 'primary', className: 'status'},
    },
  ]

  const handleRetrieveTestList = async () => {
    setItems(testUserTableValues)
  }
  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  /** Add User Modal*/
  const handleUserItemAddModalOnChange = ({target}) => {
    const {id, value} = target
    setItem({
      ...item,
      [id]: value,
    })
  }
  const handleUserItemAddModalOnClick = () => {
    if (!item.userName) return alert('Is Not User Name')
    if (!item.businessNumber) return alert('Is Not Business Number')
    if (!item.phoneNumber) return alert('Is Not Phone Number')
    if (!item.businessRegistration) return alert('Is Not Business Registration File')
    if (!item.businessName) return alert('Is Not Business Name')
    if (!item.businessAddress) return alert('Is Not Business Address')
    const createAt = moment().format('YYYY-MM-DD HH-mm')
    setItems([
      ...items,
      {
        ...item,
        createAt: createAt,
      },
    ])
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
                <CButton color='primary' onClick={handleShowUserItemAddModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowUserDetailModal}
              columns={userListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserAddModalTemplate
        value={item}
        visible={showAddModal}
        setVisible={setShowAddModal}
        onChange={handleUserItemAddModalOnChange}
        onClick={handleUserItemAddModalOnClick}
      />
      <UserDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default UserList
