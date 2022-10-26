import {CCol, CFormInput, CFormLabel} from '@coreui/react'

interface ModalInputProps {
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  id: string
  placeholder: string
  value: string | number | string[] | undefined
  label: string
  readOnly?: boolean
}

const ModalInput = ({type, onChange, id, placeholder, value, label, readOnly}: ModalInputProps) => {
  return (
    <>
      <CFormLabel htmlFor='staticEmail' className='col-sm-2 col-form-label'>
        {label || ' * '}
      </CFormLabel>
      <CCol>
        <CFormInput
          type={type || 'text'}
          id={id}
          placeholder={placeholder || ''}
          value={type === 'file' ? undefined : value}
          onChange={onChange}
          readOnly={readOnly}
        />
      </CCol>
    </>
  )
}

export default ModalInput
