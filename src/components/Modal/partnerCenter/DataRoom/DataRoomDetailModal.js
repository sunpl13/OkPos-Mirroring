import React, {useEffect} from 'react'
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
}) => {
  const {id, title, category, dataRoomFiles, dataRoomImages, createdAt} = value
  const dataOptions = [
    {key: 'DRIVER', value: '드라이버'},
    {key: 'MANUAL', value: '메뉴얼'},
    {key: 'FIRMWARE', value: '펌웨어'},
    {key: 'TECHNIC_ARTICLE', value: '기술자료'},
    {key: 'OTHER', value: '기타'},
  ]
  return (
    <DetailModalEditModeTemplate
      title={id ? '자료 상세' : '자료 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={id ? '수정' : '추가'}
      editMode={editMode}
      setEditMode={setEditMode}
      onDelete={id && onDelete}
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
          />
        )}
        <ModalSelect
          id={'category'}
          label={'카테고리'}
          options={dataOptions || []}
          value={category}
          readOnly={editMode}
          disabled={id && editMode}
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
          maxLength={30}
        />
      </CRow>
      <br />
      <CRow className={'p-2'}>
        <ModalImageInput label={'이미지'} value={dataRoomImages} readOnly={id && editMode} disabled={id && editMode} />
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
            value={dataRoomFiles}
            label={'첨부파일'}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        )}
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
