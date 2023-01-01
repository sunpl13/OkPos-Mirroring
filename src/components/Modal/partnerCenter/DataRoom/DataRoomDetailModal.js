import React, {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CForm, CRow} from '@coreui/react'
import PropTypes from 'prop-types'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import {noticeOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'

const DataRoomDetailModal = ({
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
}) => {
  const {id, title, category, createdAt} = value
  return (
    <DetailModalEditModeTemplate
      title={id ? '자료 상세' : '자료 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      editMode={id && editMode}
      setEditMode={setEditMode}
      onDelete={id && onDelete}
      addModal={!id}
    >
      <CRow className={'p-2'}>
        {id ? (
          <ModalInput
            id={'createdAt'}
            placeholder={'등록일'}
            label={'등록일'}
            value={createdAt}
            onChange={onChange}
            readOnly
            disabled
          />
        ) : (
          <ModalInput
            id={'title'}
            placeholder={'제목'}
            label={'제목'}
            value={title}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
            isRequired
          />
        )}
        <ModalSelect
          id={'category'}
          label={'카테고리'}
          options={noticeOptions || []}
          value={category}
          readOnly={editMode}
          disabled={id && editMode}
          isRequired
          onChange={onChange}
          placeholder={'카테고리를 선택해주세요.'}
          size={'sm'}
        />
      </CRow>
      {id && (
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'제목'}
            label={'제목'}
            value={title}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
            isRequired
          />
        </CRow>
      )}
      <CRow className={'p-2'}>
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
      <CRow className={'p-2'}>
        <ModalImageInput
          label={'이미지'}
          fileList={images}
          setFileList={setImages}
          readOnly={id && editMode}
          disabled={id && editMode}
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
          filePath='notice_files'
        />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

DataRoomDetailModal.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  upDate: PropTypes.func,
}

export default DataRoomDetailModal
