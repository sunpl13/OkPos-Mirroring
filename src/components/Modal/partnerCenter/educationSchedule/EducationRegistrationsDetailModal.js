import React, {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CCol, CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import RangeDatePicker from '../../../common/RangeDatePicker'
import ModalRangeDatePicker from '../../../forms/inputForm/ModalRangeDatePicker'

const EducationRegistrationsDetailModal = ({
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
  setStartDate,
  setEndDate,
  startDate,
  endDate,
}) => {
  const {
    applicantsCap, // 교육 신청 제한 인원
    deadline, // 교육신청 마감일
    educationDate, // 교육 일정
    educationRegistrationNoticeFiles, // 교육신청 공고 파일 리스트
    educationRegistrationNoticeImages, // 교육신청 공고 이미지 리스트
    id, // 교육신청 고고 ID
    place, // 교육 장소
    start, // 교육신청 시작일
    title, // 교육신청 공고 제목
  } = value

  //"- 공고 제목
  // - 등록일
  // - 첨부파일
  // - 접수 기간
  // - 교육 일자
  // - 교육 장소
  // - 참여 가능 인원
  // - 본문
  // - 이미지"
  return (
    <DetailModalEditModeTemplate
      title={id ? '교육 신청 상세' : '교육 신청 추가'}
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
      {id && (
        <ModalInput
          id={'title'}
          placeholder={'등록일'}
          label={'공고 등록일'}
          value={start}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
      )}
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'접수 기간'}
          label={'접수 기간'}
          value={start}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
        <CCol xs={4}>
          <ModalRangeDatePicker
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onChange}
          />
        </CCol>
        {id ? (
          <ModalInput
            id={'title'}
            placeholder={'등록일'}
            label={'공고 등록일'}
            value={start}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        ) : (
          <ModalInput
            id={'title'}
            placeholder={'교육 인원'}
            label={'교육 인원'}
            value={applicantsCap}
            onChange={onChange}
            readOnly={id && editMode}
            disabled={id && editMode}
          />
        )}
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'교육 일자'}
          label={'교육 일자'}
          value={start}
          onChange={onChange}
          readOnly={id && editMode}
          disabled={id && editMode}
        />
        <ModalInput
          id={'place'}
          placeholder={'교육 장소'}
          label={'교육 장소'}
          value={place}
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
            value={educationRegistrationNoticeFiles}
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
          value={educationRegistrationNoticeImages}
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

export default EducationRegistrationsDetailModal
