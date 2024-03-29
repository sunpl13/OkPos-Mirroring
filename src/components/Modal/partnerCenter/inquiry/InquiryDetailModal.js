import {CFormLabel, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import ModalFilesView from '../../../forms/inputForm/ModalFilesView'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {useEffect, useState} from 'react'

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
  onClose,
}) => {
  const {id, title, userName, userPhoneNum, content, inquiryCategory, inquiryFiles, inquiryReplies} = value
  const [files, setFilse] = useState([])
  useEffect(() => {
    setFilse(inquiryFiles)
  }, [])

  return (
    <DetailModalEditModeTemplate
      visible={visible}
      title={'문의 상세 보기'}
      setVisible={setVisible}
      upDate={upDate}
      onDelete={onDelete}
      editMode={inquiryReplies?.length !== 0 && editMode}
      setEditMode={setEditMode}
      addModal={inquiryReplies?.length === 0}
      onClose={onClose}
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
          placeholder={'전화번호'}
          label={'전화번호'}
          value={userPhoneNum}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput id={'title'} placeholder={'문의 제목'} label={'문의 제목'} value={title} readOnly disabled />
      </CRow>
      <CRow className={'p-2'}>
        <ModalTextArrayInput id='userInquiry' value={content} readOnly={true} disabled rows={9} label={'문의 내용'} />
      </CRow>
      <CRow className={'p-2'}>
        <CFormLabel>{'첨부파일'}</CFormLabel>
        <ModalFilesView
          fileItem={files}
          label={'이미지'}
          setFileList={setFilse}
          readOnly={id && editMode}
          disabled={id && editMode}
          oneSheet
          maxFileLength={10}
        />
      </CRow>
      <br />
      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'문의 답변'}
          value={editor}
          setValue={setEditor}
          readOnly={inquiryReplies?.length !== 0 && editMode}
          maxLength={450}
          isRequired
        />
      </CRow>
      <br />
      <br />
    </DetailModalEditModeTemplate>
  )
}

export default InquiryDetailModal
