import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'

const EducationScheduleDetailModal = ({
  onChange,
  value,
  visible,
  setVisible,
  upDate,
  editMode,
  setEditMode,
  editor,
  setEditor,
}) => {
  const {no, title, createdAt, files, content, educationScheduleFiles, educationScheduleImages} = value
  console.log(editor)
  return (
    <DetailModalEditModeTemplate
      title={no !== 0 ? '교육 일정 상세' : '교육 일정 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={no !== 0 ? '수정' : '추가'}
      editMode={editMode}
      setEditMode={setEditMode}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'공고 제목'}
          label={'공고 제목'}
          value={title}
          onChange={onChange}
          readOnly={no !== 0 && editMode}
          disabled={no !== 0 && editMode}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalFilesInput label={'첨부 파일'} id={'files'} readOnly={editMode} disabled={editMode} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput
          id={'imageInput'}
          label={'이미지 리스트'}
          value={educationScheduleImages}
          readOnly={no !== 0 && editMode}
          disabled={no !== 0 && editMode}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'본문'}
          value={editor}
          setValue={setEditor}
          readOnly={no !== 0 && editMode}
          disabled={no !== 0 && editMode}
        />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default EducationScheduleDetailModal
