import {CCol, CFormSelect, CFormLabel} from '@coreui/react'

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
}) => {
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
