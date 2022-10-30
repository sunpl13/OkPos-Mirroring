import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {testUserTableValues} from '../../test/testConstant'
import ListTemplate from '../../../components/list/ListTemplate'
import UserAddModalTemplate from '../../../components/Modal/users/UserAddModalTemplate'
import UserDetailModal from '../../../components/Modal/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/officialMall/Columns'

const Userlist = () => {
  // Local state 선언
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

  // Life Cycle 선언
  useEffect(() => {
    setItems(testUserTableValues.filter(v => v.status))
  }, [])

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
  const handleUserDetailModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
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
    setItems([
      ...items,
      {
        ...item,
      },
    ])
    setItem({
      userName: '',
      businessNumber: '',
      phoneNumber: '',
      businessRegistration: '',
      businessName: '',
      businessAddress: '',
    })
    setShowAddModal(!showAddModal)
  }

  return (
    <CRow>
      <PageHeader title='회원 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowUserDetailModal}
              onChange={handleUserDetailModalOnChange}
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
      <UserDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        readOnly
        onChange={handleUserDetailModalOnChange}
      />
    </CRow>
  )
}

export default Userlist
