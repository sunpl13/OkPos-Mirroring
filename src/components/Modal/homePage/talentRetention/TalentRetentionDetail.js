import {useState} from 'react'
import {CModal, CModalBody, CModalHeader, CModalTitle, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {category} from '../employment/EmploymemtDetailModal'
import CloseCheckModal from '../../CloseCheckModal'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import PropTypes from 'prop-types'

const TalentRetentionDetail = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
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
        <CModalHeader>
          <CModalTitle>인재풀 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='talentPoolId'
              placeholder='talentPoolId'
              label='talentPoolId'
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
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='email'
              placeholder='email'
              label='이메일'
              value={value.email}
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalInput
              onChange={onChange}
              id='phoneNumber'
              placeholder='phone number'
              label='휴대 전화번호'
              value={value.phoneNumber}
              isRequired={true}
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
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='position'
              options={category}
              value={value.position}
              isRequired={true}
              placeholder='선택해주세요'
              label='지원 포지션'
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='number'
              placeholder='phone number'
              label='전화번호'
              value={value.number}
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalSelect
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='position'
              options={category}
              value={value.position}
              isRequired={true}
              placeholder='선택해주세요'
              label='지원 포지션'
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.talentPoolId === -1 ? (
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

TalentRetentionDetail.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
}

export default TalentRetentionDetail
