import {CCol, CFormInput, CFormLabel, CFormTextarea, CRow} from '@coreui/react'
import React from 'react'

const ModalTextarea = ({type, onChange, id, placeholder, value, label, readOnly, disabled, isRequired, row}) => {
  return (
    <>
      <CRow>
        <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
          <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
        </CFormLabel>
        <CCol className='sm-8'>
          <CFormTextarea
            type={type || 'text'}
            id={id}
            placeholder={placeholder || ''}
            value={type === 'file' ? undefined : value}
            onChange={onChange}
            readOnly={readOnly}
            disabled={disabled}
            row={row}
          />
        </CCol>
      </CRow>
    </>
  )
}

export default ModalTextarea
