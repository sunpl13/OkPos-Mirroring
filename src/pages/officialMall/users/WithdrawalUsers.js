import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import ResignUserModal from '../../../components/Modal/officialMall/ResignUserModal'
import {testUserTableValues} from '../../test/testConstant'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import {ChartTestData} from '../../test/ChartTest'
import PageHeader from '../../../components/common/PageHeader'
import {resignUserListColumns} from '../../../utils/columns/officialMall/Columns'

const WithdrawalUsers = () => {
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

  useEffect(() => {
    setItems(testUserTableValues.filter(v => !v.status))
    setChartData(ChartTestData)
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
export default WithdrawalUsers
