import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ListTemplate from '../../../list/ListTemplate'
import {deliveryStatusOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import NumberOfStoresList from '../../../list/maintenance/NumberOfStoresList'
import {GeneralList, SolutionList} from '../../../../utils/columns/partnerCenter/ColumnsTestData'
import {
  generalListApplicationColumns,
  solutionListColumns,
  managementTargetColumns,
} from '../../../../utils/columns/partnerCenter/Columns'
import FlagshipSolutionList from '../../../list/maintenance/FlagshipSolutionList'
import ManagementTarget from '../../../list/maintenance/ManagementTarget'

const OrderDetailModal = ({onChange, value, visible, setVisible, upDate, onDelete}) => {
  const {
    no,
    orderNo /** 발주 번호 */,
    businessName /** 상호명 */,
    representativeName /** 대표자명*/,
    orderDate /** 주문일자 */,
    businessNumber /** 사업자 번호 */,
    email /** 이메일 */,
    phoneNumber /** 휴대포 번호 */,
    homePhoneNumber /** 사업장 전화번호*/,
    businessAddress /** 사업장 주소*/,
    receive /** 수령 방법 */,
    orderList /** 발주 리스트  */,
    taxInvoiceEmail /** 세금 고지서 수령 이메일 */,
  } = value
  const orderListColumns = [
    {
      key: 'productId',
      label: '제품 번호',
      _props: {color: 'primary', className: 'no'},
    },
    {
      key: 'productImg',
      _props: {color: 'primary', className: 'productImg'},
      filter: false,
      sorter: false,
    },
    {
      key: 'productName',
      _props: {color: 'primary', className: 'productName'},
    },
    {
      key: 'deliveryStatus',
      label: '배송 현황',
      _props: {color: 'primary', className: 'deliveryStatus'},
      filter: false,
    },
    {
      key: 'deleteBtn',
      label: ' ',
      filter: false,
      sorter: false,
      _props: {color: 'primary', className: 'deleteBtn'},
    },
  ]
  useEffect(() => {
    if (visible) {
    }
  }, [visible])
  return (
    <DetailModalEditModeTemplate
      title={'발주 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={'수정'}
    >
      <CRow className={'p-2'}>
        <ModalInput id={'no'} placeholder={'No'} label={'No'} value={no} onChange={onChange} readOnly disabled />
        <ModalInput
          id={'orderNo'}
          placeholder={'발주 번호'}
          label={'발주 번호'}
          value={orderNo}
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
          value={businessNumber}
          onChange={onChange}
        />
        <ModalInput
          id={'businessAddress'}
          placeholder={'사업장 주소'}
          label={'사업장 주소'}
          value={businessAddress}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderDate'}
          placeholder={'주문 일자'}
          label={'주문 일자'}
          value={orderDate}
          onChange={onChange}
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화'}
          label={'휴대전화'}
          value={phoneNumber}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'homePhoneNumber'}
          placeholder={'사업장 전화번호'}
          label={'사업장 전화번호'}
          value={homePhoneNumber}
          onChange={onChange}
        />

        <ModalInput id={'email'} placeholder={'이메일'} label={'이메일'} value={email} onChange={onChange} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput id={'receive'} placeholder={'수령 방법'} label={'수령 방법'} value={receive} onChange={onChange} />
        <ModalInput
          id={'taxInvoiceEmail'}
          type={'email'}
          placeholder={'세금계산서 수령 이메일'}
          label={'세금계산서 수령 이메일'}
          value={taxInvoiceEmail}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ListTemplate
          items={orderList}
          //onClick={handleShowMaterialDetailModal}
          columns={orderListColumns}
          className={'userList'}
          onDelete={onDelete}
          datePickerHidden={false}
          selectedOptions={deliveryStatusOptions}
          itemPerPageHidden={false}
        />
      </CRow>
      <CRow className={'p-2'}>
        <NumberOfStoresList className={'userList'} columns={generalListApplicationColumns} items={GeneralList} />
      </CRow>
      <CRow className={'p-2'}>
        <FlagshipSolutionList className={'userList solutionList'} columns={solutionListColumns} items={SolutionList} />
      </CRow>
      <CRow className={'p-2'}>
        <ManagementTarget className={'userList'} columns={managementTargetColumns} items={SolutionList} />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default OrderDetailModal
