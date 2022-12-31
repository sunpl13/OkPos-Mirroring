import {CCol, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useEffect} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import {inquiryTypes} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'

const NoticeDetailModal = ({
  value,
  visible,
  setVisible,
  onChange,
  upDate,
  setEditor,
  editor,
  onDelete,
  editMode,
  setEditMode,
}) => {
  const {id, title, noticeFiles, noticeImages, category} = value

  return (
    <DetailModalEditModeTemplate
      visible={visible}
      title={id ? '공지사항' : '공지사항 등록'}
      setVisible={setVisible}
      upDate={upDate}
      onDelete={id && onDelete}
      editMode={editMode}
      setEditMode={setEditMode}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'공지사항 제목'}
          label={'공지사항 제목'}
          value={title || ''}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
        <ModalSelect
          id={'category'}
          placeholder={'카테고리를 선택해 주세요'}
          label={'카테고리'}
          options={inquiryTypes}
          value={category || ''}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      </CRow>
      {!editMode ? (
        <CRow className={'p-2'}>
          <ModalFilesInput
            id={'files'}
            type={'file'}
            placeholder={'파일 첨부'}
            label={'파일 첨부'}
            value={noticeFiles}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        </CRow>
      ) : (
        <CCol className={'p-2'}>
          <MultiFileDownloadForm
            id={'files'}
            type={'file'}
            placeholder={'첨부 파일'}
            label={'첨부 파일'}
            value={noticeFiles}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        </CCol>
      )}
      <CRow className={'p-2'}>
        <ModalImageInput label={'이미지'} readOnly={id && editMode} fileList={noticeImages} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'공지사항 본문'}
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

export default NoticeDetailModal
