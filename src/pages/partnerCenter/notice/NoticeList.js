import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import NoticeDetailModal from '../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import {
  createdInfo,
  deletedInfo,
  getDetailInfo,
  getListData,
  upDateInfo,
} from '../../../components/function/partnerCenter/ApiModules'

const NoticeList = () => {
  const [items, setItems] = useState()
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [editor, setEditor] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [images, setImages] = useState([])
  const [files, setFiles] = useState([])

  // 공지사항 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_NOTICES)
      .then(res => {
        setItems(res?.adminNoticePartnerDTOs)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getList()
  }, [])

  // Open Modal
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    if (id) {
      getDetailInfo(EndPoint.PARTNER_NOTICES, id)
        .then(res => {
          setSelectedItem(res)
          setEditCheck(res)
          setEditor(res.content)
          setImages(res?.noticeImages)
          setFiles(
            res?.noticeFiles.map(value => ({
              ...value,
              name: value.title,
            })),
          )
        })
        .catch(err => console.log(err))
    } else {
      setSelectedItem({})
      setEditCheck({})
      setEditor('')
      setImages([])
      setFiles([])
    }
  }
  // Close Modal
  const handleDetailModalOnClose = () => {
    const {id, title, category} = selectedItem
    const {content} = editCheck
    if (
      (id && content?.replace(/<[^>]*>?| /g, '') !== editor?.replace(/<[^>]*>?| /g, '')) ||
      editCheck.title !== title ||
      editCheck.category !== category
    ) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        return setShowModal(false)
      } else {
        return null
      }
    } else if (
      (!id && editor?.replace(/<[^>]*>?| /g, '')) ||
      editCheck.title !== title ||
      editCheck.category !== category
    ) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        return setShowModal(false)
      } else {
        return null
      }
    } else {
      return setShowModal(false)
    }
  }

  // Modal onChange
  const handleNoticeModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleNoticeDetailModalUpdate = async () => {
    const {id, title, category, isApplicationNotice} = selectedItem
    let obj = {}
    if (files.length !== 0) {
      files.forEach(value => {
        obj[value?.name] = value.url
      })
    }

    const json = JSON.stringify({
      title: title,
      content: editor,
      category: category?.replace(/<[^>]*>?| /g, ''),
      isApplicationNotice: !!isApplicationNotice,
      files: obj,
      images: images.length !== 0 ? images.map(img => img.url) : [],
    })

    if (id ? window.confirm('공지사항을 수정하시겠습니까?') : window.confirm('공지사항을 추가하시겠습니까?')) {
      if (!title) return alert('공지사항 제목을 입력해 주세요.')
      //if (noticeFiles.length === 0) return alert('파일을 등록해 주세요.')
      //if (noticeImages.length === 0) return alert('이미지를 등록해 주세요.')
      if (!category) return alert('카테고리를 선택해 주세요.')
      if (!editor.replace(/<[^>]*>?| /g, '')) return alert('공지사항 본문을 작성해 주세요.')
      id
        ? upDateInfo(EndPoint.PARTNER_NOTICES, id, json)
            .then(res => {
              getList()
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
        : createdInfo(EndPoint.PARTNER_NOTICES, json)
            .then(res => {
              getList()
              setShowModal(false)
              return alert(res)
            })
            .catch(err => console.log(err))
    }
  }

  // onDelete
  const handleNoticeDeleteBtnOnClick = async () => {
    const {id} = selectedItem
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      deletedInfo(EndPoint.PARTNER_NOTICES, id)
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
      setSelectedItem({})
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='공지사항 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate items={items} onClick={handleShowModal} columns={noticeList} className={'userList'} />
          </CCardBody>
        </CCard>
      </CCol>
      <NoticeDetailModal
        visible={showModal}
        setVisible={setShowModal}
        value={selectedItem}
        onChange={handleNoticeModalOnChange}
        upDate={handleNoticeDetailModalUpdate}
        editor={editor}
        setEditor={setEditor}
        onDelete={handleNoticeDeleteBtnOnClick}
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

export default NoticeList
