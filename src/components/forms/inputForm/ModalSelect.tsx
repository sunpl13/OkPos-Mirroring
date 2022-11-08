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
  value: string | number | string[]
  options: IOption[]
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
  options,
}: ModalInputProps) => {
  const newOptions = options.map(item => (
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
        <CFormSelect value={value} disabled={disabled} id={id} size={size} onChange={onChange} readOnly={readOnly}>
          <option>{placeholder}</option>
          {newOptions}
        </CFormSelect>
      </CCol>
    </>
  )
}

export default ModalSelect
