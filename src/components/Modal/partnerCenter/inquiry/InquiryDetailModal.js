import {CForm, CFormTextarea, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import DetailModalTemplate from '../DetailModalTemplate'

const InquiryDetailModal = ({upDate, onChange, value, visible, setVisible, replies, onDelete}) => {
  const {id, userName, userPhoneNum, content, inquiryCategory, inquiryFiles, inquiryReplies} = value
  return (
    <DetailModalTemplate
      visible={visible}
      title={'문의 상세 보기'}
      setVisible={setVisible}
      upDate={upDate}
      btnText={inquiryReplies.length !== 0 ? '수정' : '답변등록'}
      onDelete={onDelete}
    >
      <CRow className={'p-2'}>
        <ModalInput id={'id'} placeholder={'문의 번호'} label={'문의 번호'} value={id} readOnly disabled />
        <ModalInput id={'userName'} placeholder={'회원 이름'} label={'회원 이름'} value={userName} readOnly disabled />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'inquiryCategory'}
          placeholder={'문의 유형'}
          label={'문의 유형'}
          value={inquiryCategory}
          readOnly
          disabled
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화번호'}
          label={'휴대전화번호'}
          value={userPhoneNum}
          readOnly
          disabled
        />
      </CRow>
      <CFormTextarea id='userInquiry' value={content} readOnly={true} disabled rows={9} />
      <CRow className={'p-2'}>
        <ModalFilesInput
          id={'email'}
          placeholder={'첨부파일'}
          label={'첨부파일'}
          value={inquiryFiles}
          onChange={onChange}
          readOnly
          disabled
        />
      </CRow>
      <br />
      <CForm>
        <CFormTextarea
          id='replies'
          placeholder={'답변 작성'}
          label={'답변 작성'}
          rows={9}
          value={inquiryReplies.length !== 0 ? inquiryReplies[inquiryReplies.length - 1].content : replies}
          onChange={onChange}
        />
      </CForm>
    </DetailModalTemplate>
  )
}

export default InquiryDetailModal
