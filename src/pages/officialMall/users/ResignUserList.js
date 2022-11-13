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
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  // const [item, setItem] = useState({
  //   userName: '',
  //   businessNumber: '',
  //   createdAt: '',
  //   status: false,
  //   phoneNumber: '',
  //   businessRegistration: '',
  //   businessName: '',
  //   businessAddress: '',
  // })

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
        url: EndPoint.GET_V1_MALL_USERS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('loadMallUserList error')
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

  useEffect(() => {
    setItems(testUserTableValues.filter(v => !v.status))
    setChartData(ChartTestData)
    onLoadMallReginUserList()
  }, [])

  /** Open Modal*/
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  return (
    <CRow>
      <PageHeader title='탈퇴 회원 리스트' />
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
              items={items}
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
