import {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../list/ListTemplate'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {deliveryStatusOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import DetailModalTemplate from '../DetailModalTemplate'
import NumberOfStoresList from '../../../list/maintenance/NumberOfStoresList'
import {
  generalListApplicationColumns,
  managementTargetColumns,
  solutionListColumns,
} from '../../../../utils/columns/partnerCenter/Columns'
import FlagshipSolutionList from '../../../list/maintenance/FlagshipSolutionList'
import ManagementTarget from '../../../list/maintenance/ManagementTarget'

const MaintenancesDetailModal = ({onChange, value, visible, setVisible, upDate, onDelete}) => {
  const {
    id, // 리스트 id
    maintenanceNum, // 발주 번호
    certificateNum, // 사업자 번호
    representativeName, // 대표자 명
    createdAt, // 주문일자
    mobilePhoneNum, // 휴대전화 번호
    phoneNum, // 전화번호
    email, // 이메일
    address, // 사업장 주소
    maintenanceCategory, // 유지보수 신청 유형 (원격 서비스 / 방문 서비스 A / 방문 서비스 B / 방문 서비스 C / 통합 서비스)
    adminMaintenanceHardwareDTOs, // H/W 현황 리스트
    adminMaintenanceSolutionDTOs, // 주력 솔루션 및 VAN사 리스트
    adminMaintenanceStoreDTOs, // 유지보수 신청 가맹점 수
    operationalProcesses, // 현장 운영중인 엄무 프로세스
  } = value

  //"- 발주 번호
  // - 상호명
  // - 사업자 번호
  // - 대표자 명
  // - 주문 일자
  // - 휴대전화 번호
  // - 전화번호
  // - 이메일
  // - 사업장 주소
  // - 유지보수 신청 유형 (원격 서비스 / 방문 서비스 A / 방문 서비스 B / 방문 서비스 C / 통합 서비스)
  // - 유지보수 신청 정보 리스트"

  useEffect(() => {
    if (visible) {
    }
  }, [visible])
  return (
    <DetailModalTemplate title={'유지보수 신청 상세'} visible={visible} setVisible={setVisible} notEditBtn>
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderNum'}
          placeholder={'발주 번호'}
          label={'발주 번호'}
          value={maintenanceNum}
          onChange={onChange}
          readOnly
        />
        <ModalInput
          id={'businessName'}
          placeholder={'상호명'}
          label={'상호명'}
          //value={businessName}
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
          id={'representativeName'}
          placeholder={'대표자 명'}
          label={'대표자 명'}
          value={representativeName}
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
          placeholder={'휴대전화 번호'}
          label={'휴대전화 번호'}
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
          id={'businessAddress'}
          placeholder={'사업장 주소'}
          label={'사업장 주소'}
          value={address}
          onChange={onChange}
        />
        <ModalInput
          id={'maintenanceCategory'}
          placeholder={'유지보수 신청 유형'}
          label={'유지보수 신청 유형'}
          value={maintenanceCategory}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <NumberOfStoresList
          className={'userList'}
          columns={generalListApplicationColumns}
          items={adminMaintenanceStoreDTOs}
        />
      </CRow>
      <CRow className={'p-2'}>
        <FlagshipSolutionList
          className={'userList solutionList'}
          columns={solutionListColumns}
          items={adminMaintenanceSolutionDTOs}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ManagementTarget
          className={'userList'}
          columns={managementTargetColumns}
          items={adminMaintenanceHardwareDTOs}
        />
      </CRow>
    </DetailModalTemplate>
  )
}

export default MaintenancesDetailModal
