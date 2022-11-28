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
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {useDispatch} from 'react-redux'

const EnglishInquiryDetail = ({getList, value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)
  const dispatch = useDispatch()
  const onDelete = async () => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          id: value.inquiryEnglishId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.ENGLISH_HOME_INQUIRY}/:id/d`,
      })
      if (data.isSuccess) {
        getList()
        setshowDeleteModal(false)
        setCloseCheckModalState(false)
        setIsReadOnly(true)
        setVisible(false)
        dispatch({type: 'set', visibleState: true, toastColor: 'success', textColor: 'white', text: `${data.result}`})
      }
    } catch (error) {
      alert(error)
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
          <CModalTitle>문의 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              xs={4}
              onChange={onChange}
              id='inquiryEnglishId'
              placeholder='ID'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.inquiryEnglishId === -1 ? '' : value.inquiryEnglishId}
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
          <CButton color='danger' onClick={() => setshowDeleteModal(true)}>
            삭제
          </CButton>

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

export default EnglishInquiryDetail
