import {CCol, CFormTextarea} from '@coreui/react'

interface Interface {
  id: string
  value: string
  rows: number
  label: string
  text?: string
  onChange?: () => void
  readOnly?: boolean
  disabled?: boolean
}

const ModalTextArrayInput = ({id, value, rows, label, onChange, text, readOnly, disabled}: Interface) => {
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
