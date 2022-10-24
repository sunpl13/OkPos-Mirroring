import React, {useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {testEmployments} from '../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
interface IEmploy {
  No: number
  category: string
  employName: string
  employStartDate: string
  employEndDate: string
  status: string
}
const Employment = () => {
  const [items, setItems] = useState<IEmploy[]>([])
  const [selectedItem, setSelectedItem] = useState({})
  // const [item, setItem] = useState({
  //   No: 0,
  //   category: '',
  //   employName: '',
  //   employStartDate: '',
  //   employEndDate: '',
  //   status: '',
  // })
  console.log(selectedItem)
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const employmentColumns = [
    {
      key: 'No',
      _props: {color: 'primary', className: 'employId'},
    },
    {
      key: 'category',
      Label: '카테고리',
      _props: {color: 'primary', className: 'category'},
    },
    {
      key: 'employName',
      Label: '공고 제목',
      _props: {color: 'primary', className: 'employName'},
    },
    {
      key: 'employStartDate',
      Label: '공고 시작일',
      _props: {color: 'primary', className: 'employDate'},
    },
    {
      key: 'employEndDate',
      Label: '공고 종료일',
      _props: {color: 'primary', className: 'employDate'},
    },
    {
      key: 'status',
      Label: '진행 상태',
      _props: {color: 'primary', className: 'status'},
    },
  ]

  const handleRetrieveTestList = async () => {
    const status = testEmployments.filter(v => v.status)
    console.log(testEmployments)

    setItems(status)
  }
  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowUserDetailModal = (item: IEmploy) => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  // /** Add User Modal*/
  // const handleUserItemAddModalOnChange = ({target}: any) => {
  //   const {id, value} = target
  //   setItem({
  //     ...item,
  //     [id]: value,
  //   })
  // }

  // const handleUserItemAddModalOnClick = () => {
  //   if (!item.employName) return alert('Is Not User Name')
  //   if (!item.category) return alert('Is Not Business Number')
  //   if (!item.employStartDate) return alert('Is Not Phone Number')
  //   if (!item.employEndDate) return alert('Is Not Business Registration File')
  //   if (!item.status) return alert('Is Not Business Name')
  //   setItems([
  //     ...items,
  //     {
  //       ...item,
  //     },
  //   ])
  //   setItem({
  //     No: 0,
  //     category: '',
  //     employName: '',
  //     employStartDate: '',
  //     employEndDate: '',
  //     status: '',
  //   })
  //   setShowAddModal(!showAddModal)
  // }

  return (
    <main>
      <PageHeader title='채용관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleRetrieveTestList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleShowUserItemAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowUserDetailModal}
                columns={employmentColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </main>
  )
}

export default Employment
