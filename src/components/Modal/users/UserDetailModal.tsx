import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'

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
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: () => void
}

const UserDetailModal = ({value, visible, setVisible, onChange}: AddProps) => {
  const [editMode, setEditMode] = useState(false)
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    userName: '',
    businessNumber: '',
    createdAt: '',
    status: true,
    phoneNumber: '',
    businessRegistration: '',
    businessName: '',
    businessAddress: '',
  })

  useEffect(() => {
    setStateCompare(value)
  }, [])

  const userDetailEditMode = () => {
    setEditMode(!editMode)
  }
  const closeModal = () => {
    console.log(stateCompare)
    console.log(value)

    setVisible(false)
    setEditMode(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>User Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'id'}
            placeholder={'User Id'}
            label={'User Id'}
            value={value.id}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'userName'}
            placeholder={'UserName'}
            label={'UserName'}
            value={value.userName}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessNumber'}
            placeholder={'Business Number'}
            label={'Business Number'}
            value={value.businessNumber}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'createdAt'}
            placeholder={'CreatedAt'}
            label={'CreatedAt'}
            value={value.createdAt}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'userStatus'}
            placeholder={'User Status'}
            label={'User Status'}
            value={value.status ? 'Activate' : 'Disabled'}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'Phone Number'}
            label={'Phone Number'}
            value={value.phoneNumber}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessRegistration'}
            placeholder={'Business Registration'}
            label={'Business Registration'}
            value={value.businessRegistration}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'businessName'}
            placeholder={'Business Name'}
            label={'Business Name'}
            value={value.businessName}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessAddress'}
            placeholder={'Business Address'}
            label={'Business Address'}
            value={value.businessAddress}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={editMode ? 'success' : 'primary'} onClick={userDetailEditMode}>
          Edit
        </CButton>
        <CButton color='primary' onClick={closeModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default UserDetailModal
