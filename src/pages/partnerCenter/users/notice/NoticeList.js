import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../../components/common/PageHeader'
import ListTemplate from '../../../../components/list/ListTemplate'
import NoticeDetailModal from '../../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../../utils/columns/partnerCenter/Columns'
import NoticeAddModal from '../../../../components/Modal/partnerCenter/notice/NoticeAddModal'
import moment from 'moment'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {isEmpty} from '../../../../utils/utility'
//{
//     "id": 4,
//     "title": "공지사항 작성 테스트",
//     "createdAt": "2022.11.16 17:11:472",
//     "noticeFiles": [
//         {
//             "id": 2,
//             "title": "test.pdf",
//             "capacity": 8175,
//             "url": "https://homepage-test-resource.s3.ap-northeast-2.amazonaws.com/images/b4479668-8554-42e3-9039-2fc2434fe31etest.pdf",
//             "createdAt": "2022.11.16 17:11:481",
//             "updatedAt": "2022.11.16 17:11:481",
//             "status": "ACTIVE"
//         }
//     ],
//     "isApplicationNotice": true
// }

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
  const handleShowModal = async item => {
    const {id} = item
    setSelectedItem({
      ...item,
    })
    setEditCheck({
      ...item,
    })
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
        content: '',
        createdAt: '',
        noticeFiles: [],
        noticeImages: [],
      })
      setEditCheck({
        content: '',
        createdAt: '',
        noticeFiles: [],
        noticeImages: [],
      })
    }
  }
  const handleShowAddModal = () => {
    setSelectedItem({
      id: 0,
      title: '',
      content: '',
      createdAt: '',
      files: '',
    })
    setShowAddModal(!showAddModal)
  }
  // 공지사항 API
  const getUsers = async () => {
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
    getUsers()
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
      if (window.confirm('Edit ?')) {
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
  const handleNoticeAddModalUpdate = () => {
    const {title, content, files} = selectedItem
    if (title || content || files) {
      if (window.confirm('Add ?')) {
        if (!title) return alert('Not Title')
        if (!files) return alert('Not File')
        if (!content) return alert('Not Content')
        setItems([
          ...items,
          {
            ...selectedItem,
            createdAt: moment().format('YYYY-MM-DD'),
          },
        ])
        setShowAddModal(false)
      }
    } else {
      setShowAddModal(false)
    }
  }

  /** List Row onDelete */
  const handleNoticeDeleteBtnOnClick = ({id}) => {
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      setItems(items.filter(value => value.id !== id))
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
