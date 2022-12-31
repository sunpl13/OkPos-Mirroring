import {CFormLabel, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import ModalFilesView from '../../../forms/inputForm/ModalFilesView'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'

const InquiryDetailModal = ({
  upDate,
  setEditor,
  value,
  visible,
  setVisible,
  onDelete,
  editor,
  editMode,
  setEditMode,
}) => {
  const {id, userName, userPhoneNum, content, inquiryCategory, inquiryFiles, inquiryReplies} = value
  return (
    <DetailModalEditModeTemplate
      visible={visible}
      title={'문의 상세 보기'}
      setVisible={setVisible}
      upDate={upDate}
      btnText={inquiryReplies?.length !== 0 ? '수정' : '답변등록'}
      onDelete={onDelete}
      editMode={editMode}
      setEditMode={setEditMode}
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
      <CRow className={'p-2'}>
        <ModalTextArrayInput id='userInquiry' value={content} readOnly={true} disabled rows={9} label={'문의 내용'} />
      </CRow>
      <CRow className={'p-2'}>
        <CFormLabel>{'첨부파일'}</CFormLabel>
        <ModalFilesView fileItem={inquiryFiles} />
      </CRow>
      <br />
      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'문의 답변'}
          value={editor}
          setValue={setEditor}
          readOnly={editMode}
          isRequired
        />
      </CRow>
      <br />
      <br />
    </DetailModalEditModeTemplate>
  )
}

export default InquiryDetailModal
