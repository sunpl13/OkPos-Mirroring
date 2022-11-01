import {CCol, CFormLabel} from '@coreui/react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

interface IDatePickerProps {
  id: string
  date: Date
  setDate: (date: Date) => void
  label: string
  readOnly?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}

const DatePickerForm = ({
  id,
  date,
  setDate,
  label,
  readOnly = false,
  isRequired,
  isDisabled = false,
}: IDatePickerProps) => {
  const onChange = (date: Date) => {
    setDate(date)
  }
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className={'col-sm-2 col-form-label'}>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol>
        <CDatePicker
          readOnly={readOnly}
          dateFormat='yyyy-MM-dd'
          selected={date}
          onChange={(date: Date) => onChange(date)}
          disabled={isDisabled}
        />
      </CCol>
    </>
  )
}

export default DatePickerForm

const CDatePicker = styled(DatePicker)`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--cui-input-color, rgba(44, 56, 74, 0.95));
  background-color: var(--cui-input-bg, #fff);
  background-clip: padding-box;
  border: 1px solid var(--cui-input-border-color, #b1b7c1);
  appearance: none;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    background-color: #d8dbe0;
  }
`
