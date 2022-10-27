import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserDetailModal from '../../../components/Modal/users/UserDetailModal'
import {testUserTableValues} from '../../test/testConstant'
import BarChartTemplate from '../../../components/chart/BarChartTemplate'
import {ChartTestData} from '../../test/ChartTest'
import PageHeader from '../../../components/common/PageHeader'

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

  /** User list Columns */
  const userListColumns = [
    {
      key: 'id',
      _props: {color: 'primary', className: 'userId'},
    },
    {
      key: 'images',
      _props: {color: 'primary', className: 'secessionReason'},
    },
    {
      key: 'userName',
      _props: {color: 'primary', className: 'userName'},
    },
    {
      key: 'businessNumber',
      _props: {color: 'primary', className: 'businessNumber'},
    },
    {
      key: 'phoneNumber',
      _props: {color: 'primary', className: 'phoneNumber'},
    },
    {
      key: 'createdAt',
      _props: {color: 'primary', className: 'createdAt'},
    },
    {
      key: 'deletedAt',
      _props: {color: 'primary', className: 'deletedAt'},
    },
    {
      key: 'businessRegistration',
      _props: {color: 'primary', className: 'businessRegistration'},
    },
    {
      key: 'businessName',
      _props: {color: 'primary', className: 'businessName'},
    },
    {
      key: 'businessAddress',
      _props: {color: 'primary', className: 'businessAddress'},
    },
    {
      key: 'secessionReason',
      _props: {color: 'primary', className: 'secessionReason'},
    },
    {
      key: 'status',
      _props: {color: 'primary', className: 'status'},
      sorter: false,
      filter: false,
    },
  ]

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
            <ListTemplate
              items={items}
              onClick={handleShowUserDetailModal}
              columns={userListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}
export default WithdrawalUsers
