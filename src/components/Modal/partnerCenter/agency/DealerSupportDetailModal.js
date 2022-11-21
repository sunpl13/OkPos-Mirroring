import React, {useState} from 'react'
import {
  CCol,
  CFormLabel,
  CImage,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CModalFooter,
  CButton,
} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import PropTypes from 'prop-types'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'

const category = [
  {key: '"DEALER"', value: '딜러'},
  {key: '"AGENCY"', value: '대리점'},
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
const DealerSupportDetailModal = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  // - VAN 영업 경력 (유/무)"
  const {
    noticeTitle, // 지원한 공지 제목
    noticeContent, //지원한 공지 본문
    noticeImages, //지원한 공지 이미지
    supportArea, //지원 분야 (대리점 / 딜러)
    name, // 이름
    email, // 이메일
    phoneNum, // 전화번호
  } = value
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [editMode, setEditMode] = useState(true)

  const userDetailEditMode = () => {
    if (!isReadOnly) {
      setIsReadOnly(true)
    } else {
      //여기에 수정 api 작성
      setIsReadOnly(false)
    }
  }
  const handleCloseModal = () => {
    userDetailEditMode()
    setVisible(false)
  }
  const onClose = () => {
    setVisible(false)
    setEditMode(true)
  }
  return (
    <>
      <CModal alignment='center' size='lg' visible={visible} onClose={() => onClose()}>
        <CModalHeader>
          <CModalTitle>지원 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalSelect
              readOnly={editMode}
              disabled={editMode}
              onChange={onChange}
              size='sm'
              value={supportArea}
              options={category}
              placeholder='선택해주세요'
              label='지원 분야'
            />
            <ModalSelect
              options={career}
              onChange={onChange}
              size='sm'
              value={value.career}
              placeholder='선택해주세요'
              label='경력'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='noticeTitle'
              placeholder='지원 공고'
              label='지원 공고'
              readOnly={true}
              disabled={true}
              value={noticeTitle || ''}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalTextArrayInput
              id='noticeContent'
              value={noticeContent}
              rows={6}
              label='지원 공고 본문'
              onChange={onChange}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
          <CRow className='mb-3'>
            <CFormLabel>이미지</CFormLabel>
            <CCol>
              <CImage
                rounded
                src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100'
                width={200}
                height={200}
              />
            </CCol>
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='name'
              placeholder='지원자 이름'
              label='이름'
              value={name}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='email'
              placeholder='이메일'
              label='이메일'
              value={email}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='phoneNum'
              placeholder='전화번호'
              label='전화번호'
              value={phoneNum}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color={isReadOnly ? 'primary' : 'success'} onClick={() => setEditMode(!editMode)}>
            Edit
          </CButton>
          <CButton color='primary' onClick={handleCloseModal}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <DeleteModalTemplate
        onDelete={() => setshowDeleteModal(false)}
        visible={showDeleteModal}
        setVisible={setshowDeleteModal}
      />
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
}

export default DealerSupportDetailModal
