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
import PropTypes from 'prop-types'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {useDispatch} from 'react-redux'
const inquiries = [
  {key: 'PRODUCTS', value: '상품'},
  {key: 'ADDITIONAL_SERVICES', value: '부가 서비스'},
  {key: 'RECRUITMENT', value: '채용'},
  {key: 'PARTNERSHIPS', value: '제휴'},
  {key: 'ETC', value: '기타'},
]

const QnADetail = ({getList, value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)
  const dispatch = useDispatch()
  const onDelete = async () => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          id: value.inquiryId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.HOME_INQUIRY}/:id/d`,
      })
      if (data.isSuccess) {
        getList()
        setshowDeleteModal(false)
        setCloseCheckModalState(false)
        setIsReadOnly(true)
        setVisible(false)
        dispatch({
          type: 'SET_TOAST_STATE',
          visibleState: true,
          toastColor: 'success',
          textColor: 'white',
          text: `${data.result}`,
        })
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
          <CModalTitle>1:1 문의 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='inquiryId'
              placeholder='No.'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.inquiryId === -1 ? '' : value.inquiryId}
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
              id='email'
              placeholder='email'
              label='이메일'
              value={value.email}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
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
          <CRow>
            <MultiFileDownloadForm files={value.fileUrl} id='fileUrl' label='첨부파일' />
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
QnADetail.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
}

export default QnADetail
