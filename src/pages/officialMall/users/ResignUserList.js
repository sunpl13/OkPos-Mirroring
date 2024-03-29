import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import ResignUserModal from '../../../components/Modal/officialMall/ResignUserModal'
import PageHeader from '../../../components/common/PageHeader'
import {resignUserListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import DoughnutChartTemplate from '../../../components/chart/DoughnutChartTemplate'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'

const ResignUserList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [resignUserList, setResignUserList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  const [showModal, setShowModal] = useState(false)
  const [chartLabels, setChartLabels] = useState([
    '서비스 이용 불편',
    '가격 불만족',
    '제품 기능 불만족',
    '기타(직접 입력)',
  ])
  const [chartData, setChartData] = useState([])

  // const chartList = {
  //   countResignReasonByService: {
  //     value: '서비스 이용 불편',
  //     backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //     borderColor: 'rgb(255, 159, 64)',
  //   },
  //   countResignReasonByPrice: {
  //     value: '가격 불만족',
  //     backgroundColor: 'rgba(255, 159, 64, 0.2)',
  //     borderColor: 'rgb(201, 203, 207)',
  //   },
  //   countResignReasonByItem: {
  //     value: '제품 기능에 불만족',
  //     backgroundColor: 'rgba(201, 203, 207, 0.2)',
  //     borderColor: 'rgb(255, 205, 86)',
  //   },
  //   countResignReasonBySelf: {
  //     value: '직접 입력',
  //     backgroundColor: 'rgba(255, 205, 86, 0.2)',
  //     borderColor: 'rgb(75, 192, 192)',
  //   },
  // }

  const resignUserOptions = [
    {
      key: 'createdAt',
      value: '최초등록일',
    },
    {key: 'updatedAt', value: '계정탈퇴일'},
  ]

  // API 통신 함수
  const onLoadMallReginUserList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_RESIGNUSERS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('onLoadMallReginUserList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setResignUserList(
        res.result.resignUserInfos.map((item, index) => {
          return {...item, no: res.result.resignUserInfos.length - index}
        }),
      )
      setChartData([
        res.result.countResignReasonByService,
        res.result.countResignReasonByPrice,
        res.result.countResignReasonByItem,
        res.result.countResignReasonBySelf || 0,
      ])
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallReginUserList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <PageHeader title='탈퇴 회원 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <CRow>
              <CCol xs={4}>
                <CCardBody>
                  <DoughnutChartTemplate title={'탈퇴 사유'} labels={chartLabels} data={chartData} />
                </CCardBody>
              </CCol>
              <CCol xs={8}>
                <CCardBody>
                  <BarChartTemplate title={'탈퇴 사유'} labels={chartLabels} data={chartData} />
                </CCardBody>
              </CCol>
            </CRow>
            <div>서비스 이용 불편 : {chartData[0]}</div>
            <div> 가격 불만족 : {chartData[1]}</div>
            <div> 제품 기능 불만족 : {chartData[2]}</div>
            <div>기타(직접 입력) : {chartData[3]}</div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={resignUserList}
              onClick={handleShowUserDetailModal}
              columns={resignUserListColumns}
              className={'userList'}
              datePickerOptions={resignUserOptions}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <ResignUserModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}
export default ResignUserList
