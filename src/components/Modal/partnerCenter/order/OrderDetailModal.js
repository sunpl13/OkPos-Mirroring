import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ListTemplate from '../../../list/ListTemplate'
import {deliveryStatusOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import {orderListColumns} from '../../../../utils/columns/partnerCenter/Columns'

const OrderDetailModal = ({onChange, value, visible, setVisible, upDate, onDelete}) => {
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
  /*
  orderItemPartnerDTOs = {
    category : "POS"
    compositionPartnerDTOs : [{…}]
    id:1
    invoiceNum: "12313123"
    itemName:"포스"
    processingStatus : "COMPLETE_PAY"
    quantity : 1
    van : "adfaf"
  }
  */
  useEffect(() => {
    if (visible) {
    }
  }, [visible])
  return (
    <DetailModalEditModeTemplate
      title={'유지보수 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={'수정'}
    >
      <CRow className={'p-2'}>
        <ModalInput id={'no'} placeholder={'No'} label={'No'} value={id} onChange={onChange} readOnly disabled />
        <ModalInput
          id={'orderNum'}
          placeholder={'발주 번호'}
          label={'발주 번호'}
          value={orderNum}
          onChange={onChange}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'representativeName'}
          placeholder={'대표자명'}
          label={'대표자명'}
          value={representativeName}
          onChange={onChange}
        />
        <ModalInput
          id={'businessName'}
          placeholder={'상호명'}
          label={'상호명'}
          value={businessName}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'businessNumber'}
          placeholder={'사업자 번호'}
          label={'사업자 번호'}
          value={certificateNum}
          onChange={onChange}
        />
        <ModalInput
          id={'businessAddress'}
          placeholder={'사업장 주소'}
          label={'사업장 주소'}
          value={address}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderDate'}
          placeholder={'주문 일자'}
          label={'주문 일자'}
          value={createdAt}
          onChange={onChange}
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화'}
          label={'휴대전화'}
          value={mobilePhoneNum}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'phoneNum'}
          placeholder={'사업장 전화번호'}
          label={'사업장 전화번호'}
          value={phoneNum}
          onChange={onChange}
        />
        <ModalInput id={'email'} placeholder={'이메일'} label={'이메일'} value={email} onChange={onChange} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'receivingMethod'}
          placeholder={'수령 방법'}
          label={'수령 방법'}
          value={receivingMethod}
          onChange={onChange}
        />
        <ModalInput
          id={'taxInvoiceEmail'}
          type={'email'}
          placeholder={'세금계산서 수령 이메일'}
          label={'세금계산서 수령 이메일'}
          value={taxBillEmail}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ListTemplate
          items={orderItemPartnerDTOs || []}
          //onClick={handleShowMaterialDetailModal}
          columns={orderListColumns}
          className={'userList'}
          onDelete={onDelete}
          datePickerHidden={false}
          selectedOptions={deliveryStatusOptions}
          itemPerPageHidden={false}
        />
      </CRow>
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
    </DetailModalEditModeTemplate>
  )
}

export default OrderDetailModal
