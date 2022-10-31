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
import ModalSelect from '../../forms/inputForm/ModalSelect'
import ModalInput from '../../forms/inputForm/ModalInput'
import {EmploymentType} from '../../../pages/employment/Employment'
import DatePickerForm from '../../common/DatePickerForm'
import DeleteModalTemplate from '../DeleteModalTemplate'

interface AddProps {
  readOnly: boolean
  value: EmploymentType
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  isReadOnly: boolean
  setIsReadOnly: (state: boolean) => void
}

const category = [
  {key: 'servicePlanning', value: '서비스 기획'},
  {key: 'serviceDevelop', value: '서비스 개발'},
  {key: 'design', value: '디자인'},
  {key: 'a', value: '사업 개발'},
  {key: 'b', value: 'B2B 개발'},
  {key: 'c', value: 'B2B 운영 '},
  {key: 'd', value: '법인 영업'},
  {key: 'e', value: '채널 영업'},
  {key: 'f', value: '디바이스 영업'},
  {key: 'g', value: '디바이스 개발'},
  {key: 'h', value: 'OEM 관리'},
  {key: 'i', value: 'A/S 센터'},
  {key: 'j', value: '경영 관리'},
  {key: 'k', value: '정산'},
  {key: 'l', value: '운영 기획'},
  {key: 'm', value: '고객 지원'},
  {key: 'n', value: '통합 CS '},
  {key: 'o', value: '현장 지원-기술 지원'},
  {key: 'p', value: '현장 지원 - 물류'},
  {key: 'q', value: '운영 혁신 TF'},
]

const status = [
  {key: 'p', value: '채용중'},
  {key: 'q', value: '마감'},
]

const type = [
  {key: 'q', value: '정규직'},
  {key: 'w', value: '계약직'},
  {key: 'e', value: '인턴'},
]

const education = [
  {key: 'q', value: '대졸(4년제) 이상'},
  {key: 'w', value: '대졸(2,3년제) 이상'},
  {key: 'e', value: '고졸'},
]

const career = [
  {key: 'q', value: '신입'},
  {key: 'w', value: '경력'},
  {key: 'e', value: '무관'},
]
const EmploymemtDetailModal = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}: AddProps) => {
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [showDeleteModal, setshowDeleteModal] = useState(false)
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

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>채용 상세</CModalTitle>
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
              value={value.No === -1 ? '' : value.No}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              value={category}
              placeholder='선택해주세요'
              label='카테고리'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              value={status}
              placeholder='선택해주세요'
              label='진행 상태'
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              value={type}
              placeholder='선택해주세요'
              label='고용 형태'
            />
          </CRow>
          <CRow className='mb-3'>
            <DatePickerForm label='시작일' id='startDate' date={startDate} setDate={setstartDate} />
            <DatePickerForm label='종료일' id='endDate' date={endDate} setDate={setendDate} />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='workArea'
              placeholder='workArea'
              label='근무 지역'
              value={value.workArea}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              value={education}
              placeholder='선택해주세요'
              label='학력 및 전공'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='des'
              placeholder='des'
              label='직무 내용'
              value={value.des}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect onChange={onChange} size='sm' value={career} placeholder='선택해주세요' label='경력' />
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
              id='qualifications'
              placeholder='qualifications'
              label='자격 요건'
              value={value.qualifications}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='preferentiaTreatment'
              placeholder='preferentiaTreatment'
              label='우대사항'
              value={value.preferentiaTreatment}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='reason'
              placeholder='reason'
              label='채용 사유'
              value={value.reason}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='departmentStatus'
              placeholder='departmentStatus'
              label='부서 현황'
              value={value.departmentStatus}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='etc'
              placeholder='etc'
              label='기타 참고사항'
              value={value.etc}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.No === -1 ? (
            <CButton color='primary'>Add</CButton>
          ) : (
            <>
              <CButton color='danger' onClick={() => setshowDeleteModal(true)}>
                delete
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                Edit
              </CButton>
            </>
          )}
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

export default EmploymemtDetailModal
