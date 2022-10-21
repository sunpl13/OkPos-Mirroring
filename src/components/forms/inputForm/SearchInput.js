import React from 'react'
import {CButton, CCol, CFormInput, CInputGroup} from '@coreui/react'

const SearchInput = props => {
  // eslint-disable-next-line react/prop-types
  const {md, onKeyPress, onChange, id, placeholder, label, onClick} = props
  return (
    <CCol md={md || 4}>
      <CInputGroup>
        <CFormInput
          id={id || ''}
          floatingLabel={placeholder || ''}
          onKeyPress={onKeyPress}
          onChange={onChange}
          aria-label={label || 'Search'}
          aria-describedby='button-addon2'
        />
        <CButton type='button' color='primary' id='button-addon2' onClick={onClick}>
          Search
        </CButton>
      </CInputGroup>
    </CCol>
  )
}

export default SearchInput
