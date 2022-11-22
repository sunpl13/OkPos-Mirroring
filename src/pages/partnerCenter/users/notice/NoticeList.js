import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../../components/common/PageHeader'
import ListTemplate from '../../../../components/list/ListTemplate'
import NoticeDetailModal from '../../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../../utils/columns/partnerCenter/Columns'
import NoticeAddModal from '../../../../components/Modal/partnerCenter/notice/NoticeAddModal'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {isEmpty} from '../../../../utils/utility'

const NoticeList = () => {
  const [items, setItems] = useState()
  const [selectedItem, setSelectedItem] = useState({
    content: '',
    createdAt: '',
    noticeFiles: [],
    noticeImages: [],
  })
  const [editCheck, setEditCheck] = useState({})

  /** Show Modal */
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  /** Open Modal*/
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    if (id !== undefined) {
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
          setSelectedItem(data.result)
          setEditCheck(data.result)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({
        title: '',
        content: '',
        files: [],
        images: [],
      })
      setEditCheck({
        title: '',
        content: '',
        files: [],
        images: [],
      })
    }
  }
  const handleShowAddModal = () => {
    setSelectedItem({
      title: '',
      content: '',
      category: '',
      files: [],
      images: [],
    })
    setShowAddModal(!showAddModal)
  }
  // 공지사항 API
  const getNoticeList = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_NOTICES}?page=${1}`,
      })
      console.log(data)
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

  /** Detail Modal */
  const handleNoticeModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleNoticeDetailModalUpdate = () => {
    const {id, title, content, files} = selectedItem
    if (editCheck.title !== title || editCheck.content !== content || editCheck.files !== files) {
      if (window.confirm('공지사항을 수정하시겠습니까?')) {
        if (!title) return alert('Not Title')
        if (!files) return alert('Not File')
        if (!content) return alert('Not Content')
        setItems(items.map(value => (value.id === id ? selectedItem : value)))
        setShowModal(false)
      }
    } else {
      setShowModal(false)
    }
  }

  /** Add Modal */
  const handleNoticeAddModalUpdate = async () => {
    const {title, content, category} = selectedItem
    if (title || content || category) {
      if (window.confirm('공지사항을 추가하시겠습니까?')) {
        if (!title) return alert('공지사항 제목을 입력해 주세요.')
        if (!category) return alert('카테고리를 선택해 주세요.')
        if (!content) return alert('공지사항 본문을 입력해 주세요.')
        console.log(selectedItem)
        try {
          const {data} = await ApiConfig.request({
            method: HttpMethod.POST,
            url: EndPoint.GET_PARTNER_NOTICES,
            data: JSON.stringify({selectedItem}),
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
        setShowAddModal(false)
      }
    } else {
      setShowAddModal(false)
    }
  }

  /** List Row onDelete */
  const handleNoticeDeleteBtnOnClick = async ({id}) => {
    console.log(id)
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.DELETE,
          //url: `${EndPoint.GET_PARTNER_NOTICES}/${id}`,
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
      setShowAddModal(false)
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
                <CButton color='primary' onClick={handleShowAddModal}>
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
      />
      <NoticeAddModal
        visible={showAddModal}
        setVisible={setShowAddModal}
        value={selectedItem}
        onChange={handleNoticeModalOnChange}
        upDate={handleNoticeAddModalUpdate}
      />
    </CRow>
  )
}

export default NoticeList
