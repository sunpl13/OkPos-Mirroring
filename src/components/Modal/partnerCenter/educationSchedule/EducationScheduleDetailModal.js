import React from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'

const EducationScheduleDetailModal = ({
  onChange,
  value,
  visible,
  setVisible,
  upDate,
  onDelete,
  editMode,
  setEditMode,
  editor,
  setEditor,
  images,
  setImages,
  files,
  setFiles,
  onClose,
}) => {
  const {id, title, createdAt} = value
  return (
    <DetailModalEditModeTemplate
      title={id ? '교육 일정 상세' : '교육 일정 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      editMode={id && editMode}
      setEditMode={setEditMode}
      onDelete={onDelete}
      addModal={!id}
      onClose={onClose}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'공고 제목'}
          label={'공고 제목'}
          value={title}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
          isRequired
        />
      </CRow>
      <CRow className={'p-2'}>
        {id && (
          <ModalInput id={'createdAt'} placeholder={'등록일'} label={'등록일'} value={createdAt} readOnly disabled />
        )}
      </CRow>
      <CRow className={'p-2'}>
        <ModalFilesInput
          id={'files'}
          label={'파일 첨부'}
          readOnly={id && editMode}
          disabled={id && editMode}
          fileList={files}
          setFileList={setFiles}
          filePath='dataRoom_files'
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput
          label={'이미지'}
          fileList={images}
          setFileList={setImages}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      </CRow>

      <CRow className={'p-2 pb-3'}>
        <ModalQuillEditor
          id='content'
          label={'본문'}
          value={editor}
          setValue={setEditor}
          readOnly={id && editMode}
          disabled={id && editMode}
          isRequired
        />
      </CRow>
      <br />
    </DetailModalEditModeTemplate>
  )
}

export default EducationScheduleDetailModal
