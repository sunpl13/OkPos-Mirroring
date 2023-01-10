import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import InquiryDetailModal from '../../../components/Modal/partnerCenter/inquiry/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {userInquiryListColumns} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'

import {
  createdInfo,
  deletedInfo,
  getDetailInfo,
  getListData,
  upDateInfo,
} from '../../../components/function/partnerCenter/ApiModules'

const InquiryList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [editor, setEditor] = useState('')
  const [editMode, setEditMode] = useState(true)

  // 1:1 문의 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_INQUIRIES)
      .then(res => {
        setItems(res?.inquiryPartnerDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  // Open Modal
  const handleShowModal = async ({id}) => {
    setShowModal(!showModal)
    getDetailInfo(EndPoint.PARTNER_INQUIRIES, id)
      .then(res => {
        setSelectedItem(res)
        setEditCheck(res?.inquiryReplies)
        if (res?.inquiryReplies.length !== 0) {
          setEditor(res?.inquiryReplies[0].content)
        }
      })
      .catch(err => console.log(err))
  }

  // 1:1 문의 삭제
  const handleInquiryModalOnDelete = async () => {
    const {id} = editCheck[0]
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deletedInfo(`${EndPoint.PARTNER_INQUIRIES}/reply`, id)
        .then(res => {
          getList()
          setShowModal(false)
          return alert(res)
        })
        .catch(err => console.log(err))
    }
  }

  // Editor onChange
  const handleInquiryModalOnChange = htmlTagValue => {
    setEditor(htmlTagValue)
  }

  // 1:1 문이 업데이트
  const handleInquiryModalUpdate = async () => {
    const {id} = selectedItem
    if (editCheck.length !== 0) {
      const replyId = editCheck[0]?.id
      if (window.confirm('답변을 수정하시겠습니까?')) {
        if (!editor) return alert('답변을 작성해 주세요.')
        upDateInfo(`${EndPoint.PARTNER_INQUIRIES}/reply`, replyId, {
          content: editor,
        })
          .then(res => {
            getList()
            setShowModal(false)
            return alert(res)
          })
          .catch(error => console.log(error))
      }
    } else if (window.confirm('답변을 등록하시겠습니까?')) {
      createdInfo(`${EndPoint.PARTNER_INQUIRIES}/${id}/reply`, {
        content: editor,
      }).then(res => {
        getList()
        setShowModal(false)
        return alert(res)
      })
      //try {
      //         const {
      //           data: {result, isSuccess, code, message},
      //         } = await ApiConfig.request({
      //           method: HttpMethod.POST,
      //           url: `${EndPoint.PARTNER_INQUIRIES}/${id}/reply`,
      //           data: {
      //             content: editor,
      //           },
      //         })
      //         if (!isSuccess || isEmpty(result)) {
      //           return alert(message)
      //         }
      //         if (code === 1000) {
      //           getList()
      //           setShowModal(false)
      //           return alert(message)
      //         } else {
      //           alert(message)
      //         }
      //       } catch (error) {
      //         console.log(error)
      //       }
    }
  }
  useEffect(() => {
    if (!showModal) {
      setEditor('')
    }
  }, [showModal])

  return (
    <CRow>
      <PageHeader title='1 : 1 문의 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowModal}
              columns={userInquiryListColumns}
              className={'userList'}
              datePickerHidden={false}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <InquiryDetailModal
        visible={showModal}
        setVisible={setShowModal}
        value={selectedItem}
        onChange={handleInquiryModalOnChange}
        upDate={handleInquiryModalUpdate}
        onDelete={handleInquiryModalOnDelete}
        editor={editor}
        setEditor={setEditor}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </CRow>
  )
}

export default InquiryList
