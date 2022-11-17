import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserAddModal from '../../../components/Modal/partnerCenter/users/UserAddModal'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const Userlist = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
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
        setItems(data.result.userInfoPartnerDTOS)
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = async ({id = undefined}) => {
    setShowModal(!showModal)
    if (id !== undefined) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          // userId
          url: `${EndPoint.GET_V1_MALL_PARTNER_USERS}/${id}`,
        })
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          setSelectedItem(data.result)
          setEditCheck(data.result)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({
        address: '',
        businessName: '',
        certificateNum: '',
        createdAt: '',
        phoneNum: '',
        status: '',
        userName: '',
        certificateFile: '',
      })
      setEditCheck({
        address: '',
        businessName: '',
        certificateNum: '',
        createdAt: '',
        phoneNum: '',
        status: '',
        userName: '',
        certificateFile: '',
      })
    }
  }

  /** Add User Modal*/
  const handleDetailModalOnChange = ({target: {id, value}}) => {
    console.log(id, value, selectedItem)
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleDetailModalUpdate = editOnClick => {
    const {
      address, // 사업장 주소
      businessName, // 상호명
      certificateNum, // 사업자 번호
      phoneNum, // 휴대전화 번호
      status, // 계정 상태
      userName, // 회원 이름
      certificateFile, // 사업자 등록증
    } = selectedItem
    if (
      address !== editCheck.address ||
      businessName !== editCheck.businessName ||
      certificateFile !== editCheck.certificateFile ||
      certificateNum !== editCheck.certificateNum ||
      phoneNum !== editCheck.phoneNum ||
      status !== editCheck.status ||
      userName !== editCheck.userName
    ) {
      if (window.confirm('Edit ?')) {
        if (!address) return alert('Not address')
        if (!businessName) return alert('Not businessName')
        if (!certificateNum) return alert('Not certificateNum')
        if (!phoneNum) return alert('Not phoneNum')
        if (!status) return alert('Not status')
        if (!userName) return alert('Not userName')
        if (!certificateFile) return alert('Not certificateFile')
        if (!editOnClick) return setShowModal(false)
        setEditCheck(selectedItem)
      } else {
        setSelectedItem({})
        setEditCheck({})
        setShowModal(false)
      }
    } else {
      setShowModal(false)
    }
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
                <CButton color='primary' onClick={handleShowUserDetailModal}>
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
      <UserAddModal
        value={item}
        visible={showAddModal}
        setVisible={setShowAddModal}
        onChange={handleDetailModalOnChange}
        onClick={handleUserItemAddModalOnClick}
      />
      <UserDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        readOnly
        upDate={handleDetailModalUpdate}
        onChange={handleDetailModalOnChange}
      />
    </CRow>
  )
}

export default Userlist
