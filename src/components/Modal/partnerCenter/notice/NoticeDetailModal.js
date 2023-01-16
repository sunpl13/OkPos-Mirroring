import React from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import PropTypes from 'prop-types'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import {noticeOptions} from '../../../../utils/columns/partnerCenter/SelectCategoryOptions'

const NoticeDetailModal = ({
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
  const {id, title, category, createdAt} = value
  return (
    <DetailModalEditModeTemplate
      visible={visible}
      title={id ? '공지사항' : '공지사항 등록'}
      setVisible={setVisible}
      upDate={upDate}
      editMode={id && editMode}
      setEditMode={setEditMode}
      onDelete={id && onDelete}
      addModal={!id}
      onClose={onClose}
    >
      {id && (
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'공지사항 제목'}
            label={'공지사항 제목'}
            value={title || ''}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
            isRequired
          />
        </CRow>
      )}
      <CRow className={'p-2'}>
        {id ? (
          <ModalInput
            id={'공고 등록일'}
            placeholder={'공고 등록일'}
            label={'공고 등록일'}
            value={createdAt || ''}
            readOnly
            disabled
          />
        ) : (
          <ModalInput
            id={'title'}
            placeholder={'공지사항 제목'}
            label={'공지사항 제목'}
            value={title || ''}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
            isRequired
          />
        )}
        <ModalSelect
          id={'category'}
          placeholder={'카테고리를 선택해 주세요'}
          label={'카테고리'}
          options={noticeOptions}
          value={category || ''}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
          isRequired
        />
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
          oneSheet
          maxFileLength={5}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput
          label={'이미지'}
          fileList={images}
          setFileList={setImages}
          readOnly={id && editMode}
          disabled={id && editMode}
          oneSheet
          maxFileLength={10}
        />
      </CRow>

      <CRow className={'p-2'}>
        <ModalQuillEditor
          id='content'
          label={'공지사항 본문'}
          value={editor}
          setValue={setEditor}
          readOnly={id && editMode}
          disabled={id && editMode}
          isRequired
        />
      </CRow>
      <br />
      <br />
    </DetailModalEditModeTemplate>
  )
}

export default NoticeDetailModal

NoticeDetailModal.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  upDate: PropTypes.func,
  onDelete: PropTypes.func,
  editMode: PropTypes.bool,
  setEditMode: PropTypes.func,
  editor: PropTypes.string,
  setEditor: PropTypes.func,
  images: PropTypes.array,
  setImages: PropTypes.func,
  files: PropTypes.array,
  setFiles: PropTypes.func,
}
