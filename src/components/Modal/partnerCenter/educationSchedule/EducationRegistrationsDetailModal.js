import React from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import ModalRangeDatePicker from '../../../forms/inputForm/ModalRangeDatePicker'
import ModalSingleDatePicker from '../../../forms/inputForm/ModalSingleDatePicker'

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
  singleDate,
  setSingleDate,
}) => {
  const {
    applicantsCap, // 교육 신청 제한 인원
    educationRegistrationNoticeFiles, // 교육신청 공고 파일 리스트
    educationRegistrationNoticeImages, // 교육신청 공고 이미지 리스트
    id, // 교육신청 고고 ID
    place, // 교육 장소
    start, // 교육신청 시작일
    title, // 교육신청 공고 제목
  } = value

  return (
    <DetailModalEditModeTemplate
      title={id ? '교육 신청 상세' : '교육 신청 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      editMode={id && editMode}
      setEditMode={setEditMode}
      onDelete={id && onDelete}
      addModal={!id}
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
          isRequired
        />
      </CRow>
      {id ? (
        <>
          <CRow className={'p-2'}>
            <ModalRangeDatePicker
              id={'datePicker'}
              label={'접수 기간'}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
            <ModalSingleDatePicker
              id={'educationDate'}
              placeholder={'날짜를 선택해 주세요.'}
              label={'교육 일자'}
              value={singleDate}
              setValue={setSingleDate}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'start'}
              placeholder={'등록일'}
              label={'공고 등록일'}
              value={start}
              onChange={onChange}
              readOnly
              disabled
            />
            <ModalInput
              id={'applicantsCap'}
              placeholder={'참여 가능 인원'}
              label={'참여 가능 인원'}
              value={applicantsCap}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'place'}
              placeholder={'교육 장소'}
              label={'교육 장소'}
              value={place}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
        </>
      ) : (
        <>
          <CRow className={'p-2'}>
            <ModalRangeDatePicker
              id={'datePicker'}
              label={'접수 기간'}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              startDate={startDate}
              endDate={endDate}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
            <ModalSingleDatePicker
              id={'educationDate'}
              placeholder={'날짜를 선택해 주세요.'}
              label={'교육 일자'}
              value={singleDate}
              setValue={setSingleDate}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'applicantsCap'}
              placeholder={'참여 가능 인원'}
              label={'참여 가능 인원'}
              value={applicantsCap}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'place'}
              placeholder={'교육 장소'}
              label={'교육 장소'}
              value={place}
              onChange={onChange}
              readOnly={id && editMode}
              disabled={id && editMode}
              isRequired
            />
          </CRow>
        </>
      )}
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
      <CRow className={'p-2 mb-3'}>
        <ModalQuillEditor
          id='content'
          label={'본문'}
          isRequired
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
