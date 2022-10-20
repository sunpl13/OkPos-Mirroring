import React from 'react'
import {CCol, CFormLabel} from '@coreui/react'
import Select from 'react-select'

const SortSelect = props => {
  // eslint-disable-next-line react/prop-types
  const {md, sm, title, value, onChange, options} = props
  console.log(value)
  return (
    <CCol md={md || 4}>
      <CFormLabel>{title || ''}</CFormLabel>
      <CCol sm={sm || 6}>
        <Select options={options} value={value} onChange={onChange} />
      </CCol>
    </CCol>
  )
}

export default SortSelect
