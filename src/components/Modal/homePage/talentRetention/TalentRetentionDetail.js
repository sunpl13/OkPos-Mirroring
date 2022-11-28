import {useState} from 'react'
import {CModal, CModalBody, CModalHeader, CModalTitle, CRow, CModalFooter, CButton, CFormLabel} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {category} from '../employment/EmploymemtDetailModal'
import CloseCheckModal from '../../CloseCheckModal'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import PropTypes from 'prop-types'
import DatePickerForm from '../../../common/DatePickerForm'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'

const TalentRetentionDetail = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)

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
      <CModal alignment='center' size='xl' visible={visible}>
        <CModalHeader>
          <CModalTitle>인재풀 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='talentPoolId'
              placeholder='talentPoolId'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.talentPoolId === -1 ? '' : value.talentPoolId}
            />
            <ModalInput
              onChange={onChange}
              id='name'
              placeholder='이름을 입력해주세요'
              label='이름'
              value={value.name}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='number'
              placeholder='phone number'
              label='전화번호'
              value={value.number}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalInput
              onChange={onChange}
              id='phoneNumber'
              placeholder='phone number'
              label='휴대 전화번호'
              value={value.phoneNumber}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='positionEnglish'
              options={category}
              value={value.positionEnglish}
              placeholder='선택해주세요'
              label='지원 포지션'
            />
            <DatePickerForm
              readOnly={false}
              label='등록일'
              id='registeredAt'
              date={value.registeredAt}
              isDisabled={true}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='number'
              placeholder='phone number'
              label='전화번호'
              value={value.number}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <MultiFileDownloadForm files={value.otherDocument} id='otherDocument' label='기타 추가자료' />
          </CRow>
          <CRow className='mb-3'>
            <ModalTextArrayInput
              id='otherLink'
              label='추가 링크 자료'
              value={value.otherLink}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
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

TalentRetentionDetail.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
}

export default TalentRetentionDetail
