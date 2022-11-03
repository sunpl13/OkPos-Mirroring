import React, {useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testEmployments} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../../components/Modal/employment/EmploymemtDetailModal'
import {employmentColumns} from '../../../utils/columns/employment/Columns'
import {categorys} from '../../../utils/columns/employment/ColumnsSelectedValue'

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
  const [selectedItem, setSelectedItem] = useState<EmploymentType>({
    No: -1,
    category: '',
    status: false,
    employName: '',
    employStartDate: '',
    employEndDate: '',
    employbannerImg: '',
    employmentType: 'a',
    workArea: '',
    education: 'a',
    career: 'a',
    des: '',
    qualifications: '',
    preferentiaTreatment: '',
    reason: '',
    departmentStatus: '',
    etc: '',
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
      No: -1,
      category: '',
      status: false,
      employName: '',
      employStartDate: '',
      employEndDate: '',
      employbannerImg: '',
      employmentType: 'a',
      workArea: '',
      education: 'a',
      career: 'a',
      des: '',
      qualifications: '',
      preferentiaTreatment: '',
      reason: '',
      departmentStatus: '',
      etc: '',
    })
    setShowModal(!showModal)
  }

  const handleEmployDetailOnChange = ({target}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {id, value} = target
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
                selectedOptions={categorys}
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
