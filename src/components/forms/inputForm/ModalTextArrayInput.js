import {CCol, CFormTextarea} from '@coreui/react'

const ModalTextArrayInput = ({id, value, rows, label, onChange, text, readOnly, disabled}) => {
  return (
    <CCol>
      <CFormTextarea
        id={id || ''}
        label={label || ''}
        rows={rows || 10}
        value={value || ''}
        onChange={onChange}
        text={text || ''}
        readOnly={readOnly}
        disabled={disabled}
      />
    </CCol>
  )
}

export default ModalTextArrayInput
