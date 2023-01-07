import React, {useEffect, useState} from 'react'
import {ConfigProvider, DatePicker, Select, Space} from 'antd'
import moment from 'moment'
import {CCol} from '@coreui/react'
import styled from 'styled-components'
import locale from 'antd/lib/locale/ko_KR'
const {Option} = Select

const RangeDatePicker = ({options, datePicker}) => {
  const [option, setOption] = useState({key: 'createdAt', value: '', children: ''})
  const {RangePicker} = DatePicker
  useEffect(() => {
    options && setOption(options[0])
  }, [])

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
        {options && options?.length > 1 && (
          <Select value={option.value || options[0]?.value} onChange={selectedOnChange}>
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

export default RangeDatePicker

const PickerCCol = styled(CCol)`
  display: flex;
  flex-direction: row;
  align-content: end;
  justify-content: end;
  height: 100%;
  width: 100%;
`
