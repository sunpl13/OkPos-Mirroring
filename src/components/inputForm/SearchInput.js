import React from 'react'
import {CCol, CFormInput, CFormLabel} from '@coreui/react'

const SearchInput = props => {
  // eslint-disable-next-line react/prop-types
  const {md, sm, onKeyPress, onChange, id, placeholder, label, autoComplete} = props
  return (
    <CCol md={md || 4}>
      <CCol sm={sm || 10}>
        <CFormLabel htmlFor='validationTestName'>{label || 'Search'}</CFormLabel>
        <CFormInput
          type='text'
          id={id || ''}
          placeholder={placeholder || ''}
          onKeyPress={onKeyPress}
          onChange={onChange}
          autoComplete={autoComplete || 'off'}
        />
      </CCol>
    </CCol>
  )
}

export default SearchInput
