import {CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useState} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'

const NoticeDetailModal = ({value, visible, setVisible, onChange, upDate, setEditor, editor, onDelete}) => {
  const {title, content, noticeFiles, noticeImages, category} = value

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
      btnText={'수정'}
      onDelete={onDelete}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'공지사항 제목'}
          label={'공지사항 제목'}
          value={title || ''}
          onChange={onChange}
        />
        <ModalSelect
          id={'category'}
          placeholder={'카테고리를 선택해 주세요'}
          label={'카테고리'}
          options={noticeOptions}
          value={category || ''}
          onChange={onChange}
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
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput id='image' label='이미지 첨부' value={noticeImages} onChange={onChange} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalQuillEditor id='content' label={'문의 답변'} value={editor} setValue={setEditor} />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default NoticeDetailModal
