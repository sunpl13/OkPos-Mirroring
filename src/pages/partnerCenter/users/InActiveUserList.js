import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {withdrawalUsersColumns} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const InActiveUserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [chartData, setChartData] = useState([])

  const chartList = {
    inconvenienceOfService: {
      value: '불편한 서비스',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 159, 64)',
    },
    disSatisfiedWithPrice: {
      value: '가격 불만족',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgb(201, 203, 207)',
    },
    disSatisfiedWithProductFeature: {
      value: '제품 기능에 만족하지 못함',
      backgroundColor: 'rgba(201, 203, 207, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
    },
    directInput: {
      value: '직접 입력',
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
    },
  }

  // 탈퇴회원 API
  const getUsers = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_INACTIVE_USERS}`,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
      } else {
        alert(message)
      }
      setItems(result.inActiveUserInfoPartnerDTOs)
      setChartData([])
      for (const [key, value] of Object.entries(result.inActiveUserWithdrawalCategoryStatistics)) {
        setChartData(chartData => [
          ...chartData,
          {
            label: chartList[key].value,
            data: [value],
            backgroundColor: chartList[key].backgroundColor,
            borderColor: chartList[key].borderColor,
            borderWidth: 1,
          },
        ])
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])
  useEffect(() => {
    console.log(chartData)
  }, [chartData])

  /** Open Modal*/
  const handleShowUserDetailModal = async ({id}) => {
    setShowModal(!showModal)
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        // userId
        url: `${EndPoint.GET_PARTNER_INACTIVE_USERS}/${id}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        setSelectedItem(data.result)
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
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
export default InActiveUserList
