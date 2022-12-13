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
    inquiryId: 0,
    name: '',
    email: '',
    category: '',
    phoneNumber: '',
    content: '',
    file: [],
    inquiryReplyId: null,
    inquiryReplyContent: '',
  })
  const [inquiryReplyContent, setInquiryReplyContent] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  // API 통신 함수
  // 1:1 문의 리스트 조회
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

  // 1:1 문의 상세정보 조회
  const onloadMallInquiry = async inquiryId => {
    try {
      const {data: res} = await ApiConfig.request({
        data: {},
        query: {},
        path: {inquiryId},
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_INQUIRY,
      })
      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('onloadMallInquiry error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      await setSelectedItem(res.result)
      await setInquiryReplyContent(res.result.inquiryReplyContent)
      if (res.result.inquiryReplyId) {
        setIsReadOnly(true)
      } else {
        setIsReadOnly(false)
      }
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 1:1 문의 답변 추가
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
      await onloadMallInquiry(inquiryId)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 1:1 문의 답변 수정
  const onUpdateInquiryAnswer = async (inquiryReplyId, inquiryReplyContent) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_INQUIRY_REPLY,
        path: {
          inquiryReplyId: inquiryReplyId,
        },
        data: {
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

  // 1:1 문의 삭제
  const onDeleteInquiry = async inquiry => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
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
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallInquiryList()
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowInquiryDetailModal = async item => {
    await onloadMallInquiry(item.inquiryId)
    await setShowModal(!showModal)
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
  const handleInquiryModalCreate = async () => {
    const {inquiryId, inquiryReplyId} = selectedItem

    // validation
    if (!inquiryId) return alert('번호를 찾을 수 없습니다.')
    if (!inquiryReplyId) return alert('번호를 찾을 수 없습니다.')
    if (!inquiryReplyContent) return alert('답변을 입력해주세요.')
    if (inquiryReplyContent.length > 300) return alert('답변 글자 수를 초과했습니다.')

    if (window.confirm('저장 하시겠습니까?')) {
      if (inquiryReplyId) {
        // 수정
        await onUpdateInquiryAnswer(inquiryReplyId, inquiryReplyContent)
      } else {
        // 생성
        await onCreateMallInquiryAnswer(inquiryId, inquiryReplyContent)
      }

      await onLoadMallInquiryList()
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
        inquiryReplyContent={inquiryReplyContent}
        setInquiryReplyContent={setInquiryReplyContent}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </CRow>
  )
}

export default InquiryList
