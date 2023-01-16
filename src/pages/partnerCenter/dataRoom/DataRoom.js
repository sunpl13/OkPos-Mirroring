import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {dataRoomList} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import DataRoomDetailModal from '../../../components/Modal/partnerCenter/DataRoom/DataRoomDetailModal'
import {
  createdInfo,
  deletedInfo,
  getDetailInfo,
  getListData,
  upDateInfo,
} from '../../../components/function/partnerCenter/ApiModules'

const DataRoom = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [editor, setEditor] = useState('')
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([])

  // 자료실 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_DATAROOMS)
      .then(res => {
        setItems(res?.adminDataRoomPartnerDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowDataRoomDetailModal = async ({id}) => {
    if (id) {
      getDetailInfo(EndPoint.PARTNER_DATAROOMS, id)
        .then(res => {
          setSelectedItem({
            id: id,
            ...res,
          })
          setEditCheck(res)
          setEditor(res?.content)
          setImages(res?.dataRoomImages)
          setFiles(
            res?.dataRoomFiles.map(value => ({
              ...value,
              name: value.title,
            })),
          )
        })
        .catch(err => console.log(err))
    } else {
      setSelectedItem({})
      setEditCheck({
        content: '',
      })
      setEditor('')
      setImages([])
      setFiles([])
    }
    setShowModal(!showModal)
  }

  // Modal onClose
  const handleDetailModalOnClose = () => {
    const {title, category} = selectedItem
    const {content} = editCheck
    if (
      editCheck.title !== title ||
      editCheck.category !== category ||
      content?.replace(/<[^>]*>?| /g, '') !== editor?.replace(/<[^>]*>?| /g, '')
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

  // Modal UpDate
  const handleDetailModalUpDate = () => {
    const {id, title, category} = selectedItem
    const {content} = editCheck
    let obj = {}
    if (files.length !== 0) {
      files.forEach(value => {
        obj[value?.name] = value.url
      })
    }
    const json = JSON.stringify({
      title: title,
      content: editor,
      category: category && category.replace(/<[^>]*>?| /g, ''),
      files: obj,
      images: images.length !== 0 ? images.map(img => img.url) : [],
    })

    if (id) {
      if (window.confirm('자료를 수정하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요')
        if (!editor) return alert('본문을 입력해 주세요.')
        upDateInfo(EndPoint.PARTNER_DATAROOMS, id, json)
          .then(res => {
            getList()
            return alert(res)
          })
          .catch(err => console.log(err))
      }
    } else {
      if (window.confirm('자료를 등록하시겠습니까?')) {
        if (!title) return alert('제목을 입력해 주세요.')
        //if (!dataRoomFiles) return alert('파일을 등록해 주세요')
        if (!category) return alert('카테고리를 선택해 주세요')
        if (!editor) return alert('본문을 입력해 주세요.')
        createdInfo(EndPoint.PARTNER_DATAROOMS, json)
          .then(res => {
            getList()
            setShowModal(false)
            return alert(res)
          })
          .catch(err => console.log(err))
      }
    }
  }

  const handleDataRoomModalOnChange = ({target: {id, value}}) => {
    if (id === 'title' && value.length >= 15) return null
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleDataRoomModalOnDelete = async () => {
    const {id} = selectedItem
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      deletedInfo(EndPoint.PARTNER_DATAROOMS, id)
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
      <PageHeader title='자료 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowDataRoomDetailModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowDataRoomDetailModal}
              columns={dataRoomList}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <DataRoomDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleDataRoomModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleDataRoomModalOnDelete}
        editor={editor}
        setEditor={setEditor}
        editMode={editMode}
        setEditMode={setEditMode}
        images={images}
        setImages={setImages}
        files={files}
        setFiles={setFiles}
        onClose={handleDetailModalOnClose}
      />
    </CRow>
  )
}

export default DataRoom
