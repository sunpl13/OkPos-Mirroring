import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationRegistrationsList} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import EducationRegistrationsDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationRegistrationsDetailModal'
import {
  createdInfo,
  deletedInfo,
  getDetailInfo,
  getListData,
  upDateInfo,
} from '../../../components/function/partnerCenter/ApiModules'
import moment from 'moment'

const EducationRegistrationsList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [editCheck, setEditCheck] = useState({})
  const [editor, setEditor] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [singleDate, setSingleDate] = useState('')
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([])
  const datePickerOptions = [
    {
      key: 'createdAt',
      value: '등록일',
    },
    {key: 'start', value: '교육신청 시작일'},
    {key: 'deadline', value: '교육신청 마감일'},
  ]

  // 교육 신청 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_REGISTRAUINS_NOTICES)
      .then(res => {
        setItems(res?.adminEducationRegistrationNoticeDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowDetailModal = async ({id}) => {
    if (id) {
      getDetailInfo(EndPoint.PARTNER_REGISTRAUINS_NOTICES, id)
        .then(res => {
          setSelectedItem(res)
          setEditCheck(res)
          setEditor(res?.content)
          setStartDate(res?.start)
          setEndDate(res?.deadline)
          setSingleDate(res?.educationDate)
          setShowModal(!showModal)
          setImages(res?.educationRegistrationNoticeImages)
          setFiles(
            res?.educationRegistrationNoticeFiles.map(value => ({
              ...value,
              name: value.title,
            })),
          )
        })
        .catch(err => console.log(err))
    } else {
      setShowModal(!showModal)
      setSelectedItem({})
      setEditor('')
      setEndDate(moment().add(1, 'days').format('YYYY.MM.DD'))
      setEditCheck({
        content: '',
        start: '',
        deadline: '',
        educationDate: '',
      })
      setStartDate(moment().format('YYYY.MM.DD'))
      setSingleDate(moment().add(1, 'days').format('YYYY.MM.DD'))
    }
  }
  // Modal Update
  const handleDetailModalUpDate = async () => {
    const {
      id, // 교육 신청 공고 ID
      applicantsCap, // 교육신청 제한 인원
      place, // 교육 장소
      title, // 공고 제목
    } = selectedItem

    let obj = {}
    if (files.length !== 0) {
      files.forEach(value => {
        obj[value?.name] = value.url
      })
    }

    const json = JSON.stringify({
      title: title,
      content: editor,
      start: startDate,
      deadline: endDate,
      educationDate: singleDate,
      place: place,
      applicantsCap: applicantsCap,
      files: obj,
      images: images.length !== 0 ? images.map(img => img.url) : [],
    })
    if (id ? window.confirm('수정하시겠습니까?') : window.confirm('추가하시겠습니까?')) {
      if (!title) return alert('제목을 입력해 주세요.')
      if (!editor) return alert('본문을 입력해 주세요.')
      if (!endDate || !startDate) return alert('접수기간을 입력해 주세요.')
      if (!singleDate) return alert('교육 일자를 입력해주세요.')
      if (!place) return alert('교육 장소를 입력해주세요.')
      if (!applicantsCap) return alert('교육 인원을 입력해주세요.')
      id
        ? upDateInfo(EndPoint.PARTNER_REGISTRAUINS_NOTICES, id, json)
            .then(res => {
              getList()
              setEditCheck({
                ...selectedItem,
                content: editor,
                start: startDate,
                deadline: endDate,
                educationDate: singleDate,
              })
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
        : createdInfo(EndPoint.PARTNER_REGISTRAUINS_NOTICES, json)
            .then(res => {
              getList()
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
    }
  }
  // Modal onClose
  const handleDetailModalOnClose = () => {
    const {
      applicantsCap, // 교육신청 제한 인원
      place, // 교육 장소
      title, // 공고 제목
    } = selectedItem
    const {content} = editCheck

    if (
      editCheck.title !== title ||
      content?.replace(/<[^>]*>?| /g, '') !== editor?.replace(/<[^>]*>?| /g, '') ||
      editCheck.applicantsCap !== applicantsCap ||
      editCheck.place !== place ||
      editCheck.start !== startDate ||
      editCheck.deadline !== endDate ||
      editCheck.educationDate !== singleDate
    ) {
      if (window.confirm('정말 페이지에서 나가시겠습니까?.\n\n지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        return setShowModal(false)
      } else {
        return null
      }
    } else {
      return setShowModal(false)
    }
  }

  // Modal onChange
  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // Modal Delete
  const handleOrderOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deletedInfo(EndPoint.PARTNER_REGISTRAUINS_NOTICES, id)
        .then(res => {
          getList()
          setShowModal(false)
          return alert(res)
        })
        .catch(err => console.log(err))
    }
  }

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
              datePickerOptions={datePickerOptions}
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
        images={images}
        setImages={setImages}
        files={files}
        setFiles={setFiles}
        onClose={handleDetailModalOnClose}
      />
    </CRow>
  )
}

export default EducationRegistrationsList
