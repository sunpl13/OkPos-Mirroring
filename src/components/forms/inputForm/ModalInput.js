import {CCol, CFormInput, CFormLabel} from '@coreui/react'
import React from 'react'

const ModalInput = ({type, onChange, id, placeholder, value, label, readOnly, disabled, isRequired, xs}) => {
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol className='align-items-center' xs={xs} style={{display: 'flex'}}>
        <CFormInput
          type={type || 'text'}
          id={id}
          placeholder={placeholder || ''}
          value={type === 'file' ? undefined : value || ''}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </CCol>
    </>
  )
}

export default ModalInput
