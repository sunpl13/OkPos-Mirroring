import {ConfigProvider, DatePicker, Space} from 'antd'
import locale from 'antd/lib/locale/ko_KR'
import 'antd/dist/antd.min.css'
import moment from 'moment'
import 'moment/locale/ko'

const RangeDatePicker = () => {
  const {RangePicker} = DatePicker
  moment.locale('ko')
  return (
    <ConfigProvider locale={locale}>
      <Space direction='vertical' size={12}>
        <RangePicker allowClear={true} />
      </Space>
    </ConfigProvider>
  )
}

export default RangeDatePicker
