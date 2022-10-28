import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {getMonth, getYear} from 'date-fns'
import {ko} from 'date-fns/esm/locale'
import range from 'lodash/range'
import {CButton, CCol, CDropdown, CFormSelect, CInputGroup} from '@coreui/react'
import styled from 'styled-components'

const RangeDatePickerForm = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const years = range(2000, getYear(new Date()) + 1, 1)
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  const onChange = ([start, end]) => {
    setStartDate(start)
    setEndDate(end)
  }
  return (
    <CustomCCol>
      <CDatePicker
        style={{minWidth: '300px'}}
        selected={startDate}
        dateFormat='yyyy년 MM월 dd일'
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        locale={ko}
        dropdownMode='select'
        dayClassName={d =>
          d.getDate() === startDate.getDate()
            ? 'custom-day selected-day'
            : d.getMonth() === startDate.getMonth()
            ? 'custom-day'
            : 'custom-day gray-day'
        }
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CInputGroup>
              <CDropdown variant='input-group'>
                <CButton color='primary' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                  {'<'}
                </CButton>
                <CFormSelect size='sm' value={getYear(date)} onChange={({target: {value}}) => changeYear(value)}>
                  {years.map(option => (
                    <option key={option} value={option}>
                      {option}년
                    </option>
                  ))}
                </CFormSelect>
                <CFormSelect
                  size='sm'
                  value={months[getMonth(date)]}
                  onChange={({target: {value}}) => changeMonth(months.indexOf(value))}
                >
                  {months?.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </CFormSelect>
                <CButton color='primary' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                  {'>'}
                </CButton>
              </CDropdown>
            </CInputGroup>
          </div>
        )}
      />
    </CustomCCol>
  )
}

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
`
const CustomCCol = styled(CCol)`
  & .react-datepicker-popper {
    width: 330px;
    & > div,
    & .react-datepicker,
    & .react-datepicker__month-container {
      width: 100%;
      & .react-datepicker__day-names div {
        width: 2.5rem;
      }
      & .gray-day {
        color: gray;
      }
      & .react-datepicker__month {
        font-size: 1rem;
        & .react-datepicker__week {
          & div {
            width: 2.5rem;
          }
        }
      }
    }
  }
`
export default RangeDatePickerForm
