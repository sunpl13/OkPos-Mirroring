import {useState} from 'react'
import {
  CFormLabel,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CModalFooter,
  CButton,
  CFormTextarea,
} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import CloseCheckModal from '../../CloseCheckModal'
import DeleteModalTemplate from '../../DeleteModalTemplate'

const NoticeDetail = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
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
          <CModalTitle>공지사항 상세</CModalTitle>
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
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='공고 제목을 입력해주세요'
              label='공고 제목'
              value={value.title}
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <CFormLabel>공고 본문</CFormLabel>
            <CFormTextarea
              placeholder='공고 본문'
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

export default NoticeDetail
