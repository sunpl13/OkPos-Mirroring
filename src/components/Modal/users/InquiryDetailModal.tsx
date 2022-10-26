import {CButton, CForm, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

type Value = {
  id: number
  userName: string
  email: string
  phoneNumber: string
  text: string | undefined
  firstRegistration: string
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
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>InquiryDetailModal User ID : {item.id}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CFormTextarea
            id='userInquiry'
            label={`User ID : ${item.id}  User Email : ${item.email}`}
            text='User Inquiry'
            value={item.text}
            readOnly={true}
            rows={9}
          ></CFormTextarea>{' '}
          <CFormTextarea
            id='answer'
            label='Inquiry Textarea'
            text='Must be 8-20 words long.'
            rows={9}
            value={value}
            onChange={onChange}
          ></CFormTextarea>
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
