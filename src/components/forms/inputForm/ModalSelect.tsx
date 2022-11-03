import React from 'react'
import {CCol, CFormSelect, CFormLabel} from '@coreui/react'

interface IOption {
  key: number | string
  value: string
}

interface ModalInputProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  placeholder: string
  label: string
  readOnly?: boolean
  size: 'sm' | 'lg' | undefined
  value: IOption[]
  id?: string
  disabled?: boolean
  isRequired?: boolean
}

const ModalSelect = ({
  onChange,
  size,
  placeholder,
  label,
  value,
  readOnly,
  id,
  disabled = false,
  isRequired,
}: ModalInputProps) => {
  const newOptions = value.map(item => (
    <option key={item.key} value={item.key}>
      {item.value}
    </option>
  ))

  return (
    <>
      <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol>
        <CFormSelect disabled={disabled} id={id} size={size} onChange={onChange} readOnly={readOnly}>
          <option value={'-1'}>{placeholder}</option>
          {newOptions}
        </CFormSelect>
      </CCol>
    </>
  )
}

export default ModalSelect
