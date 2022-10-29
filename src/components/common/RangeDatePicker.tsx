import {ConfigProvider, DatePicker, Space} from 'antd'
import locale from 'antd/lib/locale/ko_KR'
import 'antd/dist/antd.min.css'
import moment from 'moment'
import 'moment/locale/ko'
import {CCol} from '@coreui/react'
import styled from 'styled-components'

interface RangePickerProps {
  setStartDate: (date: string) => void
  setEndDate: (date: string) => void
}

const RangeDatePicker = ({setStartDate, setEndDate}: RangePickerProps) => {
  const {RangePicker} = DatePicker
  moment.locale('ko')
  const datePickerOnChange = (date: object | any) => {
    if (date) {
      setStartDate(moment(date[0]._d).format('YYYY-MM-DD'))
      setEndDate(moment(date[1]._d).format('YYYY-MM-DD'))
    } else {
      setStartDate('')
      setEndDate('')
    }
    console.log(date)
  }

  return (
    <PickerCCol>
      <ConfigProvider locale={locale}>
        <Space direction='vertical'>
          <RangePicker allowClear={true} onChange={datePickerOnChange} />
        </Space>
      </ConfigProvider>
    </PickerCCol>
  )
}

export default RangeDatePicker

const PickerCCol = styled(CCol)`
  display: flex;
  flex-direction: row;
  align-content: end;
  justify-content: end;
`
