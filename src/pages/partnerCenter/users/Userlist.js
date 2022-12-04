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
    console.log(id)
    setShowModal(!showModal)
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        // userId
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
      if (window.confirm('회원 정보를 수정하시겠습니까?')) {
        if (!address) return alert('사업장 주소를 입력해 주세요.')
        if (!businessName) return alert('상호명을 입력해 주세요.')
        if (!certificateNum) return alert('사업자 번호를 입력해 주세요.')
        if (!phoneNum) return alert('휴대폰 번호를 입력해 주세요')
        if (!userName) return alert('회원 이름을 입력해 주세요.')
        if (!certificateFile) return alert('사업자 등록증을 등록해 주세요.')
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
        upDate={handleDetailModalUpdate}
        onChange={handleDetailModalOnChange}
      />
    </CRow>
  )
}

export default Userlist
