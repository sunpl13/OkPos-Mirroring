import {
  CButton,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import {isPrice} from '../../../utils/utility'
import {productListColumns} from '../../../utils/columns/officialMall/Columns'
import ProductList from '../../list/mall/ProductList'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'

const OrderModal = ({value, visible, setVisible, onLoadMallorderList}) => {
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
  const [reason, setReason] = useState('')
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
  const onUpdateOrderStatus = async (orderItemId, orderStatus) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_ORDERS_STATUS,
        path: {
          orderItemId: orderItemId,
        },
        query: {
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

      const findIndex = order.subInfos.findIndex(product => product.orderItemId === orderItemId)
      let tempSubInfos = order.subInfos
      tempSubInfos[findIndex].orderStatus = orderStatus
      setOrder(order => ({...order, subInfos: tempSubInfos}))

      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  const onUpdateOrderStatusReason = async (orderItemId, orderStatus, reason) => {
    console.log(orderItemId, orderStatus, reason)
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_ORDERS_STATUS,
        path: {
          orderItemId: orderItemId,
        },
        data: {
          orderStatus: orderStatus,
          reason: reason,
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

      const findIndex = order.subInfos.findIndex(product => product.orderItemId === orderItemId)
      let tempSubInfos = order.subInfos
      tempSubInfos[findIndex].orderStatus = orderStatus
      setOrder(order => ({...order, subInfos: tempSubInfos}))

      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  const onChangeReason = e => {
    const {value} = e.target
    setReason = value
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

  // 주문상태 변경 함수
  const handleOrderStatus = () => {
    if (!orderStatus) return alert('주문상태를 선택해주세요.')
    if (!selectedProduct.orderItemId) return alert('주문상품을 선택해주세요.')

    if (window.confirm('주문 상태를 변경 하시겠습니까?')) {
      if (orderStatus === '취소 요청' || orderStatus === '교환 요청') {
        onUpdateOrderStatusReason(selectedProduct.orderItemId, orderStatus, reason)
      } else {
        onUpdateOrderStatus(selectedProduct.orderItemId, orderStatus)
      }
    }
    setOrderStatus('')
    setReason('')
  }

  // 송장조회
  const handleInvoicCheck = () => {
    if (selectedProduct?.invoiceNumber) {
      const {invoiceNumber} = selectedProduct
      window.open('https://www.ilogen.com/web/personal/tkSearch/' + {invoiceNumber})
    } else {
      window.open('https://www.ilogen.com/web/personal/tkSearch')
    }
  }

  return (
    <CModal size='xl' visible={visible} onClose={closeModal}>
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
        <br />
        <ProductList
          items={order.subInfos}
          columns={productListColumns}
          searchInputHidden={false}
          datePickerHidden={false}
          setSelectedProduct={handleSelectedProduct}
          className={'subInfos'}
        />
        <div className={'pb-2 d-md-flex justify-content-md-end'}>
          <CFormSelect value={orderStatus} className='me-md-2 orderStatusForm' size='sm' onChange={orderStatusChange}>
            <option>주문상태 선택</option>
            <option value='결제 대기'>결제 대기</option>
            <option value='결제 완료'>결제 완료</option>
            <option value='배송 준비중'>배송 준비중</option>
            <option value='배송중'>배송중</option>
            <option value='배송 완료'>배송 완료</option>
            <option value='취소 요청'>취소 요청</option>
            <option value='교환 요청'>교환 요청</option>
          </CFormSelect>
          <CButton className='me-md-2' color='success' size='sm' onClick={handleOrderStatus}>
            주문상태 변경
          </CButton>
          <CButton color='warning' size='sm' onClick={handleInvoicCheck}>
            송장조회
          </CButton>
        </div>
        {orderStatus === ('취소 요청' || '교환 요청') && (
          <CFormTextarea
            id='reason'
            placeholder={'취소/교환 사유를 입력해 주세요'}
            rows='3'
            value={reason}
            onChange={onChangeReason}
          />
        )}
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
