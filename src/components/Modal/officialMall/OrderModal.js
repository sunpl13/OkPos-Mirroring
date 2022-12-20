import {CButton, CFormSelect, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalStatus from '../../forms/ModalStatus'
import {isPrice} from '../../../utils/utility'
import {productListColumns} from '../../../utils/columns/officialMall/Columns'
import ProductList from '../../list/mall/ProductList'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'

const OrderModal = ({value, visible, setVisible, onChange}) => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [order, setOrder] = useState({
    orderId: 0,
    orderNumber: '',
    name: '',
    paymentMethod: '',
    totalPrice: 0,
    orderDate: '',
    payDate: '',
    receiver: '',
    address: '',
    normalNumber: '',
    phoneNumber: '',
    totalCount: '',
    subInfos: [],
  })

  const [orderStatus, setOrderStatus] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      setOrder(value)
    }
  }, [visible])

  const closeModal = () => {
    setOrderStatus('')
    setSelectedProduct('')
    setVisible(false)
  }

  // 함수 선언
  // Update OrderStatus
  const onUpdateOrderStatus = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_ORDERS_STATUS,
        path: {
          orderItemId: selectedProduct.orderItemId,
        },
        data: {
          orderStatus: orderStatus,
        },
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 주문 상태 값 저장
  const orderStatusChange = e => {
    const {value} = e.target
    setOrderStatus(value)
  }
  // 주문상태 값 저장
  const handleSelectedProduct = item => {
    setSelectedProduct(item)
  }

  const handleOrderStatus = () => {
    if (!orderStatus) return alert('주문상태를 선택해주세요.')

    if (window.confirm('주문 상태를 변경 하시겠습니까?')) {
      onUpdateOrderStatus()
    }
  }

  return (
    <CModal size='xl' visible={visible} onClose={closeModal}>
      {console.log(orderStatus, selectedProduct)}
      <CModalHeader>
        <CModalTitle>주문 상세정보</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput id={'orderId'} placeholder={'User Id'} label={'No'} value={order.orderId} readOnly disabled />
          <ModalInput
            id={'orderNumber'}
            placeholder={''}
            label={'주문번호'}
            value={order.orderNumber}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'name'} placeholder={''} label={'주문자'} value={order.name} readOnly disabled />
          <ModalInput id={'receiver'} placeholder={''} label={'수취인'} value={order.receiver} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'normalNumber'}
            placeholder={''}
            label={'일반전화번호'}
            value={order.normalNumber}
            readOnly
            disabled
          />
          <ModalInput
            id={'phoneNumber'}
            placeholder={''}
            label={'휴대전화번호'}
            value={order.phoneNumber}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'totalCount'}
            placeholder={''}
            label={'주문제품수량'}
            value={order.totalCount}
            readOnly
            disabled
          />
          <ModalInput
            id={'totalPrice'}
            placeholder={''}
            label={'총 결제금액'}
            value={isPrice(order.totalPrice)}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'orderDate'} placeholder={''} label={'주문일'} value={order.orderDate} readOnly disabled />
          <ModalInput id={'payDate'} placeholder={''} label={'결제일'} value={order.payDate} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'paymentMethod'}
            placeholder={''}
            label={'결제수단'}
            value={order.paymentMethod}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'address'} placeholder={''} label={'주소'} value={order.address} readOnly disabled />
        </CRow>
        <div className={'p-2 d-md-flex justify-content-md-end'}>
          <CFormSelect value={orderStatus} className='me-md-2 orderStatusForm' size='sm' onChange={orderStatusChange}>
            <option>주문상태</option>
            <option value='결제 대기'>결제 대기</option>
            <option value='결제 완료'>결제 완료</option>
            <option value='배송 준비중'>배송 준비중</option>
            <option value='배송중'>배송중</option>
            <option value='배송 완료'>배송 완료</option>
          </CFormSelect>
          <CButton className='me-md-2' color='success' size='sm' onClick={handleOrderStatus}>
            주문상태 변경
          </CButton>
          <CButton color='warning' size='sm'>
            송장조회
          </CButton>
        </div>
        <ProductList
          items={order.subInfos}
          columns={productListColumns}
          searchInputHidden={false}
          datePickerHidden={false}
          setSelectedProduct={handleSelectedProduct}
          className={'subInfos'}
        />
      </CModalBody>
      <CModalFooter>
        <CButton color='secondary' onClick={closeModal}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default OrderModal
