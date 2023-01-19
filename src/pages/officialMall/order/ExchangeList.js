import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import {exchangeListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import OrderTableList from '../../../components/list/mall/OrderTableList'
import ExchangeModal from '../../../components/Modal/officialMall/ExchangeModal'

const ExchangeList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [exchangeList, setExchangeList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // API 통신 함수
  const onLoadMallexchangeList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_EXCHANGE_ORDERS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('loadMallExchangeList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setExchangeList(res.result.responses)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallexchangeList()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <PageHeader title='교환 요청 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <OrderTableList
              items={exchangeList}
              onClick={handleShowUserDetailModal}
              columns={exchangeListColumns}
              className={'exchangeList'}
              datePicker
            />
          </CCardBody>
        </CCard>
      </CCol>
      <ExchangeModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        exchangeList={exchangeList}
        setExchangeList={setExchangeList}
        onLoadMallexchangeList={onLoadMallexchangeList}
        readOnly
      />
    </CRow>
  )
}

export default ExchangeList
