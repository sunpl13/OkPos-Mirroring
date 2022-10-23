import {CCol, CFormInput, CFormLabel, CRow} from '@coreui/react'

interface ModalInputProps {
  type?: string
  onChange?: () => void
  id: string
  placeholder: string
  value: never | any
  label: string
  readOnly?: boolean
}

const ModalInput = ({type, onChange, id, placeholder, value, label, readOnly}: ModalInputProps) => {
  return (
    <CRow className='mb-3'>
      <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol sm={10}>
        <CFormInput
          type={type || 'text'}
          id={id}
          placeholder={placeholder || ''}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
          readOnly={readOnly}
        />
      </CCol>
    </CRow>
  )
}

export default ModalInput
