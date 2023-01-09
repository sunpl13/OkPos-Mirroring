import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userListColumns} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'

const Userlist = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // 회원 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_USERS)
      .then(res => setItems(res?.adminUserInfoPartnerDTOs))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = async ({id}) => {
    getDetailInfo(EndPoint.PARTNER_USERS, id)
      .then(res => {
        setSelectedItem(res)
        setShowModal(!showModal)
      })
      .catch(err => console.log(err))
  }

  return (
    <CRow>
      <PageHeader title='회원 관리 리스트' />
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
