import React, {useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../../components/common/PageHeader'
import ListTemplate from '../../../../components/list/ListTemplate'
import {testUserTableValues} from '../../../test/testConstant'
import NoticeDetailModal from '../../../../components/Modal/partnerCenter/notice/NoticeDetailModal'
import {noticeList} from '../../../../utils/columns/partnerCenter/Columns'
import NoticeAddModal from '../../../../components/Modal/partnerCenter/notice/NoticeAddModal'
import moment from 'moment'

const NoticeList = () => {
  const [items, setItems] = useState(testUserTableValues)
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    files: '',
  })
  const [editCheck, setEditCheck] = useState({})

  /** Show Modal */
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem({
      ...item,
    })
    setEditCheck({
      ...item,
    })
    setShowModal(!showModal)
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
