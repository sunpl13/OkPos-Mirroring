import {
  CButton,
  CForm,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ModalInput from '../../forms/inputForm/ModalInput'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import MultiFileDownloadForm from '../../forms/downloadForm/MultiFileDownloadForm'
import ModalTextarea from '../../forms/inputForm/ModalTextarea'

const InquiryDetailModal = ({
  onClick,
  onCreate,
  onChange,
  onDelete,
  value,
  isReadOnly,
  setIsReadOnly,
  isUpdate,
  setIsUpdate,
  visible,
  setVisible,
}) => {
  // modal title 세팅
  let modalTitle = '1:1 문의 상세 내용'
  if (isUpdate) modalTitle = '1:1 문의 답변 수정'
  if (isReadOnly) modalTitle = '1:1 문의 상세 내용'

  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [inquiry, setInquiry] = useState({
    inquiryId: 0,
    name: '',
    phoneNumber: '',
    email: '',
    content: '',
    files: '',
    inquiryReplyId: 0,
    inquiryReplyContent: '',
  })

  // API 통신 함수
  const onloadMallInquiry = async value => {
    const {inquiryId} = value
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
      setInquiry(res.result)
      if (res.result.inquiryReplyId) {
        setIsReadOnly(true)
      }
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      onloadMallInquiry(value)
    }
  }, [visible])

  const clickUpdateBtn = () => {
    setIsReadOnly(false)
    setIsUpdate(true)
  }

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{modalTitle}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput id={'id'} placeholder={'inquiryId'} label={'No'} value={inquiry.inquiryId} readOnly disabled />
          <ModalInput id={'name'} placeholder={'이름'} label={'이름'} value={inquiry.name} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'email'} placeholder={'이메일'} label={'이메일'} value={inquiry.email} readOnly disabled />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={inquiry.phoneNumber}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'category'}
            placeholder={'문의 유형'}
            label={'문의 유형'}
            value={inquiry.category}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <CFormTextarea id='content' label='문의내용' value={inquiry.content} readOnly disabled rows={9} />
        </CRow>
        <CRow className={'p-2'}>
          <MultiFileDownloadForm
            id={'files'}
            placeholder={'첨부파일'}
            label={'첨부파일'}
            files={inquiry.files || ''}
            readOnly
            disabled
          />
        </CRow>
        <hr />
        <CForm>
          <CFormTextarea
            id='inquiryReplyContent'
            placeholder={'답변 미작성'}
            rows={9}
            value={value.inquiryReplyContent || inquiry.inquiryReplyContent || ''}
            onChange={onChange}
            disabled={isReadOnly}
          />
        </CForm>
      </CModalBody>
      <CModalFooter>
        {isUpdate && (
          <CButton onClick={() => onCreate(inquiry)} color='primary'>
            저장
          </CButton>
        )}
        {isReadOnly && (
          <CButton color={isReadOnly ? 'success' : 'primary'} onClick={clickUpdateBtn}>
            수정
          </CButton>
        )}
        <CButton color='danger' onClick={() => onDelete(inquiry)}>
          삭제
        </CButton>
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default InquiryDetailModal
