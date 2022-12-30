import {ConfigProvider, DatePicker, Space} from 'antd'
import locale from 'antd/lib/locale/ko_KR'
//import 'antd/dist/antd.min.css'
import moment from 'moment'
import 'moment/locale/ko'
import {CCol} from '@coreui/react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const ModalRangeDatePicker = ({setStartDate, setEndDate, startDate, endDate, onChange}) => {
  const {RangePicker} = DatePicker
  const dateFormat = 'YYYY.MM.DD'
  moment.locale('ko')
  const datePickerOnChange = date => {
    if (date) {
      console.log(date)
      setStartDate(moment(date[0].$d).format('YYYY.MM.DD'))
      setEndDate(moment(date[1].$d).format('YYYY.MM.DD'))
    } else {
      setStartDate('')
      setEndDate('')
    }
  }
  console.log(startDate, endDate)
  return (
    <PickerCCol>
      <ConfigProvider locale={locale}>
        <Space direction='vertical'>
          <RangePicker
            allowClear={true}
            onChange={datePickerOnChange}
            defaultValue={startDate && endDate && [dayjs(startDate, dateFormat), dayjs(endDate, dateFormat)]}
          />
        </Space>
      </ConfigProvider>
    </PickerCCol>
  )
}

export default ModalRangeDatePicker

const PickerCCol = styled(CCol)`
  display: flex;
  flex-direction: row;
  align-content: end;
  justify-content: end;
  height: 100%;
  width: 100%;
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
