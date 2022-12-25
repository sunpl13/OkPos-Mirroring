import {
  CButton,
  CFormInput,
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

const CancelModal = ({value, visible, setVisible, cancelList, setCanelList}) => {
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

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      setOrder(value)
    }
  }, [visible])

  const closeModal = () => {
    setOrderStatus('')
    setVisible(false)
  }

  // 함수 선언
  // Update OrderStatus
  const onUpdateOrderStatus = async (orderCancelId, orderStatus) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_CANCEL_ORDERS_STATUS,
        path: {
          orderCancelId: orderCancelId,
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

      setOrder(order => ({...order, orderStatus: orderStatus}))

      const findIndex = cancelList.findIndex(product => product.orderCancelId === orderCancelId)
      cancelList[findIndex].orderStatus = orderStatus
      setCanelList(cancelList => [...cancelList])

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

  // 주문상태 변경 함수
  const handleOrderStatus = () => {
    if (!orderStatus) return alert('주문상태를 선택해주세요.')

    onUpdateOrderStatus(order.orderCancelId, orderStatus)
    setOrderStatus('')
  }

  // 송장조회
  const handleInvoicCheck = () => {
    if (order?.invoiceNumber) {
      const {invoiceNumber} = order
      window.open('https://www.ilogen.com/web/personal/trace/' + invoiceNumber)
    } else {
      window.open('https://www.ilogen.com/web/personal/tkSearch')
    }
  }

  return (
    <CModal size='lg' visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>취소 상세정보</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'orderCancelId'}
            placeholder={'orderCancelId'}
            label={'No'}
            value={order.orderCancelId}
            readOnly
            disabled
          />
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
          <ModalInput
            id={'itemName'}
            placeholder={'제품명'}
            label={'제품명'}
            value={order.itemName}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'sender'} placeholder={''} label={'보내는이'} value={order.sender} readOnly disabled />
          <ModalInput id={'receiver'} placeholder={''} label={'수취인'} value={order.receiver} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'orderItemCount'}
            placeholder={''}
            label={'주문제품수량'}
            value={order.orderItemCount}
            readOnly
            disabled
          />
          <ModalInput id={'orderDate'} placeholder={''} label={'주문일'} value={order.orderDate} readOnly disabled />
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
          <ModalInput id={'payDate'} placeholder={''} label={'결제일'} value={order.payDate} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'orderStatus'}
            placeholder={''}
            label={'주문상태'}
            value={order.orderStatus}
            readOnly
            disabled
          />
          <ModalInput
            id={'cancelDate'}
            placeholder={''}
            label={'취소 요청일'}
            value={order.cancelDate}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'cancelPrice'}
            placeholder={''}
            label={'취소금액'}
            value={isPrice(order.cancelPrice)}
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
          <ModalInput
            id={'invoiceNumber'}
            placeholder={'송장번호'}
            label={'송장번호'}
            value={order.invoiceNumber}
            readOnly
            disabled
          />
          <CButton className='me-md-3 invoiceSearchBtn' color='warning' size='sm' onClick={handleInvoicCheck}>
            송장조회
          </CButton>
        </CRow>
        <CRow className={'p-2'}>
          <CFormTextarea
            id='cancelReason'
            placeholder={'취소 사유'}
            label='취소사유'
            rows='3'
            value={order.cancelReason}
            readOnly
            disabled
          />
        </CRow>
        <div className={'pb-2 d-md-flex justify-content-md-end'}>
          <CFormSelect value={orderStatus} className='me-md-2 orderStatusForm' size='sm' onChange={orderStatusChange}>
            <option>주문상태 선택</option>
            <option value='결제 대기'>결제 대기</option>
            <option value='결제 완료'>결제 완료</option>
            <option value='배송 준비중'>배송 준비중</option>
            <option value='배송중'>배송중</option>
            <option value='배송 완료'>배송 완료</option>
            <option value='취소 처리중'>취소 처리중</option>
            <option value='취소 완료'>취소 완료</option>
          </CFormSelect>
          <CButton className='me-md-2' color='success' size='sm' onClick={handleOrderStatus}>
            주문상태 변경
          </CButton>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color='secondary' onClick={closeModal}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default CancelModal
