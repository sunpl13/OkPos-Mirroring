import React, {useEffect, useState} from 'react'
import {ConfigProvider, DatePicker, Space} from 'antd'
import dayjs from 'dayjs'
import moment from 'moment'
import 'moment/locale/ko'
import locale from 'antd/lib/locale/ko_KR'
import {CCol, CFormLabel} from '@coreui/react'
import styled from 'styled-components'

const ModalSingleDatePicker = ({id, label, isRequired, readOnly, value, setValue, placeholder, disabledDate}) => {
  moment.locale('ko')
  const dateFormat = 'YYYY-MM-DD'
  const datePickerOnChange = date => {
    if (date) {
      setValue(moment(date?.$d).format('YYYY.MM.DD'))
    } else {
      setValue('')
    }
  }
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <PickerCCol>
        <ConfigProvider locale={locale}>
          <Space direction='vertical' size={12}>
            <DatePicker
              allowClear={true}
              value={value && dayjs(value, dateFormat)}
              format={dateFormat}
              placeholder={placeholder}
              onChange={datePickerOnChange}
              disabled={readOnly}
            />
          </Space>
        </ConfigProvider>
      </PickerCCol>
    </>
  )
}

export default ModalSingleDatePicker

const PickerCCol = styled(CCol)`
  display: flex;
  flex-direction: row;
  align-content: end;
  justify-content: end;
  height: 100%;
  width: 100%;
  & .ant-space-item {
    width: 100%;
  }
  & .ant-picker {
    border-radius: 0.375rem;
    border: solid 1px #9da5b1;
  }
  & .ant-space-item {
    width: 100%;
    & > div {
      width: 100%;
    }
  }
  & .ant-space.ant-space-vertical {
    width: 100%;
  }
`
