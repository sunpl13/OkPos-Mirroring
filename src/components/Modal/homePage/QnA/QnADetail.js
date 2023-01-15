import {CModal, CModalBody, CModalHeader, CModalTitle, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import PropTypes from 'prop-types'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import ModalSelect from '../../../forms/inputForm/ModalSelect'

const category = [
  {key: 'PRODUCTS', value: '상품'},
  {key: 'ADDITIONAL_SERVICES', value: '부가서비스'},
  {key: 'RECRUITMENT', value: '채용'},
  {key: 'PARTNERSHIPS', value: '제휴'},
  {key: 'ETC', value: '기타'},
]

const QnADetail = ({getList, value, visible, setVisible, onChange, isReadOnly, setIsReadOnly, content, setContent}) => {
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
        setIsReadOnly(true)
        setVisible(false)
        alert(data.result)
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
          <CRow className='mb-3'>
            <ModalSelect
              onChange={onChange}
              size='sm'
              options={category}
              value={value.category ?? value.categoryEnglish}
              id='category'
              placeholder='선택해주세요'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              label='문의유형'
            />
          </CRow>
          <CRow>
            <ModalQuillEditor
              id='content'
              value={content}
              isRequired={false}
              readOnly={isReadOnly}
              setValue={setContent}
              label='문의 내용'
            />
          </CRow>
          <CRow>
            <MultiFileDownloadForm files={value.fileUrl} id='fileUrl' label='첨부파일' />
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
QnADetail.propTypes = {
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
  setIsReadOnly: PropTypes.func,
}

export default QnADetail
