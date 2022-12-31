import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationRegistrationsList} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import EducationRegistrationsDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationRegistrationsDetailModal'

const EducationRegistrationsList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [editor, setEditor] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [singleDate, setSingleDate] = useState('')
  // 교육 신청 리스트 API
  const getList = async () => {
    try {
      const {
        data: {result, code, message, isSuccess},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_REGISTRAUINS_NOTICES,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
      }
      if (code === 1000) {
        setItems(result?.adminEducationRegistrationNoticeDTOs)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowDetailModal = async ({id}) => {
    if (id) {
      try {
        const {
          data: {result, code, message, isSuccess},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_REGISTRAUINS_NOTICES}/${id}`,
        })
        if (!isSuccess || isEmpty(result)) {
          return alert(message)
        }
        if (code === 1000) {
          setSelectedItem(result)
          setEditor(result?.content)
          setStartDate(result?.start)
          setEndDate(result?.deadline)
          setSingleDate(result?.educationDate)
          setShowModal(!showModal)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setShowModal(!showModal)
      setSelectedItem({})
    }
  }

  const handleDetailModalUpDate = async () => {
    const {
      id, // 교육 신청 공고 ID
      applicantsCap, // 교육신청 제한 인원
      educationRegistrationNoticeFiles, // 교육 신청 공고 파일
      educationRegistrationNoticeImages, // 교육 신청 공고 이미지
      place, // 교육 장소
      title,
    } = selectedItem
    const json = JSON.stringify({
      title: title,
      content: editor,
      start: startDate,
      deadline: endDate,
      educationDate: singleDate,
      place: place,
      applicantsCap: applicantsCap,
      files: {},
      images: [],
    })
    if (id) {
      if (window.confirm('수정하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        if (!editor) return alert('본문을 입력해 주세요.')
        if (!endDate || !startDate) return alert('접수기간을 입력해 주세요.')
        if (!singleDate) return alert('교육 일자를 입력해주세요.')
        if (!place) return alert('교육 장소를 입력해주세요.')
        if (!applicantsCap) return alert('교육 인원을 입력해주세요.')
        try {
          const {
            data: {result, code, message, isSuccess},
          } = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.PARTNER_REGISTRAUINS_NOTICES}/${id}`,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            getList()
            return alert(message)
          } else {
            alert(message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    } else {
      if (window.confirm('추가하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        if (!editor) return alert('본문을 입력해 주세요.')
        if (!endDate || !startDate) return alert('접기기간을 입력해 주세요.')
        if (!singleDate) return alert('교육 일정을 입력해주세요.')
        if (!place) return alert('교육 장소를 입력해주세요.')
        if (!applicantsCap) return alert('교육 인원을 입력해주세요.')
        try {
          const {
            data: {result, code, message, isSuccess},
          } = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.PARTNER_REGISTRAUINS_NOTICES,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            getList()
            setShowModal(false)
            return alert(message)
          } else {
            alert(message)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleOrderOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        const {
          data: {result, code, message, isSuccess},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.PARTNER_REGISTRAUINS_NOTICES}/${id}`,
        })

        if (!isSuccess) {
          return alert(message)
        }
        if (code === 1000) {
          getList()
          setShowModal(false)
          return alert(message)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (!showModal) {
      setEditor('')
      setEndDate('')
      setStartDate('')
      setSingleDate('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='교육 신청 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowDetailModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowDetailModal}
              columns={educationRegistrationsList}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationRegistrationsDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleOrderModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleOrderOnDelete}
        editMode={editMode}
        setEditMode={setEditMode}
        editor={editor}
        setEditor={setEditor}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
        singleDate={singleDate}
        setSingleDate={setSingleDate}
      />
    </CRow>
  )
}

export default EducationRegistrationsList
