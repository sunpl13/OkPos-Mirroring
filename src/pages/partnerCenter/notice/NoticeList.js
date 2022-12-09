import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import NoticeDetailModal from '../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../utils/columns/partnerCenter/Columns'
import NoticeAddModal from '../../../components/Modal/partnerCenter/notice/NoticeAddModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import {useNavigate} from 'react-router-dom'

const NoticeList = () => {
  const [items, setItems] = useState()
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [editor, setEditor] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(true)

  // 모듈 선언
  const navigate = useNavigate()

  // 공지사항 API
  const getNoticeList = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_NOTICES}?page=${1}`,
      })
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
      } else {
        alert(data?.message)
      }
      setItems(data.result.adminNoticePartnerDTOs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getNoticeList()
  }, [])

  /** Open Modal*/
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    if (id) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.GET_PARTNER_NOTICES}/${id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          console.log(data)
          setSelectedItem({
            id: id,
            ...data.result,
          })
          setEditCheck(data.result)
          setEditor(data.result.content)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({
        title: '',
        category: '',
        content: '',
        noticeFiles: [],
        noticeImages: [],
      })
      setEditCheck({
        title: '',
        category: '',
        content: '',
        noticeFiles: [],
        noticeImages: [],
      })
      setEditor('')
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
    const {id, title, content, noticeFiles, noticeImages, category} = selectedItem
    const json = JSON.stringify({
      ...selectedItem,
      content: editor,
    })
    if (id && (editCheck.title !== title || editCheck.content !== editor || editCheck.category !== category)) {
      if (window.confirm('공지사항을 수정하시겠습니까?')) {
        if (!title) return alert('공지사항 제목을 입력해 주세요.')
        if (noticeFiles.length === 0) return alert('파일을 등록해 주세요.')
        if (noticeImages.length === 0) return alert('이미지를 등록해 주세요.')
        if (!editor) return alert('공지사항 본문을 작성해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요.')
        try {
          const {data} = await ApiConfig.request({
            method: HttpMethod.PUT,
            url: `${EndPoint.GET_PARTNER_NOTICES}/${id}`,
            data: json,
          })
          console.log(data)
          if (!data.isSuccess || isEmpty(data?.result)) {
            return
          }
          if (data?.code === 1000) {
            setShowModal(false)
            return alert(data.message)
          }
        } catch (error) {
          console.log(error)
        }
      } else {
        setShowModal(false)
      }
    } else if (!id && (title || editor || category)) {
      if (window.confirm('공지사항을 추가하시겠습니까?')) {
        if (!title) return alert('공지사항 제목을 입력해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요.')
        if (!editor) return alert('공지사항 본문을 입력해 주세요.')
        console.log(json)
        try {
          const {data} = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.GET_PARTNER_NOTICES,
            data: json,
          })
          console.log(data)
          if (!data.isSuccess || isEmpty(data?.result)) {
            return alert(data?.message)
          }
          if (data?.code === 1000) {
            alert(data.message)
            window.reload()
          } else {
            alert(data?.message)
          }
        } catch (error) {
          return alert(error)
        }
      }
      setShowModal(false)
    }
  }

  // onDelete
  const handleNoticeDeleteBtnOnClick = async () => {
    const {id} = selectedItem
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.GET_PARTNER_NOTICES}/${id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          alert(data.message)
          window.reload()
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    if (!showModal) {
      setEditor('')
      setEditMode(true)
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
            <ListTemplate
              items={items}
              onClick={handleShowModal}
              columns={noticeList}
              className={'userList'}
              onDelete={handleNoticeDeleteBtnOnClick}
            />
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
      />
    </CRow>
  )
}

export default NoticeList
