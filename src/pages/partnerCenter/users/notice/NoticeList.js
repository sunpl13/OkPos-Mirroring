import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../../components/common/PageHeader'
import ListTemplate from '../../../../components/list/ListTemplate'
import {testUserTableValues} from '../../../test/testConstant'
import NoticeDetailModal from '../../../../components/Modal/users/NoticeDetailModal'
import {noticeList} from '../../../../utils/columns/partnerCenter/Columns'

const NoticeList = () => {
  const [items, setItems] = useState(testUserTableValues)
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    files: '',
  })
  const [showModal, setShowModal] = useState(false)
  /** User list Columns */

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const handleShowAddModal = () => {
    setShowModal(!showModal)
  }

  const handleInquiryModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleNoticeModalUpdate = item => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        ...item,
      },
    ])
    setShowModal(!showModal)
  }
  const handleNoticeDeleteBtnOnClick = ({id}) => {
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      setItems(items.filter(value => value.id !== id))
    }
  }
  useEffect(() => {
    if (!showModal) {
      setSelectedItem({
        id: 0,
        title: '',
        content: '',
        createdAt: '',
        files: '',
      })
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
        onChange={handleInquiryModalOnChange}
        upDate={handleNoticeModalUpdate}
      />
    </CRow>
  )
}

export default NoticeList
