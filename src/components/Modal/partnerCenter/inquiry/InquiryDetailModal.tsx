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
import {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'

type Value = {
  id: number
  userName: string
  email: string
  phoneNumber: string
  text: string | undefined
  firstRegistration: string
  answer: string
}

interface InquiryDetailProps {
  onClick: () => void
  onChange: () => void
  item: Value
  value: string
  visible: boolean
  setVisible: (state: boolean) => void | undefined
}

const InquiryDetailModal = ({onClick, onChange, value, item, visible, setVisible}: InquiryDetailProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    userName: '',
    phoneNumber: '',
    email: '',
    text: '',
    firstRegistration: '',
    answer: '',
  })

  useEffect(() => {
    if (visible) {
      setStateCompare(item)
    }
  }, [visible])

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>문의 상세 내용</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'id'}
            placeholder={'User Id'}
            label={'No'}
            value={stateCompare.id}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'userName'}
            placeholder={''}
            label={'이름'}
            value={stateCompare.userName}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'email'}
            placeholder={'이메일'}
            label={'이메일'}
            value={stateCompare.email}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={stateCompare.phoneNumber}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CFormTextarea id='userInquiry' value={item.text} readOnly={true} disabled rows={9} />
        <CRow className={'p-2'}>
          <ModalInput
            id={'email'}
            placeholder={'첨부파일'}
            label={'첨부파일'}
            value={stateCompare.email}
            onChange={onChange}
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
            value={item.answer || value}
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
        <CButton color='danger' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default InquiryDetailModal
