import React, {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../../components/Modal/homePage/employment/EmploymemtDetailModal'
import {employmentColumns} from '../../../utils/columns/homePage/employment/Columns'
import {category} from '../../../utils/columns/homePage/employment/ColumnsSelectedValue'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
const Employment = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
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

  const onLoadEmploymentList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.RECRUITMENT,
      })
      setItems(data?.data.result.responses)
    } catch (error) {
      alert(error)
    }
  }

  //가져오기 onLoad
  //생성 onCreate
  //수정 onUpdate
  //삭제 onDelete
  const onLoadDetail = async id => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          recruitmentId: id,
        },
        method: HttpMethod.GET,
        url: `${EndPoint.RECRUITMENT}/:recruitmentId`,
      })

      setSelectedItem(data.result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadEmploymentList()
  }, [])

  const handleShowEmploymentDetailModal = async item => {
    onLoadDetail(item.recruitmentId)
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

  const handleEmployDetailOnChange = ({target}) => {
    const {id, value} = target

    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  return (
    <>
      <PageHeader title='채용관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={onLoadEmploymentList}>
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
        getList={onLoadEmploymentList}
      />
    </>
  )
}

export default Employment
