import React, {useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testEmployments} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../../components/Modal/homePage/employment/EmploymemtDetailModal'
import {employmentColumns} from '../../../utils/columns/homePage/employment/Columns'
import {category} from '../../../utils/columns/homePage/employment/ColumnsSelectedValue'

export type EmploymentType = {
  recruitmentId: number
  category: string
  proceed: boolean
  title: string
  startedAt: string
  closedAt: string
  imageUrl: string
  jobType: 'FULL_TIME' | 'PART_TIME' | 'INTERN'
  location: string
  education: 'UNIVERSITY_GRADUATE_4_YEAR' | 'UNIVERSITY_GRADUATE_2_3_YEAR' | 'HIGH_SCHOOL_GRADUATE'
  career: 'NEW' | 'EXPERIENCED' | 'ANY'
  duty: string
  qualification: string
  preference: string
  hiringReason: string
  departmentStatus: string
  otherNote: string
}
const Employment = () => {
  const [items, setItems] = useState<EmploymentType[]>([])
  const [selectedItem, setSelectedItem] = useState<EmploymentType>({
    recruitmentId: -1,
    category: '',
    proceed: false,
    title: '',
    startedAt: '',
    closedAt: '',
    imageUrl: '',
    jobType: 'FULL_TIME',
    location: '',
    education: 'UNIVERSITY_GRADUATE_4_YEAR',
    career: 'ANY',
    duty: '',
    qualification: '',
    preference: '',
    hiringReason: '',
    departmentStatus: '',
    otherNote: '',
  })

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleRetrieveTestList = async () => {
    setItems(testEmployments as EmploymentType[])
  }

  const handleShowEmploymentDetailModal = (item: EmploymentType) => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleEmploymentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      recruitmentId: -1,
      category: '',
      proceed: false,
      title: '',
      startedAt: '',
      closedAt: '',
      imageUrl: '',
      jobType: 'FULL_TIME',
      location: '',
      education: 'UNIVERSITY_GRADUATE_4_YEAR',
      career: 'ANY',
      duty: '',
      qualification: '',
      preference: '',
      hiringReason: '',
      departmentStatus: '',
      otherNote: '',
    })
    setShowModal(!showModal)
  }

  const handleEmployDetailOnChange = ({target}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {id, value} = target
    console.log(id, value)

    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

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
                  <CButton color='primary' onClick={handleEmploymentAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowEmploymentDetailModal}
                columns={employmentColumns}
                className={'userList'}
                selectedOptions={category}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <EmploymemtDetailModal
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </main>
  )
}

export default Employment
