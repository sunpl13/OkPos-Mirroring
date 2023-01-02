import React, {useEffect, useState} from 'react'
import {ConfigProvider, DatePicker, Select, Space, TimePicker} from 'antd'
import moment from 'moment'
import {CCol} from '@coreui/react'
import styled from 'styled-components'
import locale from 'antd/lib/locale/ko_KR'
const {Option} = Select

const TestRangeDatePicker = ({options, datePicker}) => {
  const [option, setOption] = useState({key: 'createdAt', value: '', children: ''})
  const {RangePicker} = DatePicker
  moment.locale('ko')

  const selectedOnChange = (value, key) => {
    setOption(key)
  }

  const datePickerOnChange = date => {
    if (date) {
      datePicker(moment(date[0].$d).format('YYYY-MM-DD'), moment(date[1].$d).format('YYYY-MM-DD'), option)
    } else {
      datePicker('', '', {})
    }
  }

  return (
    <PickerCCol>
      <Space>
        {options && (
          <Select value={option?.value || options[0]?.value} onChange={selectedOnChange}>
            {options.map(({value, key}) => (
              <Option value={value} key={key}>
                {value}
              </Option>
            ))}
          </Select>
        )}
        <ConfigProvider locale={locale}>
          <Space direction='vertical'>
            <RangePicker allowClear={true} onChange={datePickerOnChange} />
          </Space>
        </ConfigProvider>
      </Space>
    </PickerCCol>
  )
}

export default TestRangeDatePicker

const PickerCCol = styled(CCol)`
  display: flex;
  flex-direction: row;
  align-content: end;
  justify-content: end;
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  & div {
    height: 100%;
  }
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
