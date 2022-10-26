import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'

type Value = {
  id: number
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
  readOnly: boolean
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
}

const UserDetailModal = ({value, visible, setVisible, readOnly}: AddProps) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>User Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <ModalInput id={'userId'} placeholder={'User Id'} label={'User Id'} value={value.id} readOnly={readOnly} />
        <ModalInput
          id={'userName'}
          placeholder={'UserName'}
          label={'UserName'}
          value={value.userName}
          readOnly={readOnly}
        />
        <ModalInput
          id={'businessNumber'}
          placeholder={'Business Number'}
          label={'Business Number'}
          value={value.businessNumber}
          readOnly={readOnly}
        />
        <ModalInput
          id={'createdAt'}
          placeholder={'CreatedAt'}
          label={'CreatedAt'}
          value={value.createdAt}
          readOnly={readOnly}
        />
        <ModalInput
          id={'userStatus'}
          placeholder={'User Status'}
          label={'User Status'}
          value={value.status ? 'Activate' : 'Disabled'}
          readOnly={readOnly}
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'Phone Number'}
          label={'Phone Number'}
          value={value.phoneNumber}
          readOnly={readOnly}
        />
        <ModalInput
          id={'businessRegistration'}
          placeholder={'Business Registration'}
          label={'Business Registration'}
          value={value.businessRegistration}
          readOnly={readOnly}
        />
        <ModalInput
          id={'businessName'}
          placeholder={'Business Name'}
          label={'Business Name'}
          value={value.businessName}
          readOnly={readOnly}
        />
        <ModalInput
          id={'businessAddress'}
          placeholder={'Business Address'}
          label={'Business Address'}
          value={value.businessAddress}
          readOnly={readOnly}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default UserDetailModal
