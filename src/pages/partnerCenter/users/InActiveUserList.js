import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {withdrawalUsersColumns} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'

const InActiveUserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [chartData, setChartData] = useState([])

  const chartList = {
    inconvenienceOfService: {
      value: '서비스 이용 불편',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 159, 64)',
    },
    disSatisfiedWithPrice: {
      value: '가격 불만족',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgb(201, 203, 207)',
    },
    disSatisfiedWithProductFeature: {
      value: '제품 기능 불만족',
      backgroundColor: 'rgba(201, 203, 207, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
    },
    directInput: {
      value: '직접 입력',
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
    },
  }

  const datePickerOptions = [
    {key: 'createdAt', value: '최초 등록일'},
    {key: 'deletedAt', value: '계정 탈퇴일'},
  ]

  // 탈퇴회원 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_INACTIVE_USERS)
      .then(res => {
        setItems(res?.inActiveUserInfoPartnerDTOs)
        setChartData([])
        for (const [key, value] of Object.entries(res?.inActiveUserWithdrawalCategoryStatistics)) {
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
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = async ({id}) => {
    getDetailInfo(EndPoint.PARTNER_INACTIVE_USERS, id)
      .then(res => {
        setSelectedItem(res)
        setShowModal(!showModal)
      })
      .catch(err => console.log(err))
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
              datePickerOptions={datePickerOptions}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}
export default InActiveUserList
