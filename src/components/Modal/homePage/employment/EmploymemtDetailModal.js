import {useEffect, useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton, CFormCheck} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DatePickerForm from '../../../common/DatePickerForm'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import CloseCheckModal from '../../CloseCheckModal'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {isEmpty} from '../../../../utils/utility'
import moment from 'moment'
import {sendFileUrlFormat} from '../../../../utils/awsCustom'
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
const EmploymemtDetailModal = ({getList, value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)
  const [fileList, setFileList] = useState([])
  const dispatch = useDispatch()
  const userDetailEditMode = () => {
    if (!isReadOnly) {
      onUpdate()
      setIsReadOnly(true)
    } else {
      setIsReadOnly(false)
    }
  }

  const validateCheck = () => {
    if (isEmpty(value.category)) {
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
    if (isEmpty(value.jobType) || value.jobType === '선택해주세요') {
      alert('고용 형태를 선택해주세요.')
      return false
    }
    if (isEmpty(value.location)) {
      alert('근무 지역을 입력해주세요.')
      return false
    }
    if (isEmpty(value.education) || value.education === '선택해주세요') {
      alert('학력 및 전공을 선택해주세요.')
      return false
    }
    if (isEmpty(value.career) || value.career === '선택해주세요') {
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
    const startTime = moment(startDate).format('YYYY.MM.DD 00:00:00')
    const endTime = moment(endDate).format('YYYY.MM.DD 23:59:59')

    try {
      if (!validateCheck()) {
        return
      }
      const {proceed, recruitmentId, ...rest} = value
      const urls = sendFileUrlFormat(fileList)
      const {data} = await ApiConfig.request({
        data: {...rest, startedAt: startTime, closedAt: endTime, imageUrls: urls},
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.RECRUITMENT}`,
      })
      if (data.isSuccess) {
        getList()
        setFileList([])
        setshowDeleteModal(false)
        setCloseCheckModalState(false)
        setVisible(false)
        dispatch({
          type: 'set',
          visibleState: true,
          toastColor: 'success',
          textColor: 'white',
          text: '공고가 정상적으로 생성 되었습니다.',
        })
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
        data: {...value, startedAt: startDate, closedAt: endDate},
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
        setshowDeleteModal(false)
        setCloseCheckModalState(false)
        setVisible(false)
        dispatch({type: 'set', visibleState: true, toastColor: 'success', textColor: 'white', text: `${data.result}`})
      }
    } catch (error) {
      alert(error)
    }
  }

  const onUpdate = async () => {
    try {
      const {data} = await ApiConfig.request({
        data: {...value, startedAt: startDate, closedAt: endDate},
        query: {},
        path: {
          recruitmentId: value.recruitmentId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.RECRUITMENT}/:recruitmentId`,
      })
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.recruitmentId !== -1) {
      setCloseCheckModalState(true)
    } else {
      setVisible(false)
      setIsReadOnly(true)
      setFileList([])
    }
  }

  const onClose = () => {
    setCloseCheckModalState(false)
    setFileList([])
    setVisible(false)
    setIsReadOnly(true)
  }

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>채용 상세</CCustomModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='recruitmentId'
              placeholder='recruitmentId.'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.recruitmentId === -1 ? '' : value.recruitmentId}
            />
            <ModalSelect
              options={category}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='category'
              value={value.category}
              isRequired={true}
              placeholder='선택해주세요'
              label='카테고리'
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
            <DatePickerForm
              readOnly={false}
              label='시작일'
              isRequired={true}
              id='startedAt'
              date={startDate}
              setDate={setstartDate}
              isDisabled={isReadOnly}
            />
            <DatePickerForm
              readOnly={false}
              label='종료일'
              isRequired={true}
              id='closedAt'
              date={endDate}
              setDate={setendDate}
              isDisabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='proceed'
              options={status}
              value={value.proceed}
              isRequired={true}
              placeholder='선택해주세요'
              label='진행 상태'
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='jobType'
              options={type}
              value={value.jobType}
              isRequired={true}
              placeholder='선택해주세요'
              label='고용 형태'
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
              id='education'
              options={education}
              isRequired={true}
              value={value.education}
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
              value={value.career}
              id='career'
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
              <CButton color='danger' className='text-white' onClick={() => setshowDeleteModal(true)}>
                삭제
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                수정
              </CButton>
            </>
          )}
          <CButton color='primary' onClick={onCloseCheck}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <DeleteModalTemplate onDelete={onDelete} visible={showDeleteModal} setVisible={setshowDeleteModal} />
      <CloseCheckModal onClick={onClose} visible={closeCheckModalState} setVisible={setCloseCheckModalState} />
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
