import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../forms/inputForm/ModalInput'
type Value = {
  id: number
  email: string
  phoneNumber: string
}
interface AddProps {
  onClick: () => void
  onChange: () => void
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
}

const UserAddModalTemplate = ({onClick, onChange, value, visible, setVisible}: AddProps) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Add User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <ModalInput onChange={onChange} id={'email'} placeholder={'email'} label={'Email'} />
        <ModalInput onChange={onChange} id={'email'} placeholder={'email'} label={'Email'} />
        <ModalInput onChange={onChange} id={'email'} placeholder={'email'} label={'Email'} />
        <ModalInput onChange={onChange} id={'email'} placeholder={'phoneNumber'} label={'Phone Number'} />
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

export default UserAddModalTemplate
