import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
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
  const [inquiryMsg, setInquiryMsg] = useState('')
  /** User list Columns */

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const handleInquiryModalOnChange = ({target: {value}}) => {
    setInquiryMsg(value)
  }
  const handleInquiryModalOnClick = () => {
    setItems(items.map(value => (value.id === selectedItem.id ? {...selectedItem, answer: inquiryMsg} : value)))
    setShowModal(!showModal)
  }
  const handleNoticeDeleteBtnOnClick = ({id}) => {
    if (window.confirm('해당 공지사항을 삭제하시겠습니까?')) {
      setItems(items.filter(value => value.id !== id))
    }
  }
  useEffect(() => {
    if (!showModal) {
      setInquiryMsg('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='공지사항 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CRow></CRow>
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
        item={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        value={inquiryMsg}
        onChange={handleInquiryModalOnChange}
        onClick={handleInquiryModalOnClick}
      />
    </CRow>
  )
}

export default NoticeList
