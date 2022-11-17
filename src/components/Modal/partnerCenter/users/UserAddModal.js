import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'

const UserAddModal = ({onClick, onChange, value, visible, setVisible}) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Add User</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <ModalInput
            id={'userName'}
            placeholder={'UserName'}
            label={'UserName'}
            value={value.userName}
            onChange={onChange}
          />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'Phone Number'}
            label={'Phone Number'}
            value={value.phoneNumber}
            onChange={onChange}
          />
        </CRow>
        <ModalInput
          id={'businessNumber'}
          placeholder={'Business Number'}
          label={'Business Number'}
          value={value.businessNumber}
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

export default UserAddModal
