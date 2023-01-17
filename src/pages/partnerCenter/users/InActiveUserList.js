import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {withdrawalUsersColumns} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'
import MallDoughnutChartTemplate from '../../../components/chart/DoughnutChartTemplate'
import MallBarChartTemplate from '../../../components/chart/BarChartTemplate'

const InActiveUserList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [chartData, setChartData] = useState([])
  const [chartLabels, setChartLabels] = useState([
    '서비스 이용 불편',
    '가격 불만족',
    '제품 기능 불만족',
    '기타(직접 입력)',
  ])

  const datePickerOptions = [
    {key: 'createdAt', value: '최초 등록일'},
    {key: 'deletedAt', value: '계정 탈퇴일'},
  ]

  // 탈퇴회원 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_INACTIVE_USERS)
      .then(res => {
        setItems(res?.inActiveUserInfoPartnerDTOs)
        const {inActiveUserWithdrawalCategoryStatistics} = res
        setChartData([
          inActiveUserWithdrawalCategoryStatistics.inconvenienceOfService,
          inActiveUserWithdrawalCategoryStatistics?.disSatisfiedWithPrice,
          inActiveUserWithdrawalCategoryStatistics?.disSatisfiedWithProductFeature,
          inActiveUserWithdrawalCategoryStatistics?.directInput,
        ])
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
            <CRow>
              <CCol xs={4}>
                <CCardBody>
                  <MallDoughnutChartTemplate title={'탈퇴 사유'} labels={chartLabels} data={chartData} />
                </CCardBody>
              </CCol>
              <CCol xs={8}>
                <CCardBody>
                  <MallBarChartTemplate title={'탈퇴 사유'} labels={chartLabels} data={chartData} />
                </CCardBody>
              </CCol>
            </CRow>
            <div>서비스 이용 불편 : {chartData[0]}</div>
            <div> 가격 불만족 : {chartData[1]}</div>
            <div> 제품 기능 불만족 : {chartData[2]}</div>
            <div>기타(직접 입력) : {chartData[3]}</div>
          </CCardBody>
        </CCard>
        <CCard className='mb-4'>
          <CCardBody>
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
