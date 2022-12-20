import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CFormLabel, CFormSelect, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import OrderModal from '../../../components/Modal/officialMall/OrderModal'
import PageHeader from '../../../components/common/PageHeader'
import {orderListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import OrderTableList from '../../../components/list/mall/OrderTableList'

const OrderList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [orderList, setOrderList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // API 통신 함수
  const onLoadMallorderList = async orderStatus => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_ORDERS,
        query: {
          orderStatus: orderStatus || '',
        },
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('loadMallorderList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setOrderList(res.result.responses)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallorderList()
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowUserDetailModal = item => {
    console.log('modal on')
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleOrderStatus = id => {
    //onLoadMallorderList(status)
  }

  return (
    <CRow>
      <PageHeader title='주문 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <OrderTableList
              items={orderList}
              onClick={handleShowUserDetailModal}
              columns={orderListColumns}
              className={'orderList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <OrderModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default OrderList
