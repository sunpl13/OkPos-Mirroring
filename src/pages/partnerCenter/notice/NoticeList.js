import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import NoticeDetailModal from '../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import Axios from 'axios'
import {sendImageUrlFormat} from '../../../utils/awsCustom'

const NoticeList = () => {
  const [items, setItems] = useState()
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [editor, setEditor] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)
  const [imageList, setImageList] = useState([])
  const [fileList, setFileList] = useState([])
  // 공지사항 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_NOTICES,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
      }
      if (code === 1000) {
        setItems(result?.adminNoticePartnerDTOs)
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
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    if (id) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_NOTICES}/${id}`,
        })
        if (!isSuccess || isEmpty(result)) {
          return alert(message)
        }
        if (code === 1000) {
          setSelectedItem(result)
          setEditCheck(result)
          setEditor(result.content)
          setImageList(result.noticeImages)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({})
      setEditCheck({})
      setEditor('')
      setEditMode(false)
    }
  }
  // Detail Modal
  const handleNoticeModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleNoticeDetailModalUpdate = async () => {
    const {id, title, noticeFiles, noticeImages, category, isApplicationNotice} = selectedItem
    const imgUrls = sendImageUrlFormat(imageList)
    const fileUrls = sendImageUrlFormat(fileList)

    const json = JSON.stringify({
      title: title,
      content: editor,
      category: category.replace(/<[^>]*>?| /g, ''),
      isApplicationNotice: !!isApplicationNotice,
      files: {},
      images: [],
    })
    console.log(imageList)
    if (id) {
      if (window.confirm('공지사항을 수정하시겠습니까?')) {
        if (!title) return alert('공지사항 제목을 입력해 주세요.')
        //if (noticeFiles.length === 0) return alert('파일을 등록해 주세요.')
        //if (noticeImages.length === 0) return alert('이미지를 등록해 주세요.')
        if (!editor) return alert('공지사항 본문을 작성해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.PARTNER_NOTICES}/${id}`,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            getList()
            alert(message)
            return setShowModal(false)
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (window.confirm('공지사항을 등록하시겠습니까?')) {
        if (!title) return alert('공지사항 제목을 입력해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요.')
        if (!editor) return alert('공지사항 본문을 입력해 주세요.')
        try {
          const {
            data: {isSuccess, result, code, message},
          } = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.PARTNER_NOTICES,
            data: json,
          })
          if (!isSuccess || isEmpty(result)) {
            return alert(message)
          }
          if (code === 1000) {
            getList()
            alert(message)
            return setShowModal(false)
          } else {
            alert(message)
          }
        } catch (error) {
          return alert(error)
        }
      }
    }
  }

  // onDelete
  const handleNoticeDeleteBtnOnClick = async () => {
    const {id} = selectedItem
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.PARTNER_NOTICES}/${id}`,
        })
        if (!isSuccess) {
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
  }

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
        images={imageList}
        setimages={setImageList}
      />
    </CRow>
  )
}

export default NoticeList
