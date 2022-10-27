import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import React, {useEffect, useState} from 'react'

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
  onChange?: () => void
  upDate: (item: Value) => void
}

const UserDetailModal = ({value, visible, setVisible, upDate}: AddProps) => {
  const [editMode, setEditMode] = useState(false)
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    userName: '',
    createdAt: '',
    status: true,
    phoneNumber: '',
    businessName: '',
    businessNumber: '',
    businessRegistration: '',
    businessAddress: '',
  })

  useEffect(() => {
    if (visible) {
      setStateCompare(value)
    }
  }, [visible])
  const userDetailEditMode = () => {
    if (
      (editMode && stateCompare.id !== value.id) ||
      stateCompare.userName !== value.userName ||
      stateCompare.phoneNumber !== value.phoneNumber ||
      stateCompare.businessName !== value.businessName ||
      stateCompare.businessNumber !== value.businessNumber ||
      stateCompare.businessAddress !== value.businessAddress ||
      stateCompare.businessRegistration !== value.businessRegistration
    ) {
      if (window.confirm('Edit ?')) {
        upDate(stateCompare)
        setEditMode(!editMode)
      } else {
        setEditMode(!editMode)
      }
    } else {
      setEditMode(!editMode)
    }
  }
  const handleUserDetailModalOnChange = ({
    target: {id, value},
  }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setStateCompare({
      ...stateCompare,
      [id]: value,
    })
  }
  //
  const handleCloseModal = () => {
    setVisible(false)
    setEditMode(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={handleCloseModal}>
      <CModalHeader>
        <CModalTitle>User Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'id'}
            placeholder={'User Id'}
            label={'User Id'}
            value={stateCompare.id}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'userName'}
            placeholder={'UserName'}
            label={'UserName'}
            value={stateCompare.userName}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessNumber'}
            placeholder={'Business Number'}
            label={'Business Number'}
            value={stateCompare.businessNumber}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'createdAt'}
            placeholder={'CreatedAt'}
            label={'CreatedAt'}
            value={stateCompare.createdAt}
            onChange={handleUserDetailModalOnChange}
            disabled
            readOnly
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'userStatus'}
            placeholder={'User Status'}
            label={'User Status'}
            value={stateCompare.status ? 'Activate' : 'Disabled'}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'phoneNumber'}
            placeholder={'Phone Number'}
            label={'Phone Number'}
            value={stateCompare.phoneNumber}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessRegistration'}
            placeholder={'Business Registration'}
            label={'Business Registration'}
            value={stateCompare.businessRegistration}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'businessName'}
            placeholder={'Business Name'}
            label={'Business Name'}
            value={stateCompare.businessName}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessAddress'}
            placeholder={'Business Address'}
            label={'Business Address'}
            value={stateCompare.businessAddress}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={editMode ? 'success' : 'primary'} onClick={userDetailEditMode}>
          Edit
        </CButton>
        <CButton color='primary' onClick={handleCloseModal}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default UserDetailModal
