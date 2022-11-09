import React, {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testEmployments} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../../components/Modal/homePage/employment/EmploymemtDetailModal'
import {employmentColumns} from '../../../utils/columns/homePage/employment/Columns'
import {category} from '../../../utils/columns/homePage/employment/ColumnsSelectedValue'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {AxiosResponse} from 'axios'

export type EmploymentType = {
  recruitmentId: number
  category: string
  proceed: 0 | 1
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

interface ReseponseType extends AxiosResponse {
  code: number
  isSuccess: boolean
  result: EmploymentType
}
const Employment = () => {
  const [items, setItems] = useState<EmploymentType[]>([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState<EmploymentType>({
    recruitmentId: -1,
    category: '',
    proceed: 0,
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

  const getList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.RECRUITMENT,
      })
      setItems(data?.data.result)
    } catch (error) {
      alert(error)
    }
  }

  const getListDetail = async (id: number) => {
    try {
      const {data} = (await ApiConfig.request({
        data: {},
        query: {},
        path: {
          recruitmentId: id,
        },
        method: HttpMethod.GET,
        url: `${EndPoint.RECRUITMENT}/:recruitmentId`,
      })) as ReseponseType

      setSelectedItem(data.result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  const handleRetrieveTestList = async () => {
    setItems(testEmployments as EmploymentType[])
  }

  const handleShowEmploymentDetailModal = async (item: EmploymentType) => {
    getListDetail(item.recruitmentId)
    setShowModal(!showModal)
  }

  const handleEmploymentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      recruitmentId: -1,
      category: '',
      proceed: 0,
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
                  <CButton color='primary' onClick={getList}>
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
