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
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getUsers = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_USERS}?page=${1}`,
      })
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        setItems(data.result?.adminUserInfoPartnerDTOs)
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
  const handleShowUserDetailModal = async ({id}) => {
    setShowModal(!showModal)
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_USERS}/${id}`,
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
  }

  /** Add User Modal*/
  const handleDetailModalOnChange = ({target: {id, value}}) => {
    console.log(id, value, selectedItem)
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
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
      <UserDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        readOnly
        //upDate={handleDetailModalUpdate}
        onChange={handleDetailModalOnChange}
      />
    </CRow>
  )
}

export default Userlist
