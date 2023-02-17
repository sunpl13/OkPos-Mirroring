import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationScheduleListColumns} from '../../../utils/columns/partnerCenter/Columns'
import EducationScheduleDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationScheduleDetailModal'
import {EndPoint} from '../../../dataManager/apiMapper'
import {
  createdInfo,
  deletedInfo,
  getDetailInfo,
  getListData,
  upDateInfo,
} from '../../../components/function/partnerCenter/ApiModules'

const EducationScheduleList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [editor, setEditor] = useState('')
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([])

  // 교육 일정 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_SCHEDULES)
      .then(res => {
        setItems(res?.adminEducationScheduleDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = async ({id}) => {
    if (id) {
      getDetailInfo(EndPoint.PARTNER_SCHEDULES, id)
        .then(res => {
          setSelectedItem(res)
          setEditCheck(res)
          setEditor(res?.content)
          setShowModal(!showModal)
          setImages(res?.educationScheduleImages)
          setFiles(
            res?.educationScheduleFiles.map(value => ({
              ...value,
              name: value.title,
            })),
          )
        })
        .catch(err => console.log(err))
    } else {
      setShowModal(!showModal)
      setImages([])
      setFiles([])
      setSelectedItem({})
      setEditCheck({
        content: '',
      })
      setEditor('')
    }
  }

  const handleDetailModalOnClose = () => {
    const {title} = selectedItem
    const {content} = editCheck
    if (editCheck.title !== title || content?.replace(/<[^>]*>?| /g, '') !== editor?.replace(/<[^>]*>?| /g, '')) {
      if (window.confirm('정말 페이지에서 나가시겠습니까?.\n\n지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        return setShowModal(false)
      } else {
        return null
      }
    } else {
      return setShowModal(false)
    }
  }

  // Modal UpDate
  const handleDetailModalUpDate = async () => {
    const {id, title} = selectedItem
    let obj = {}
    if (files.length !== 0) {
      files.forEach(value => {
        obj[value?.name] = value.url
      })
    }

    const json = JSON.stringify({
      title: title,
      content: editor,
      files: obj,
      images: images?.length !== 0 ? images.map(img => img?.url) : [],
    })

    if (id ? window.confirm('교육 일정을 수정하시겠습니까?') : window.confirm('교육 일정을 등록하시겠습니까?')) {
      if (!title) return alert('제목을 입력해 주세요.')
      //if (!files) return alert('Not File')
      //if (!images) return alert('Not Image')
      if (!editor.replace(/<[^>]*>?| /g, '')) return alert('본문을 입력해 주세요.')
      id
        ? upDateInfo(EndPoint.PARTNER_SCHEDULES, id, json)
            .then(res => {
              getList()
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
        : createdInfo(EndPoint.PARTNER_SCHEDULES, json)
            .then(res => {
              getList()
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
    }
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // 교육 일정 삭제 API
  const handleOrderListOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deletedInfo(EndPoint.PARTNER_SCHEDULES, id)
        .then(res => {
          getList()
          setShowModal(false)
          return alert(res)
        })
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    if (!showModal) {
      setEditor('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='교육 일정 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowMaterialDetailModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={educationScheduleListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationScheduleDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleOrderModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleOrderListOnDelete}
        editMode={editMode}
        setEditMode={setEditMode}
        editor={editor}
        setEditor={setEditor}
        images={images}
        setImages={setImages}
        files={files}
        setFiles={setFiles}
        onClose={handleDetailModalOnClose}
      />
    </CRow>
  )
}

export default EducationScheduleList
