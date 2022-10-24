import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
import UserDetailModal from '../../components/Modal/users/UserDetailModal'
import {testUserTableValues} from '../test/testConstant'
import {CChart} from '@coreui/react-chartjs'

const WithdrawalUsers = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({
    userName: '',
    businessNumber: '',
    createdAt: '',
    status: false,
    phoneNumber: '',
    businessRegistration: '',
    businessName: '',
    businessAddress: '',
  })

  const [showModal, setShowModal] = useState(false)

  /** Userlist Columns */
  const userListColumns = [
    {
      key: 'id',
      _props: {color: 'primary', className: 'userId'},
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

  const handleRetrieveTestList = async () => {
    const status = testUserTableValues.filter(v => !v.status)
    setItems(status)
  }
  /** Open Modal*/
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={12}>
                <CButton color='primary' onClick={handleRetrieveTestList}>
                  조회하기
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <CChart
              type='bar'
              data={{
                datasets: [
                  {
                    label: '서비스 문제',
                    backgroundColor: '#f87979',
                    data: [20],
                  },
                  {
                    label: '가격 문제',
                    backgroundColor: 'skyblue',
                    data: [55],
                  },
                  {
                    label: '제품 문제',
                    backgroundColor: '#ddd',
                    data: [38],
                  },
                  {
                    label: '타 업체의 비해 경쟁력이 떨어짐',
                    backgroundColor: 'blue',
                    data: [38],
                  },
                  {
                    label: '단순 변심',
                    backgroundColor: 'yellow',
                    data: [38],
                  },
                  {
                    label: '그 외에 문제',
                    backgroundColor: 'origin',
                    data: [38],
                  },
                ],
              }}
              labels='months'
            />
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
