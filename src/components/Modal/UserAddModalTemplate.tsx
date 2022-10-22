import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import ModalInput from '../forms/inputForm/ModalInput'
type Value = {
  userName: string
  businessNumber: string
  createdAt: string
  status: boolean
  phoneNumber: string
  businessRegistration: string
  businessName: string
  businessAddress: string
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
        <ModalInput
          id={'userName'}
          placeholder={'UserName'}
          label={'UserName'}
          value={value.userName}
          onChange={onChange}
        />
        <ModalInput
          id={'businessNumber'}
          placeholder={'Business Number'}
          label={'Business Number'}
          value={value.businessNumber}
          onChange={onChange}
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'Phone Number'}
          label={'Phone Number'}
          value={value.phoneNumber}
          onChange={onChange}
        />
        <ModalInput
          type='file'
          id={'businessRegistration'}
          placeholder={'Business Registration'}
          label={'Business Registration'}
          value={value.businessRegistration}
          onChange={onChange}
        />
        <ModalInput
          id={'businessName'}
          placeholder={'Business Name'}
          label={'Business Name'}
          value={value.businessName}
          onChange={onChange}
        />
        <ModalInput
          id={'businessAddress'}
          placeholder={'Business Address'}
          label={'Business Address'}
          value={value.businessAddress}
          onChange={onChange}
        />
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
