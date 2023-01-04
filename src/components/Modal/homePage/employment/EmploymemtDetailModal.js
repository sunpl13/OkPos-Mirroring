import {useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton, CFormCheck} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DatePickerForm from '../../../common/DatePickerForm'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {isEmpty} from '../../../../utils/utility'
import moment from 'moment'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'

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
  {key: 1, value: '채용중'},
  {key: 0, value: '채용 마감'},
]

const type = [
  {key: 'FULL_TIME', value: '정규직'},
  {key: 'PART_TIME', value: '계약직'},
  {key: 'INTERN', value: '인턴'},
]

const education = [
  {key: 'UNIVERSITY_GRADUATE_4_YEAR', value: '대졸(4년제) 이상'},
  {key: 'UNIVERSITY_GRADUATE_2_3_YEAR', value: '대졸(2,3년제) 이상'},
  {key: 'HIGH_SCHOOL_GRADUATE', value: '고졸'},
]

const career = [
  {key: 'NEW', value: '신입'},
  {key: 'EXPERIENCED', value: '경력'},
  {key: 'ANY', value: '무관'},
]
const EmploymemtDetailModal = ({
  getList,
  value,
  visible,
  setSelectedItem,
  setVisible,
  onChange,
  isReadOnly,
  setIsReadOnly,
}) => {
  const [fileList, setFileList] = useState([])
  const dispatch = useDispatch()
  const userDetailEditMode = () => {
    if (!isReadOnly) {
      onUpdate()
    } else {
      setIsReadOnly(false)
    }
  }

  const validateCheck = () => {
    if (isEmpty(value.categoryEnglish)) {
      alert('카테고리를 선택해 주세요.')
      return false
    }
    if (isEmpty(value.title)) {
      alert('공고 제목을 입력해주세요.')
      return false
    }
    if (value.proceed === '선택해주세요') {
      alert('진행상태를 선택해주세요.')
      return false
    }
    if (isEmpty(value.jobTypeEnglish) || value.jobTypeEnglish === '선택해주세요') {
      alert('고용 형태를 선택해주세요.')
      return false
    }
    if (isEmpty(value.location)) {
      alert('근무 지역을 입력해주세요.')
      return false
    }
    if (isEmpty(value.educationEnglish) || value.educationEnglish === '선택해주세요') {
      alert('학력 및 전공을 선택해주세요.')
      return false
    }
    if (isEmpty(value.careerEnglish) || value.careerEnglish === '선택해주세요') {
      alert('경력 정보를 선택해주세요.')
      return false
    }
    if (isEmpty(value.qualification)) {
      alert('자격 요건을 입력해주세요.')
      return false
    }

    return true
  }

  const onCreate = async () => {
    const startTime = moment(value.startedAt).format('YYYY.MM.DD 00:00:00')
    const endTime = moment(value.closedAt).format('YYYY.MM.DD 23:59:59')
    try {
      if (!validateCheck()) {
        return
      }
      const urls = sendImageUrlFormat(fileList)
      const {data} = await ApiConfig.request({
        data: {
          category: value.categoryEnglish,
          title: value.title,
          startedAt: startTime,
          closedAt: endTime,
          imageUrls: urls,
          jobType: value.jobTypeEnglish,
          location: value.location,
          education: value.educationEnglish,
          career: value.careerEnglish,
          duty: value.duty,
          qualification: value.qualification,
          preference: value.preference,
          hiringReason: value.hiringReason,
          departmentStatus: value.departmentStatus,
          otherNote: value.otherNote,
        },
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.RECRUITMENT}`,
      })
      if (data.isSuccess) {
        getList()
        setFileList([])
        setIsReadOnly(true)
        setVisible(false)
        alert('공고가 정상적으로 생성 되었습니다.')
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onDelete = async () => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          recruitmentId: value.recruitmentId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.RECRUITMENT}/:recruitmentId/d`,
      })
      if (data.isSuccess) {
        getList()
        setFileList([])
        setIsReadOnly(true)
        setVisible(false)
        alert(data.result)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onUpdate = async () => {
    const startTime = moment(value.startedAt).format('YYYY.MM.DD 00:00:00')
    const endTime = moment(value.closedAt).format('YYYY.MM.DD 23:59:59')
    const urls = sendImageUrlFormat(fileList)

    try {
      if (!validateCheck()) {
        return
      }
      const {data} = await ApiConfig.request({
        data: {
          recruitmentId: value.recruitmentId,
          category: value.categoryEnglish,
          title: value.title,
          startedAt: startTime,
          closedAt: endTime,
          imageUrls: urls,
          jobType: value.jobTypeEnglish,
          location: value.location,
          education: value.educationEnglish,
          career: value.careerEnglish,
          duty: value.duty,
          qualification: value.qualification,
          preference: value.preference,
          hiringReason: value.hiringReason,
          departmentStatus: value.departmentStatus,
          otherNote: value.otherNote,
        },
        query: {},
        path: {
          recruitmentId: value.recruitmentId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.RECRUITMENT}/:recruitmentId`,
      })
      if (data.isSuccess) {
        getList()
        setFileList([])
        setIsReadOnly(true)
        setVisible(false)
        alert(data.result)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.recruitmentId !== -1) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n 지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        onClose()
      }
    } else {
      onClose()
    }
  }

  const onClose = () => {
    setFileList([])
    setVisible(false)
    setIsReadOnly(true)
    setSelectedItem({})
  }

  const onDeleteConfilm = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete()
    }
  }

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>채용 상세</CCustomModalHeader>
        <CModalBody className='modal-scroll'>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='recruitmentId'
              placeholder='ID'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.recruitmentId === -1 ? '' : value.recruitmentId}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='jobTypeEnglish'
              options={type}
              value={value.jobTypeEnglish}
              isRequired={true}
              placeholder='선택해주세요'
              label='고용 형태'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='공고제목'
              label='공고 제목'
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.title}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalSelect
              options={category}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='categoryEnglish'
              value={value.categoryEnglish}
              isRequired={true}
              placeholder='선택해주세요'
              label='카테고리'
            />
          </CRow>
          <CRow className='mb-3'>
            <DatePickerForm
              readOnly={false}
              label='시작일'
              isRequired={true}
              id='startedAt'
              date={value.startedAt}
              onChange={onChange}
              isDisabled={isReadOnly}
            />
            <DatePickerForm
              readOnly={false}
              label='종료일'
              isRequired={true}
              id='closedAt'
              date={value.closedAt}
              onChange={onChange}
              isDisabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='location'
              placeholder='location'
              label='근무 지역'
              value={value.location}
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='educationEnglish'
              options={education}
              isRequired={true}
              value={value.educationEnglish}
              placeholder='선택해주세요'
              label='학력 및 전공'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='duty'
              placeholder='duty'
              label='직무 내용'
              isRequired={true}
              value={value.duty}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect
              onChange={onChange}
              size='sm'
              options={career}
              value={value.careerEnglish}
              id='careerEnglish'
              placeholder='선택해주세요'
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              label='경력'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={fileList}
              setFileList={setFileList}
              images={value.imageUrl}
              imgPath='recruitment_images'
              readOnly={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='qualification'
              placeholder='qualification'
              label='자격 요건'
              isRequired={true}
              value={value.qualification === null ? '' : value.qualification}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='preference'
              placeholder='preference'
              label='우대사항'
              value={value.preference === null ? '' : value.preference}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='hiringReason'
              placeholder='hiringReason'
              label='채용 사유'
              value={value.hiringReason === null ? '' : value.hiringReason}
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
              value={value.departmentStatus === null ? '' : value.departmentStatus}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='otherNote'
              placeholder='otherNote'
              label='기타 참고사항'
              value={value.otherNote === null ? '' : value.otherNote}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.recruitmentId === -1 ? (
            <CButton color='primary' onClick={onCreate}>
              추가
            </CButton>
          ) : (
            <>
              <CButton color='danger' className='text-white' onClick={onDeleteConfilm}>
                삭제
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                {isReadOnly ? '수정' : '저장'}
              </CButton>
            </>
          )}
          <CButton color='secondary' onClick={onCloseCheck}>
            취소
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

EmploymemtDetailModal.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
}

export default EmploymemtDetailModal
