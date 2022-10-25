import React, {useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {testEmployments} from '../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
export type EmploymentType = {
  No: number
  category: string
  status: boolean
  employName: string
  employStartDate: string
  employEndDate: string
  employbannerImg: string
  employmentType: 'a' | 'b' | 'c'
  workArea: string
  education: 'a' | 'b' | 'c' | 'd'
  career: 'a' | 'b' | 'c'
  des: string
  qualifications: string
  preferentiaTreatment: string
  reason: string
  departmentStatus: string
  etc: string
}
const Employment = () => {
  const [items, setItems] = useState<EmploymentType[]>([])
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
      _props: {color: 'primary', className: 'employStartDate'},
    },
    {
      key: 'employEndDate',
      Label: '공고 종료일',
      _props: {color: 'primary', className: 'employEndDate'},
    },
    {
      key: 'status',
      Label: '진행 상태',
      _props: {color: 'primary', className: 'status'},
    },
    {
      key: 'employbannerImg',
      Label: '채용 이미지',
      _props: {color: 'primary', className: 'employbannerImg'},
    },
    {
      key: 'employmentType',
      Label: '채용 형태',
      _props: {color: 'primary', className: 'employmentType'},
    },
    {
      key: 'workArea',
      Label: '근무 지역',
      _props: {color: 'primary', className: 'workArea'},
    },
    {
      key: 'education',
      Label: '학력 및 전공',
      _props: {color: 'primary', className: 'education'},
    },
    {
      key: 'career',
      Label: '경력',
      _props: {color: 'primary', className: 'career'},
    },
    {
      key: 'des',
      Label: '직무내용',
      _props: {color: 'primary', className: 'des'},
    },
    {
      key: 'qualifications',
      Label: '자격 요건',
      _props: {color: 'primary', className: 'qualifications'},
    },
    {
      key: 'preferentiaTreatment',
      Label: '우대 사항',
      _props: {color: 'primary', className: 'preferentiaTreatment'},
    },
    {
      key: 'reason',
      Label: '채용 사유',
      _props: {color: 'primary', className: 'reason'},
    },
    {
      key: 'departmentStatus',
      Label: '부서 현황',
      _props: {color: 'primary', className: 'departmentStatus'},
    },
    {
      key: 'etc',
      Label: '기타',
      _props: {color: 'primary', className: 'etc'},
    },
  ]

  const handleRetrieveTestList = async () => {
    const status = testEmployments.filter(v => v.status)
    console.log(testEmployments)

    setItems(status as EmploymentType[])
  }
  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowUserDetailModal = (item: EmploymentType) => {
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
