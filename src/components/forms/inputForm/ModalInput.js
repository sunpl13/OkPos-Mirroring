import React from 'react'
import {CCol, CFormInput, CFormLabel, CRow} from '@coreui/react'

const ModalInput = props => {
  // eslint-disable-next-line react/prop-types
  const {onChange, id, placeholder, value, label} = props
  return (
    <CRow className='mb-3'>
      <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol sm={10}>
        <CFormInput type='text' id={id} placeholder={placeholder || ''} defaultValue={value} onChange={onChange} />
      </CCol>
    </CRow>
  )
}

export default ModalInput
