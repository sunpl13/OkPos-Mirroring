import {CCol, CFormInput, CFormLabel} from '@coreui/react'

interface ModalInputProps {
  type?: string
  onChange?: () => void
  id: string
  placeholder: string
  value: never | any
  label: string
  readOnly?: boolean
  disabled?: boolean
}

const ModalInput = ({type, onChange, id, placeholder, value, label, readOnly, disabled}: ModalInputProps) => {
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol className='align-items-center' style={{display: 'flex'}}>
        <CFormInput
          type={type || 'text'}
          id={id}
          placeholder={placeholder || ''}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </CCol>
    </>
  )
}

export default ModalInput
