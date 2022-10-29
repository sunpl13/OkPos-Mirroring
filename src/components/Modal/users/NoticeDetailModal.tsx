import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
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

const NoticeDetailModal = ({value, visible, setVisible, upDate}: AddProps) => {
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
        setEditMode(false)
      } else {
        setEditMode(false)
      }
    } else {
      setEditMode(!editMode)
    }
  }
  const handleNoticeDetailModalOnChange = ({
    target: {id, value},
  }: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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
        <CModalTitle>Notice Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'noticeTitle'}
            placeholder={'Notice Title'}
            label={'Notice Title'}
            value={stateCompare.id}
            onChange={handleNoticeDetailModalOnChange}
          />
        </CRow>
        <CRow>
          <CFormTextarea id='notice' label='' rows={15} text='Must be 8-20 words long.' />
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

export default NoticeDetailModal
