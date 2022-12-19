import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const Userlist = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // 회원 리스트 API
  const getUsers = async () => {
    try {
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_PARTNER_USERS,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result?.adminUserInfoPartnerDTOs)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = async ({id}) => {
    setShowModal(!showModal)
    try {
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_USERS}/${id}`,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setSelectedItem(result)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CRow>
      <PageHeader title='회원 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
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
      <UserDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default Userlist
