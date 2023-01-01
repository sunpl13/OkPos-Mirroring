import {CCol, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {noticeOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'

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
  images,
  setImages,
  files,
  setFiles,
}) => {
  const {id, title, noticeFiles, noticeImages, category} = value
  console.log(value)

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
          isRequired
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
          isRequired
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
        <CRow className={'p-2'}>
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
        </CRow>
      )}
      <CRow className={'p-2'}>
        <ModalImageInput
          label={'이미지 첨부'}
          id='image'
          fileList={images}
          setFileList={setImages}
          images={value.imageUrls}
          imgPath='notice_images'
          readOnly={id && editMode}
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
    </DetailModalEditModeTemplate>
  )
}

export default NoticeDetailModal
