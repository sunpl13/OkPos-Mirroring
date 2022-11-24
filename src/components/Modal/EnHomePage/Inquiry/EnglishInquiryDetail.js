import {useState} from 'react'
import {
  CModal,
  CButton,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CFormLabel,
  CFormTextarea,
} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'

const EnglishInquiryDetail = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
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
          <CModalTitle>문의 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='inquiryId'
              placeholder='ID'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.inquiryId === -1 ? '' : value.inquiryId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='name'
              placeholder='Name'
              label='이름'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.name}
            />
            <ModalInput
              onChange={onChange}
              id='email'
              placeholder='Name'
              label='이메일'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.email}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='category'
              placeholder='문의 유형'
              label='문의 유형'
              value={value.category}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
            <ModalInput
              onChange={onChange}
              id='number'
              placeholder='전화번호'
              label='전화번호'
              value={value.number}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow>
            <CFormLabel>문의 내용</CFormLabel>
            <CFormTextarea
              placeholder='문의 내용'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              value={value.content}
              rows={15}
              id='content'
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.inquiryId === -1 ? (
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

export default EnglishInquiryDetail
