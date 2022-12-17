import {CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useState} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'

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
  const {id, title, content, noticeFiles, noticeImages, category} = value
  const noticeOptions = [
    {key: 'DEALER', value: '딜러'},
    {key: 'AGENCY', value: '대리점'},
  ]

  return (
    <DetailModalEditModeTemplate
      visible={visible}
      title={'공지사항' || ''}
      setVisible={setVisible}
      upDate={upDate}
      btnText={id ? '수정' : '등록'}
      onDelete={id && onDelete}
      editMode={id && editMode}
      setEditMode={id && setEditMode}
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
          options={noticeOptions}
          value={category || ''}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      </CRow>
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
      <CRow className={'p-2'}>
        <ModalImageInput
          id='image'
          label='이미지 첨부'
          value={noticeImages}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
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
        />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default NoticeDetailModal
