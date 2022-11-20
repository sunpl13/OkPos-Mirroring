import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import {ChartTestData} from '../../test/ChartTest'
import PageHeader from '../../../components/common/PageHeader'
import {withdrawalUsersColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const WithdrawalUsers = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const [chartData, setChartData] = useState([
    {
      label: '',
      data: [0],
      backgroundColor: '',
      borderColor: '',
      borderWidth: 2,
    },
  ])

  // 탈퇴회원 API
  const getUsers = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INACTIVE_USERS}?page=${1}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
      } else {
        alert(data?.message)
      }
      setItems(data.result.userInfoPartnerDTOS)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
    setChartData(ChartTestData)
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = async item => {
    setSelectedItem(item)
    setShowModal(!showModal)
    if (false) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          // userId
          url: `${EndPoint.GET_V1_MALL_PARTNER_INACTIVE_USERS}/${item.id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  const handleUserDetailModalUpdateData = data => {
    setItems(items.map(value => (value.id === data.id ? data : value)))
  }
  return (
    <CRow>
      <PageHeader title='탈퇴 회원 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <BarChartTemplate title={'탈퇴 사유'} data={chartData || [{}]} />
            <ListTemplate
              items={items}
              onClick={handleShowUserDetailModal}
              columns={withdrawalUsersColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        upDate={handleUserDetailModalUpdateData}
        readOnly
      />
    </CRow>
  )
}
export default WithdrawalUsers
