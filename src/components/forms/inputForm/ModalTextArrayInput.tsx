import {CCol, CFormTextarea} from '@coreui/react'

interface Interface {
  id: string
  value: string
  rows: number
  label: string
  text: string
  onChange: () => void
}

const ModalTextArrayInput = ({id, value, rows, label, onChange, text}: Interface) => {
  return (
    <CCol>
      <CFormTextarea
        id={id || ''}
        label={label || ''}
        rows={rows || 10}
        value={value}
        onChange={onChange}
        text={text || ''}
      />
    </CCol>
  )
}

export default ModalTextArrayInput
