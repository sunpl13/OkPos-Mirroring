import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useEffect, useState} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'

const UserDetailModal = ({value, visible, setVisible, upDate}) => {
  const [editMode, setEditMode] = useState(false)
  const [stateCompare, setStateCompare] = useState({
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
        setEditMode(false)
      } else {
        setEditMode(false)
      }
    } else {
      setEditMode(!editMode)
    }
  }
  const handleUserDetailModalOnChange = ({target: {id, value}}) => {
    setStateCompare({
      ...stateCompare,
      [id]: value,
    })
  }
  //
  const handleCloseModal = () => {
    userDetailEditMode()
    setVisible(false)
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
        <CRow>
          <ModalInput
            id={'businessRegistration'}
            placeholder={'Business Registration'}
            label={'Business Registration'}
            value={stateCompare.businessRegistration}
            onChange={handleUserDetailModalOnChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalFilesInput id={'files'} label={'Business Registration'} value={''} />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={editMode ? 'success' : 'primary'} onClick={() => setEditMode(!editMode)}>
          Edit
        </CButton>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default UserDetailModal
