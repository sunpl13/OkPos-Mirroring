import {CBadge, CCol, CFormLabel} from '@coreui/react'
import React from 'react'

interface ModalInputProps {
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  id: string
  placeholder: string
  value: string
  label: string
  readOnly?: boolean
  disabled?: boolean
  status?: boolean
}

const ModalStatus = ({id, value, label}: ModalInputProps) => {
  const getBadgeColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'success'
      case 'INACTIVE':
        return 'danger'
      default:
        return 'primary'
    }
  }

  // 상태값 Text get 함수
  const getBadgeText = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return '활성화'
      case 'INACTIVE':
        return '비활성화'
      default:
        return '기타'
    }
  }

  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol className='align-items-center' style={{display: 'flex'}}>
        <CBadge color={getBadgeColor(value)}>{getBadgeText(value)}</CBadge>
      </CCol>
    </>
  )
}

export default ModalStatus
