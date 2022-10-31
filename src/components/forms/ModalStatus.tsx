import {CBadge, CCol, CFormLabel} from '@coreui/react'
import React from 'react'

interface ModalInputProps {
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  id: string
  placeholder: string
  value: boolean
  label: string
  readOnly?: boolean
  disabled?: boolean
  status?: boolean
}

const ModalStatus = ({id, value, label}: ModalInputProps) => {
  const getBadge = (status: boolean) => {
    switch (status) {
      case true:
        return 'success'
      case false:
        return 'danger'
      default:
        return 'primary'
    }
  }
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <strong>{label || ' * '}</strong>
      </CFormLabel>
      <CCol className='align-items-center' style={{display: 'flex'}}>
        {/* <CBadge color={'success'}>{value ? '활성화' : '비활성화'}</CBadge> */}
        <CBadge color={getBadge(value)}>{value ? '활성화' : '비활성화'}</CBadge>
      </CCol>
    </>
  )
}

export default ModalStatus
