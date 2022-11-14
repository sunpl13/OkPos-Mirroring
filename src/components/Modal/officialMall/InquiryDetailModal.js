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

const InquiryDetailModal = ({onClick, onChange, value, visible, setVisible}) => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [inquiry, setInquiry] = useState({
    inquiryMallId: 0,
    name: '',
    phoneNumber: '',
    email: '',
    content: '',
    files: '',
    inquiryReplyId: 0,
    inquiryReplyConte: '',
  })

  // API 통신 함수
  const onloadMallInquiry = async value => {
    const {inquiryMallId} = value
    const inquiryId = inquiryMallId
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

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      {console.log(inquiry)}
      <CModalHeader>
        <CModalTitle>문의 상세 내용</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
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
        <CFormTextarea id='content' label='문의내용' value={inquiry.content} readOnly disabled rows={9} />
        <CRow className={'p-2'}>
          <ModalInput
            id={'files'}
            placeholder={'첨부파일'}
            label={'첨부파일'}
            value={inquiry.files}
            readOnly
            disabled
          />
        </CRow>
        <br />
        <CForm>
          <CFormTextarea
            id='answer'
            placeholder={'답변 작성'}
            rows={9}
            //value={ value}
            onChange={onChange}
          />
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton onClick={onClick} color='primary'>
          저장
        </CButton>
        <CButton color='danger' onClick={() => setVisible(false)}>
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
