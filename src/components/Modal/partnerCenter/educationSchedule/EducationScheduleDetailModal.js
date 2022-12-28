import React, {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'

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
}) => {
  const {id, title, createdAt, files, content, educationScheduleFiles, educationScheduleImages} = value
  console.log(editor)
  return (
    <DetailModalEditModeTemplate
      title={id ? '교육 일정 상세' : '교육 일정 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={id ? '수정' : '추가'}
      editMode={id && editMode}
      setEditMode={id && setEditMode}
      onDelete={id && onDelete}
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
        />
      </CRow>
      <CRow className={'p-2'}>
        {id && editMode ? (
          <MultiFileDownloadForm
            id={'files'}
            type={'file'}
            placeholder={'첨부 파일'}
            label={'첨부 파일'}
            value={[]}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        ) : (
          <ModalFilesInput
            id={'files'}
            value={files}
            label={'첨부파일'}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        )}
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput
          id={'imageInput'}
          label={'이미지'}
          value={educationScheduleImages}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'본문'}
          value={editor}
          setValue={setEditor}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      </CRow>
      <br />
    </DetailModalEditModeTemplate>
  )
}

export default EducationScheduleDetailModal
