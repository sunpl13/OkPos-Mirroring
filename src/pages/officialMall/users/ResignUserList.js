import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import ResignUserModal from '../../../components/Modal/officialMall/ResignUserModal'
import {testUserTableValues} from '../../test/testConstant'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import {ChartTestData} from '../../test/ChartTest'
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
  const [chartData, setChartData] = useState([
    {
      label: '',
      data: [0],
      backgroundColor: '',
      borderColor: '',
      borderWidth: 2,
    },
  ])

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
      setResignUserList(res.result)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    setChartData(ChartTestData)
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
