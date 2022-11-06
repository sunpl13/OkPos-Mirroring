import React, {useState} from 'react'
import {CCol, CFormLabel, CImage, CModal, CModalBody, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {EmploymentType} from '../../../../pages/homePage/employment/Employment'
import DatePickerForm from '../../../common/DatePickerForm'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import CloseCheckModal from '../../CloseCheckModal'

interface AddProps {
  value: EmploymentType
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  isReadOnly: boolean
  setIsReadOnly: (state: boolean) => void
}

//const imgs = [
//   {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg', altName: '이미지01'},
//   {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg', altName: '이미지02'},
//   {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg', altName: '이미지03'},
//   {img: 'https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg', altName: '이미지04'},
// ]

export const category = [
  {key: 'SERVICE_PLANNING', value: '서비스 기획'},
  {key: 'SERVICE_DEVELOPMENT', value: '서비스 개발'},
  {key: 'DESIGN', value: '디자인'},
  {key: 'BUSINESS_DEVELOPMENT', value: '사업 개발'},
  {key: 'B2B_DEVELOPMENT', value: 'B2B 개발'},
  {key: 'B2B_OPERATION', value: 'B2B 운영 '},
  {key: 'CORPORATE_SALES', value: '법인 영업'},
  {key: 'CHANNEL_SALES', value: '채널 영업'},
  {key: 'DEVICE_SALES', value: '디바이스 영업'},
  {key: 'DEVICE_DEVELOPMENT', value: '디바이스 개발'},
  {key: 'OEM_MANAGEMENT', value: 'OEM 관리'},
  {key: 'AS_CENTER', value: 'A/S 센터'},
  {key: 'BUSINESS_MANAGEMENT', value: '경영 관리'},
  {key: 'SETTLEMENT', value: '정산'},
  {key: 'OPERATION_PLANNING', value: '운영 기획'},
  {key: 'CUSTOMER_SUPPORT', value: '고객 지원'},
  {key: 'INTEGRATED_CS', value: '통합 CS '},
  {key: 'ONSITE_SUPPORT_TECHNICAL_SUPPORT', value: '현장 지원-기술 지원'},
  {key: 'ONSITE_SUPPORT_LOGISTICS', value: '현장 지원 - 물류'},
  {key: 'OPERATIONAL_INNOVATION_TF', value: '운영 혁신 TF'},
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
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)
  const userDetailEditMode = () => {
    if (!isReadOnly) {
      setIsReadOnly(true)
    } else {
      //여기에 수정 api 작성
      setIsReadOnly(false)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.No !== -1) {
      setCloseCheckModalState(true)
    } else {
      setVisible(false)
      setIsReadOnly(true)
    }
  }

  const onClose = () => {
    setCloseCheckModalState(false)
    setVisible(false)
    setIsReadOnly(true)
  }

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        {/* <CModalHeader>
          <CModalTitle>채용 상세</CModalTitle>
        </CModalHeader> */}
        <CCustomModalHeader onClick={onCloseCheck}>채용 상세</CCustomModalHeader>
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
              isRequired={true}
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
              isRequired={true}
              placeholder='선택해주세요'
              label='진행 상태'
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              value={type}
              isRequired={true}
              placeholder='선택해주세요'
              label='고용 형태'
            />
          </CRow>
          <CRow className='mb-3'>
            <DatePickerForm
              readOnly={false}
              label='시작일'
              isRequired={true}
              id='startDate'
              date={startDate}
              setDate={setstartDate}
              isDisabled={isReadOnly}
            />
            <DatePickerForm
              readOnly={false}
              label='종료일'
              isRequired={true}
              id='endDate'
              date={endDate}
              setDate={setendDate}
              isDisabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='workArea'
              placeholder='workArea'
              label='근무 지역'
              value={value.workArea}
              isRequired={true}
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
            <ModalSelect
              onChange={onChange}
              size='sm'
              value={career}
              placeholder='선택해주세요'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              label='경력'
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
          <CButton color='primary' onClick={onCloseCheck}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <DeleteModalTemplate
        onDelete={() => setshowDeleteModal(false)}
        visible={showDeleteModal}
        setVisible={setshowDeleteModal}
      />
      <CloseCheckModal onClick={onClose} visible={closeCheckModalState} setVisible={setCloseCheckModalState} />
    </>
  )
}

export default EmploymemtDetailModal
