import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalStatus from '../../forms/ModalStatus'
import {isPrice} from '../../../utils/utility'
import ListTemplate from '../../../components/list/ListTemplate'
import {productListColumns} from '../../../utils/columns/officialMall/Columns'

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
    payDate: '',
    receiver: '',
    address: '',
    normalNumber: '',
    phoneNumber: '',
    totalCount: '',
    subInfos: [],
  })

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      setOrder(value)
    }
  }, [visible])

  const closeModal = () => {
    setVisible(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={closeModal}>
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
            label={'일반번호'}
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
            id={'paymentMethod'}
            placeholder={''}
            label={'결제수단'}
            value={order.paymentMethod}
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
          <ModalInput id={'createdAt'} placeholder={''} label={'주문일'} value={order.createdAt} readOnly disabled />
          <ModalInput id={'payDate'} placeholder={''} label={'결제일'} value={order.payDate} readOnly disabled />
        </CRow>{' '}
        <CRow className={'p-2'}>
          <ModalInput id={'address'} placeholder={''} label={'주소'} value={order.address} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'invoiceNumber'}
            placeholder={''}
            label={'송장번호'}
            value={order.invoiceNumber}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalStatus id={'userStatus'} placeholder={''} label={'주문상태'} value={order.status} />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'totalCount'}
            placeholder={''}
            label={'주문제품 수'}
            value={order.totalCount}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ListTemplate
            items={order.subInfos}
            columns={productListColumns}
            searchInputHidden={false}
            datePickerHidden={false}
            className={'subInfos'}
          />
        </CRow>
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
