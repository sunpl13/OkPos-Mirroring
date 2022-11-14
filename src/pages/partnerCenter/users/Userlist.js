import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {testUserTableValues} from '../../test/testConstant'
import ListTemplate from '../../../components/list/ListTemplate'
import UserAddModalTemplate from '../../../components/Modal/partnerCenter/users/UserAddModalTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const Userlist = () => {
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

  const getUsers = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_V1_MALL_PARTNER_USERS}?page=${1}`,
      })
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
      } else {
        alert(data?.message)
      }
      setItems(data.result.userInfoPartnerDTOS)
    } catch (error) {}
  }

  useEffect(() => {
    getUsers()
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
  const handleUserDetailModalUpdateData = data => {
    setItems(items.map(value => (value.id === data.id ? data : value)))
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
      <PageHeader title='회원 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
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
      <UserDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        readOnly
        upDate={handleUserDetailModalUpdateData}
      />
    </CRow>
  )
}

export default Userlist
