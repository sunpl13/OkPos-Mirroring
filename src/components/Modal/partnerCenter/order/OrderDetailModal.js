import React, {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {CCol, CFormInput, CFormLabel, CRow} from '@coreui/react'
import ListTemplate from '../../../list/ListTemplate'
import {orderListColumns} from '../../../../utils/columns/partnerCenter/Columns'
import DetailModalTemplate from '../DetailModalTemplate'
import InvoiceEditModal from './InvoiceEditModal'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import {isEmpty} from '../../../../utils/utility'

const OrderDetailModal = ({onChange, value, visible, setVisible, upDate, readOnly}) => {
  const {
    id,
    orderNum /** 발주 번호 */,
    businessName /** 상호명 */,
    representativeName /** 대표자명*/,
    createdAt /** 주문일자 */,
    certificateNum /** 사업자 번호 */,
    email /** 이메일 */,
    mobilePhoneNum /** 휴대포 번호 */,
    phoneNum /** 사업장 전화번호*/,
    address /** 사업장 주소*/,
    orderItemPartnerDTOs /** 발주 리스트  */,
    taxBillEmail /** 세금 고지서 수령 이메일 */,
    receivingMethod /** 수령 방법 */,
  } = value
  const [invoiceEditModal, setInvoiceEditModal] = useState(false)
  const [mousePos, setMousePos] = useState({})
  const [selectedItem, setSelectedItem] = useState({})
  const [orderItemList, setOrderItemList] = useState([])

  // 운송장 번호 수정 함수
  const handleInvoiceOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // 운송장 번호 수정모달
  const handleShowInvoiceEditModal = (item, {clientX, clientY}) => {
    setSelectedItem(item)
    setMousePos({x: clientX, y: clientY})
    setInvoiceEditModal(!invoiceEditModal)
  }

  // 운송장 번호 수정 API
  const handleInvoiceEditModalUpDate = async () => {
    const {id, invoiceNum} = selectedItem
    const json = JSON.stringify({
      invoiceNum: invoiceNum,
    })

    if (window.confirm('운송장 번호를 등록하시겠습니까?')) {
      console.log(id, invoiceNum)
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.PATCH,
          url: `${EndPoint.PARTNER_ORDERS}/${id}`,
          data: json,
        })
        if (!isSuccess || isEmpty(result)) {
          return alert(message)
        }
        if (code === 1000) {
          upDate(value, true)
          setOrderItemList(orderItemList.map(item => (item.id === selectedItem.id ? selectedItem : item)))
          setInvoiceEditModal(false)
          alert(message)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    setOrderItemList(orderItemPartnerDTOs)
    if (!visible) {
      setSelectedItem({})
    }
  }, [visible])

  return (
    <DetailModalTemplate
      title={'발주 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      notEditBtn={true}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'no'}
          placeholder={'No'}
          label={'No'}
          value={id}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'orderNum'}
          placeholder={'발주 번호'}
          label={'발주 번호'}
          value={orderNum}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'representativeName'}
          placeholder={'대표자 명'}
          label={'대표자 명'}
          value={representativeName}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'businessName'}
          placeholder={'상호명'}
          label={'상호명'}
          value={businessName}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'businessNumber'}
          placeholder={'사업자 번호'}
          label={'사업자 번호'}
          value={certificateNum}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'businessAddress'}
          placeholder={'사업장 주소'}
          label={'사업장 주소'}
          value={address}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderDate'}
          placeholder={'주문 일자'}
          label={'주문 일자'}
          value={createdAt}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화 번호'}
          label={'휴대전화 번호'}
          value={mobilePhoneNum}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'phoneNum'}
          placeholder={'사업장 전화번호'}
          label={'사업장 전화번호'}
          value={phoneNum}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'email'}
          placeholder={'이메일'}
          label={'이메일'}
          value={email}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'receivingMethod'}
          placeholder={'수령 방법'}
          label={'수령 방법'}
          value={receivingMethod}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'taxInvoiceEmail'}
          type={'email'}
          placeholder={'세금계산서 수령 이메일'}
          label={'세금계산서 수령 이메일'}
          value={taxBillEmail}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <CFormLabel>발주 신청 리스트</CFormLabel>
        <ListTemplate
          items={orderItemList || []}
          columns={orderListColumns}
          className={'userList'}
          datePickerHidden={false}
          itemPerPageHidden={false}
          func={handleShowInvoiceEditModal}
        />
      </CRow>
      {invoiceEditModal && (
        <InvoiceEditModal
          tabindex={2}
          title={'운송장 번호'}
          visible={invoiceEditModal}
          setVisible={setInvoiceEditModal}
          mousePos={mousePos}
          btnText={'등록'}
          upDate={handleInvoiceEditModalUpDate}
        >
          <CCol className='align-items-center' xs={'xs'} style={{display: 'flex'}}>
            <CFormInput
              id={'invoiceNum'}
              type={'text'}
              placeholder={'운송장 번호를 등록해 주세요.'}
              value={selectedItem?.invoiceNum || ''}
              onChange={handleInvoiceOnChange}
            />
          </CCol>
        </InvoiceEditModal>
      )}

      {/*
      <CRow className={'p-2'}>
        <NumberOfStoresList className={'userList'} columns={generalListApplicationColumns} items={GeneralList} />
      </CRow>
      <CRow className={'p-2'}>
        <FlagshipSolutionList className={'userList solutionList'} columns={solutionListColumns} items={SolutionList} />
      </CRow>
      <CRow className={'p-2'}>
        <ManagementTarget className={'userList'} columns={managementTargetColumns} items={SolutionList} />
      </CRow>
      */}
    </DetailModalTemplate>
  )
}

export default OrderDetailModal
