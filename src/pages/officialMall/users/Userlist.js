import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {testUserTableValues} from '../../test/testConstant'
import ListTemplate from '../../../components/list/ListTemplate'
import UserModal from '../../../components/Modal/officialMall/UserModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const UserList = () => {
  // 모듈 선언'
  const navigate = useNavigate()
  // Local state 선언
  const [userList, setUserList] = useState([])
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

  // API 통신 함수
  const loadMallUserList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: 'http://13.209.93.181/admin/mall/users',
        //url: EndPoint.GET_USERS,
      })
      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('loadMallUserList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setUserList(res.result.result)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    loadMallUserList()
    // setItems(testUserTableValues.filter(v => v.status))
  }, [])

  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <PageHeader title='회원 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={userList}
              onClick={handleShowUserDetailModal}
              columns={userListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default UserList
