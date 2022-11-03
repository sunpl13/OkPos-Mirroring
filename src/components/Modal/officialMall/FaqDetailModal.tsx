import {
  CButton,
  CForm,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'

type Value = {
  id: number
  category: []
  title: string
  content: string
}

interface FaqDetailProps {
  onClick: () => void
  onChange: () => void
  item: Value
  value: string
  visible: boolean
  isUpdate: boolean
  setVisible: (state: boolean) => void | undefined
}

const FaqDetailModal = ({onClick, onChange, item, visible, setVisible, isUpdate}: FaqDetailProps) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>FAQ 상세 내용</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow className={'p-2'}>
            <ModalInput id={'id'} placeholder={''} label={'No'} value={item.id} onChange={onChange} readOnly disabled />
            <ModalInput
              id={'category'}
              placeholder={''}
              label={'분류'}
              value={item.category}
              onChange={onChange}
              readOnly={isUpdate}
              disabled={isUpdate}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'title'}
              placeholder={''}
              label={'제목'}
              value={item.title}
              onChange={onChange}
              readOnly={isUpdate}
              disabled={isUpdate}
            />
          </CRow>
          <CRow className={'p-2'}>
            <CFormTextarea
              id='content'
              label='문의 내용'
              text='Must be 8-20 words long.'
              rows={9}
              value={item.content}
              onChange={onChange}
              disabled={isUpdate}
            ></CFormTextarea>
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        {!isUpdate && (
          <CButton onClick={onClick} color='primary'>
            추가
          </CButton>
        )}
        {isUpdate && (
          <CButton onClick={onClick} color='primary'>
            수정
          </CButton>
        )}
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default FaqDetailModal
