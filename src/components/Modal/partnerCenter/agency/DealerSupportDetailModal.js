import React, {useState} from 'react'
import {CRow} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import PropTypes from 'prop-types'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import DetailModalTemplate from '../DetailModalTemplate'

const category = [
  {key: 'DEALER', value: '딜러'},
  {key: 'AGENCY', value: '대리점'},
]

const career = [
  {key: 1, value: '신입'},
  {key: 2, value: '1년'},
  {key: 3, value: '2년'},
  {key: 4, value: '3년'},
  {key: 5, value: '4년'},
  {key: 6, value: '5년'},
  {key: 7, value: '6년 이상'},
]
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

  const [showDeleteModal, setShowDeleteModal] = useState(false)

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
        title={'딜러 지원 상세' || ''}
        setVisible={setVisible}
        btnText={'수정'}
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
          <ModalSelect
            readOnly
            size='sm'
            value={supportArea}
            options={category}
            placeholder='선택해주세요'
            label='지원 분야'
          />
          <ModalSelect
            options={career}
            readOnly
            size='sm'
            value={value.career}
            placeholder='선택해주세요'
            label='경력 유무'
          />
        </CRow>

        <CRow className='p-2'>
          <ModalTextArrayInput
            id='noticeContent'
            value={noticeContent}
            rows={6}
            label='지원 공고 본문'
            onChange={onChange}
            readOnly
          />
        </CRow>
        <CRow className='p-2'>
          <ModalImageInput fileList={noticeImages || []} id={'images'} label={'지원 공고 이미지'} readOnly />
        </CRow>
        <br />
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
