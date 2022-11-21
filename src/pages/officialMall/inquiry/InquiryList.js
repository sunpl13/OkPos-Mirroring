import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import InquiryDetailModal from '../../../components/Modal/officialMall/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {inquiryListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const InquiryList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [inquiryList, setInquiryList] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    inquiryMallId: 0,
    name: '',
    email: '',
    category: '',
    phoneNumber: '',
    inquiryReplyContent: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  // API 통신 함수
  const onLoadMallInquiryList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_INQUIRIES,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('onLoadMallInquiryList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setInquiryList(res.result.inquiryInfos)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Create Inquiry Answer
  const onCreateMallInquiryAnswer = async (inquiryId, inquiryReplyContent) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_INQUIRY_REPLY,
        data: {
          inquiryId: inquiryId,
          inquiryReplyContent: inquiryReplyContent,
        },
      })
      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        }
      }
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Update Inquiry Answer
  const onUpdateInquiryAnswer = async (inquiryId, inquiryReplyId, inquiryReplyContent) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_INQUIRY_REPLY,
        data: {
          inquiryId: inquiryId,
          inquiryReplyId: inquiryReplyId,
          inquiryReplyContent: inquiryReplyContent,
        },
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Delete Inquiry
  const onDeleteInquiry = async inquiry => {
    const {inquiryId} = inquiry
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_DELETE_INQUIRY,
        path: {inquiryId},
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      }
      alert(res?.message)
      setShowModal(!showModal)
      await onLoadMallInquiryList()
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallInquiryList()
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowInquiryDetailModal = item => {
    // 선택 아이템을 selectedItem 에 저장
    setSelectedItem(item)

    if (item.inquiryReplyId) {
      setIsReadOnly(true)
    } else {
      setIsReadOnly(false)
    }
    setShowModal(!showModal)
  }

  // data onChange
  const handleInquiryModalOnChange = e => {
    const {id, value} = e.target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // 답변 저장
  const handleInquiryModalCreate = async inquiry => {
    const {inquiryId, inquiryReplyId, inquiryReplyContent} = inquiry

    // validation
    if (!inquiryId) return alert('번호를 찾을 수 없습니다.')
    if (!inquiryReplyContent) return alert('답변을 입력해주세요')

    if (window.confirm('저장 하시겠습니까?')) {
      if (inquiryReplyId) {
        // update
        onUpdateInquiryAnswer(inquiryId, inquiryReplyId, inquiryReplyContent)
      } else {
        // create
        onCreateMallInquiryAnswer(inquiryId, inquiryReplyContent)
      }
      setIsReadOnly(true)
      setIsUpdate(false)
    }
  }
  return (
    <CRow>
      <PageHeader title='1 : 1 문의 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={inquiryList}
              onClick={handleShowInquiryDetailModal}
              columns={inquiryListColumns}
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
        onCreate={handleInquiryModalCreate}
        onChange={handleInquiryModalOnChange}
        onDelete={onDeleteInquiry}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </CRow>
  )
}

export default InquiryList
