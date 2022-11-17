import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React, {useEffect, useState} from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'

const UserDetailModal = ({value, visible, setVisible, upDate, onChange}) => {
  const {
    address, // 사업장 주소
    businessName, // 상호명
    certificateNum, // 사업자 번호
    createdAt, // 계정 등록일
    phoneNum, // 휴대전화 번호
    status, // 계정 상태
    userName, // 회원 이름
    certificateFile, // 사업자 등록증
  } = value
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    if (!visible) {
      setEditMode(false)
    }
  }, [visible])
  const handleEditModeToggle = () => {
    if (editMode) {
      upDate()
    }
    setEditMode(!editMode)
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => upDate()}>
      <CModalHeader>
        <CModalTitle>User Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'userName'}
            placeholder={'회원 이름'}
            label={'회원 이름'}
            value={userName}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'certificateNum'}
            placeholder={'사업자 번호'}
            label={'사업자 번호'}
            value={certificateNum}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'createdAt'}
            placeholder={'계정 등록일'}
            label={'계정 등록일'}
            value={createdAt}
            onChange={onChange}
            disabled
            readOnly
          />
          <ModalInput
            id={'status'}
            placeholder={'계정 상태'}
            label={'계정 상태'}
            value={status}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'phoneNum'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={phoneNum}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
          <ModalInput
            id={'businessName'}
            placeholder={'상호명'}
            label={'상호명'}
            value={businessName}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'address'}
            placeholder={'사업장 주소'}
            label={'사업장 주소'}
            value={address}
            onChange={onChange}
            disabled={!editMode}
            readOnly={!editMode}
          />
        </CRow>
        <CRow>
          <ModalFilesInput id={'files'} label={'사업자 등록증'} value={certificateFile} />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={editMode ? 'success' : 'primary'} onClick={() => handleEditModeToggle()}>
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
