import {CCol, CFormSelect, CFormLabel} from '@coreui/react'
import * as PorpTypes from 'prop-types'

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

ModalSelect.propTypes = {
  onChange: PorpTypes.func,
  size: PorpTypes.string,
  placeholder: PorpTypes.string,
  label: PorpTypes.string,
  value: PorpTypes.any,
  readOnly: PorpTypes.bool,
  id: PorpTypes.string,
  disabled: PorpTypes.bool,
  isRequired: PorpTypes.bool,
  options: PorpTypes.any,
}

export default ModalSelect
