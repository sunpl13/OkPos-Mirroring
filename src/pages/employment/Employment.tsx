import React, {useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {testEmployments} from '../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../components/Modal/employment/EmploymemtDetailModal'
import {employmentColumns} from '../../utils/columns/employment/Columns'
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
    No: 0,
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
  const [item, setItem] = useState<EmploymentType>({
    No: 0,
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
  const [showAddModal, setShowAddModal] = useState(false)

  const handleRetrieveTestList = async () => {
    setItems(testEmployments as EmploymentType[])
  }
  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowEmploymentDetailModal = (item: EmploymentType) => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  // /** Add User Modal*/
  const handleEmployDetailOnChange = ({target}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {id, value} = target
    setItem({
      ...item,
      [id]: value,
    })
  }

  // const handleEmployItemAddModalOnClick = () => {
  //   setItems([
  //     ...items,
  //     {
  //       ...item,
  //     },
  //   ])
  //   setItem({
  //     No: 0,
  //     category: '',
  //     status: false,
  //     employName: '',
  //     employStartDate: '',
  //     employEndDate: '',
  //     employbannerImg: '',
  //     employmentType: 'a',
  //     workArea: '',
  //     education: 'a',
  //     career: 'a',
  //     des: '',
  //     qualifications: '',
  //     preferentiaTreatment: '',
  //     reason: '',
  //     departmentStatus: '',
  //     etc: '',
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
                onClick={handleShowEmploymentDetailModal}
                columns={employmentColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <EmploymemtDetailModal
        readOnly={false}
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
      />
    </main>
  )
}

export default Employment
