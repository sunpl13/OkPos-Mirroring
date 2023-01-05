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
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'

const EnglishInquiryDetail = ({getList, value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
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
        alert(data.result)
        onClose()
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.No !== -1) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n 지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        onClose()
      }
    } else {
      onClose()
    }
  }

  const onClose = () => {
    setVisible(false)
    setIsReadOnly(true)
  }

  const onDeleteConfilm = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete()
    }
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
              placeholder='이름'
              label='이름'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.name}
            />
            <ModalInput
              onChange={onChange}
              id='email'
              placeholder='이메일'
              label='이메일'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.email}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='country'
              placeholder='국가'
              label='국가'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.country}
            />
            <ModalInput
              onChange={onChange}
              id='companyName'
              placeholder='회사 명'
              label='회사 명'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.companyName}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='address'
              placeholder='주소'
              label='주소'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.address}
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
          <CButton color='danger' onClick={onDeleteConfilm}>
            삭제
          </CButton>

          <CButton color='secondary' onClick={onCloseCheck}>
            취소
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default EnglishInquiryDetail
