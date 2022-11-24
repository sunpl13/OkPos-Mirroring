import {CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useState} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import DetailModalTemplate from '../DetailModalTemplate'

const NoticeDetailModal = ({value, visible, setVisible, onChange, upDate}) => {
  const {title, content, noticeFiles, noticeImages, category} = value
  const [editMode, setEditMode] = useState(true)
  const noticeOptions = [
    {key: 'DEALER', value: '딜러'},
    {key: 'AGENCY', value: '대리점'},
  ]

  return (
    <DetailModalTemplate
      visible={visible}
      title={'공지사항'}
      setVisible={setVisible}
      upDate={upDate}
      btnText={'수정'}
      editMode={editMode}
      setEditMode={setEditMode}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'공지사항 제목'}
          label={'공지사항 제목'}
          value={title}
          onChange={onChange}
          readOnly={editMode}
          disabled={editMode}
        />
        <ModalSelect
          id={'category'}
          placeholder={'카테고리를 선택해 주세요'}
          label={'카테고리'}
          options={noticeOptions}
          value={category || ''}
          onChange={onChange}
          readOnly={editMode}
          disabled={editMode}
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
          readOnly={editMode}
          disabled={editMode}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput id='image' label='이미지 첨부' value={noticeImages} onChange={onChange} disabled={editMode} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalTextArrayInput
          id='content'
          label='공지사항 본문'
          rows={15}
          value={content}
          onChange={onChange}
          text=''
          readOnly={editMode}
          disabled={editMode}
        />
      </CRow>
    </DetailModalTemplate>
  )
}

export default NoticeDetailModal
