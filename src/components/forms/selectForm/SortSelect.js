import {CCol, CFormSelect} from '@coreui/react'
import PropTypes from 'prop-types'

const SortSelect = ({md, label, value, onchange}) => {
  const options = [
    {
      value: 'UserId',
      key: 'UserId',
    },
    {
      value: 'Ascending',
      key: 'Ascending',
    },
    {
      value: 'Descending',
      key: 'Descending',
    },
  ]

  return (
    <CCol md={md || 4}>
      <CFormSelect
        id='floatingSelect'
        floatingLabel={label || ''}
        aria-label={label || ''}
        onChange={onchange}
        value={value || ''}
      >
        {options?.map(({value, key}) => (
          <option value={value} key={key}>
            {key}
          </option>
        ))}
      </CFormSelect>
    </CCol>
  )
}

SortSelect.propTypes = {
  md: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.object,
  onchange: PropTypes.func,
}

export default SortSelect

{
  /*<CFormLabel>{label || ''}</CFormLabel>
      <CCol sm={sm || 6}>
        <Select options={options} value={value} onChange={onChange} />
      </CCol>*/
}
