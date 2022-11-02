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

type SupportDetailType = {
  no: number
  category: string
  announcementTitle: string
  userName: string
  email: string
  phoneNumber: string
  employStartDate: string
  employEndDate: string
  status: string
  businessName: string
  businessNumber: string
  businessRegistration: string
  businessAddress: string
  employbannerImg: string
  employmentType: string
  workArea: string
  education: string
  career: string
  des: string
  qualifications: string
  preferentiaTreatment: string
  reason: string
  departmentStatus: string
  etc: string
  _id: string
}

interface AddProps {
  readOnly: boolean
  value: SupportDetailType
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  isReadOnly: boolean
  setIsReadOnly: (state: boolean) => void
}

const category = [
  {key: 1, value: '딜러'},
  {key: 2, value: '대리점'},
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
const DealerSupportDetailModal = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}: AddProps) => {
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
            <ModalInput
              onChange={onChange}
              id='No'
              placeholder='No.'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.no || '0'}
            />
            <ModalSelect
              readOnly={editMode}
              disabled={editMode}
              onChange={onChange}
              size='sm'
              value={category}
              placeholder='선택해주세요'
              label='지원 분야'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='announcementTitle'
              placeholder='AnnouncementTitle.'
              label='지원 공고'
              readOnly={true}
              disabled={true}
              value={value.announcementTitle || ''}
            />
          </CRow>
          <CRow className='mb-3'>
            <CRow className='mb-3'>
              <ModalInput
                onChange={onChange}
                id='startDate'
                placeholder='AnnouncementTitle.'
                label='지원 일자'
                readOnly={true}
                disabled={true}
                value={value.employStartDate || ''}
              />
              <ModalSelect onChange={onChange} size='sm' value={career} placeholder='선택해주세요' label='경력' />
            </CRow>
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
              id='userName'
              placeholder='userName'
              label='이름'
              value={value.userName}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='email'
              placeholder='email'
              label='Email'
              value={value.email}
              readOnly={editMode}
              disabled={editMode}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='phoneNumber'
              placeholder='Phone Number'
              label='전화번호'
              value={value.phoneNumber}
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

export default DealerSupportDetailModal
