import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import ResignUserModal from '../../../components/Modal/officialMall/ResignUserModal'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {resignUserListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const ResignUserList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [resignUserList, setResignUserList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

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
      setResignUserList(res.result.resignUserInfos)
      setChartData([])

      // 이부분 수정 요망
      for (const [key, value] of Object.entries(res.inActiveUserWithdrawalCategoryStatistics)) {
        setChartData(chartData => [
          ...chartData,
          {
            label: `${chartList[key].value} ${value} 명`,
            data: [value],
            backgroundColor: chartList[key].backgroundColor,
            borderColor: chartList[key].borderColor,
            borderWidth: 2,
          },
        ])
      }
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallReginUserList()
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
            <BarChartTemplate title={'탈퇴 사유'} data={chartData || [{}]} />
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
            />
          </CCardBody>
        </CCard>
      </CCol>
      <ResignUserModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}
export default ResignUserList
