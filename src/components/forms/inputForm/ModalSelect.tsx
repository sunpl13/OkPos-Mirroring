import React from 'react'
import {CCol, CFormSelect, CFormLabel, CRow} from '@coreui/react'

interface IOption {
  key: number | string
  value: string
}

interface ModalInputProps {
  onChange?: () => void
  placeholder: string
  label: string
  readOnly?: boolean
  size: 'sm' | 'lg' | undefined
  value: IOption[]
  id?: string
}

const ModalSelect = ({onChange, size, placeholder, label, value, readOnly, id}: ModalInputProps) => {
  const newOptions = value.map(item => <option key={item.key}>{item.value}</option>)

  return (
    <CRow className='mb-3'>
      <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol sm={10}>
        <CFormSelect id={id} size={size} onChange={onChange} readOnly={readOnly}>
          <option>{placeholder}</option>
          {newOptions}
        </CFormSelect>
      </CCol>
    </CRow>
  )
}

export default ModalSelect
