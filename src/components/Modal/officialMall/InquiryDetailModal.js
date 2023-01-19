import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import BasicFileDownloadForm from '../../forms/downloadForm/BasicFileDownloadForm'
import ModalTextOnlyQuillEditor from '../../forms/inputForm/ModalTextOnlyQuillEditor'

const InquiryDetailModal = ({
  onCreate,
  onChange,
  onDelete,
  inquiryReplyContent,
  setInquiryReplyContent,
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

  // 함수 선언
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
          <ModalInput id={'id'} placeholder={'inquiryId'} label={'No'} value={value.no} readOnly disabled />{' '}
          <ModalInput
            id={'category'}
            placeholder={'문의 유형'}
            label={'문의 유형'}
            value={value.category}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'name'} placeholder={'이름'} label={'이름'} value={value.name} readOnly disabled />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={value.phoneNumber}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'title'} placeholder={'제목'} label={'제목'} value={value.title} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <BasicFileDownloadForm
            id={'files'}
            placeholder={'첨부파일'}
            label={'첨부파일'}
            value={value.file || ''}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <CFormTextarea id='content' label='문의내용' value={value.content} readOnly disabled rows={9} />
        </CRow>
        <CRow className={'p-2'}>
          <ModalTextOnlyQuillEditor
            id='inquiryReplyContent'
            value={inquiryReplyContent || ''}
            isRequired={true}
            readOnly={isReadOnly}
            disabled={isReadOnly}
            setValue={setInquiryReplyContent}
            label='답변'
            maxLength={450}
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        {isReadOnly ? (
          <>
            <CButton color='success' onClick={clickUpdateBtn}>
              수정
            </CButton>
          </>
        ) : (
          <CButton onClick={() => onCreate(value)} color='primary'>
            저장
          </CButton>
        )}
        <CButton color='danger' onClick={() => onDelete(value)}>
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
