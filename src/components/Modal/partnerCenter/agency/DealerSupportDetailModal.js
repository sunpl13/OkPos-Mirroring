import React, {useState} from 'react'
import {CRow} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import PropTypes from 'prop-types'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import DetailModalTemplate from '../DetailModalTemplate'
import ModalTextOnlyQuillEditor from '../../../forms/inputForm/ModalTextOnlyQuillEditor'
import ModalReadOnlyQuillEditor from '../../../forms/inputForm/ModalReadOnlyQuillEditor'

const category = {
  DEALER: {key: 'DEALER', value: '딜러'},
  AGENCY: {
    key: 'AGENCY',
    value: '대리점',
  },
}

const DealerSupportDetailModal = ({value, visible, setVisible, onChange, onDelete, isReadOnly, setIsReadOnly}) => {
  // - VAN 영업 경력 (유/무)"
  const {
    noticeTitle, // 지원한 공지 제목
    noticeContent, //지원한 공지 본문
    noticeImages, //지원한 공지 이미지
    supportArea, //지원 분야 (대리점 / 딜러)
    name, // 이름
    email, // 이메일
    phoneNum, // 전화번호
    isExperiences, // 경력 유무
  } = value

  const userDetailEditMode = () => {
    if (!isReadOnly) {
      setIsReadOnly(true)
    } else {
      //여기에 수정 api 작성
      setIsReadOnly(false)
    }
  }
  return (
    <>
      <DetailModalTemplate
        visible={visible}
        title={'딜러 지원 상세'}
        setVisible={setVisible}
        onDelete={onDelete}
        notEditBtn={true}
      >
        <CRow className='p-2'>
          <ModalInput
            onChange={onChange}
            id='noticeTitle'
            placeholder='지원 공고'
            label='지원 공고'
            readOnly
            value={noticeTitle || ''}
          />
        </CRow>
        <CRow className='p-2'>
          <ModalInput readOnly size='sm' value={category[supportArea]?.value || ''} label='지원 분야' />
          <ModalInput
            id='phoneNum'
            placeholder='VAN 영업 경력'
            label='VAN 영업 경력'
            value={isExperiences ? '유' : '무'}
            readOnly
          />
        </CRow>
        <CRow className={'p-2 pb-2'}>
          <ModalReadOnlyQuillEditor id='noticeContent' value={noticeContent} label='지원 공고 본문' readOnly />
        </CRow>
        <CRow className='p-2'>
          <ModalImageInput fileList={noticeImages || []} id={'images'} label={'지원 공고 이미지'} readOnly />
        </CRow>
        <CRow className='p-2'>
          <ModalInput
            onChange={onChange}
            id='name'
            placeholder='지원자 이름'
            label='지원자 이름'
            value={name}
            readOnly
          />
        </CRow>
        <CRow className='p-2'>
          <ModalInput
            onChange={onChange}
            id='email'
            placeholder='이메일'
            label='지원자 이메일'
            value={email}
            readOnly
          />
        </CRow>
        <CRow className='p-2'>
          <ModalInput
            onChange={onChange}
            id='phoneNum'
            placeholder='전화번호'
            label='지원자 전화번호'
            value={phoneNum}
            readOnly
          />
        </CRow>
      </DetailModalTemplate>
    </>
  )
}

DealerSupportDetailModal.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
  edgeMode: PropTypes.bool,
}

export default DealerSupportDetailModal
