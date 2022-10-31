import {CCol, CFormTextarea} from '@coreui/react'

interface Interface {
  id: string
  value: string | undefined
  rows: number
  label: string
  text?: string
  onChange?: () => void
  readOnly?: boolean
}

const ModalTextArrayInput = ({id, value, rows, label, onChange, text, readOnly}: Interface) => {
  return (
    <CCol>
      <CFormTextarea
        id={id || ''}
        label={label || ''}
        rows={rows || 10}
        value={value}
        onChange={onChange}
        text={text || ''}
        readOnly={readOnly}
      />
    </CCol>
  )
}

export default ModalTextArrayInput
