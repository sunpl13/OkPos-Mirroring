import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'

type Value = {
  id: number
  userName: string
  email: string
  phoneNumber: string
  text: string | undefined
  firstRegistration: string
  answer: string
}

interface InquiryDetailProps {
  onClick: () => void
  onChange: () => void
  item: Value
  value: string
  visible: boolean
  setVisible: (state: boolean) => void | undefined
}

const InquiryDetailModal = ({onClick, onChange, value, item, visible, setVisible}: InquiryDetailProps) => {
  const {text, answer} = item
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>InquiryDetailModal User ID : {item.id}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow className={'p-2'}>
            <ModalTextArrayInput
              id='userInquiry'
              label={`User ID : ${item.id}  User Email : ${item.email}`}
              text='User Inquiry'
              value={text}
              readOnly
              rows={9}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalTextArrayInput
              id='answer'
              label='Inquiry Textarea'
              text='Must be 8-20 words long.'
              rows={9}
              value={answer || value}
              onChange={onChange}
            />
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton onClick={onClick} color='primary'>
          Add
        </CButton>
        <CButton color='secondary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default InquiryDetailModal
