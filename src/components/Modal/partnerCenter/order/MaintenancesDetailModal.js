import {CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {
  generalListApplicationColumns,
  managementTargetColumns,
  solutionListColumns,
} from '../../../../utils/columns/partnerCenter/Columns'
import ManagementTarget from '../../../list/partnerCenter/ManagementTarget'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import {useEffect, useState} from 'react'
import OrderList from '../../../list/partnerCenter/orderList'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {deletedInfo} from '../../../function/partnerCenter/ApiModules'
import {EndPoint} from '../../../../dataManager/apiMapper'

const MaintenancesDetailModal = ({value, visible, setVisible, editMode, setEditMode, onClose}) => {
  const {
    id, // 리스트 id
    maintenanceNum, // 발주 번호
    certificateNum, // 사업자 번호
    representativeName, // 대표자 명
    businessName, // 상호명
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
  const [editor, setEditor] = useState('')
  const [solutionList, setSolutionList] = useState([])
  const [totalItems, setTotalItems] = useState({
    region: '전체 합계',
    catcount: 0,
    poscount: 0,
    kioskcount: 0,
    sum: 0,
    note: '',
  })
  const [vanItems, setVanItems] = useState({
    id: '기타',
    category: '',
    name: '',
    van: '',
  })
  const upDate = () => {
    if (window.confirm('유지보수 신청을 수정 하시겟습니까?')) {
      if (
        solutionList?.map(item => {
          if (!item?.category || !item?.van) return false
          return true
        })
      )
        return alert('주력 솔루션 및 VAN사 를 선택해 주세요')
      const json = JSON.stringify(
        solutionList?.map(item => {
          return {
            id: item?.id,
            category: item?.category,
            van: item?.van,
          }
        }),
      )
      deletedInfo(EndPoint.PARTNER_MAINTENANCES, id, json)
        .then(res => {
          setEditMode(!editMode)
          return alert(res)
        })
        .catch(err => console.log(err))
    }
  }

  const vanOnChange = (item, {target: {id, value}}) => {
    setSolutionList(van =>
      van.map(state => {
        if (state.id === item.id) {
          return {
            ...state,
            [id]: value,
          }
        } else {
          return state
        }
      }),
    )
  }
  useEffect(() => {
    setSolutionList(adminMaintenanceSolutionDTOs || [])
    setTotalItems({region: '전체 합계', catcount: 0, poscount: 0, kioskcount: 0, sum: 0, note: ''})
    if (adminMaintenanceStoreDTOs?.length !== 0 && visible) {
      adminMaintenanceStoreDTOs?.map(value => {
        setTotalItems(item => ({
          region: '전체 합계',
          catcount: (item.catcount += +value?.catcount),
          poscount: (item.poscount += +value?.poscount),
          kioskcount: (item.kioskcount += +value?.kioskcount),
          sum: (item.sum += +value?.sum),
          note: '',
        }))
        return value
      })
    } else if (!visible) {
    }
  }, [visible, adminMaintenanceStoreDTOs])

  return (
    <DetailModalEditModeTemplate
      title={'유지보수 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      editMode={editMode}
      setEditMode={setEditMode}
      upDate={upDate}
      onClose={onClose}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderNum'}
          placeholder={'발주 번호'}
          label={'발주 번호'}
          value={maintenanceNum}
          readOnly
          disabled
        />
        <ModalInput
          id={'businessName'}
          placeholder={'상호명'}
          label={'상호명'}
          value={businessName}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'businessNumber'}
          placeholder={'사업자 번호'}
          label={'사업자 번호'}
          value={certificateNum}
          readOnly
          disabled
        />
        <ModalInput
          id={'representativeName'}
          placeholder={'대표자 명'}
          label={'대표자 명'}
          value={representativeName}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'orderDate'}
          placeholder={'주문 일자'}
          label={'주문 일자'}
          value={createdAt}
          readOnly
          disabled
        />
        <ModalInput
          id={'phoneNumber'}
          placeholder={'휴대전화 번호'}
          label={'휴대전화 번호'}
          value={mobilePhoneNum}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'phoneNum'}
          placeholder={'사업장 전화번호'}
          label={'사업장 전화번호'}
          value={phoneNum}
          readOnly
          disabled
        />
        <ModalInput id={'email'} placeholder={'이메일'} label={'이메일'} value={email} readOnly disabled />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'businessAddress'}
          placeholder={'사업장 주소'}
          label={'사업장 주소'}
          value={address}
          readOnly
          disabled
        />
        <ModalInput
          id={'maintenanceCategory'}
          placeholder={'유지보수 신청 유형'}
          label={'유지보수 신청 유형'}
          value={maintenanceCategory}
          readOnly
          disabled
        />
      </CRow>
      <CRow className={'p-2'}>
        <OrderList
          title={'① 신청 가맹점 수'}
          items={[...(adminMaintenanceStoreDTOs || []), totalItems] || []}
          columns={generalListApplicationColumns}
          className={'orderList'}
        />
      </CRow>
      <CRow className={'p-2'}>
        <OrderList
          title={'② 주력 솔루션 및 VAN사'}
          className={'orderVanList'}
          items={[...solutionList, vanItems] || []}
          columns={solutionListColumns}
          vanOnChange={vanOnChange}
          readOnly={editMode}
          disabled={editMode}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ManagementTarget
          label={'③ 관리 대상 H/W 현황'}
          columns={managementTargetColumns}
          items={adminMaintenanceHardwareDTOs}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalQuillEditor
          label={'④ 현장 운영중인 엄무 프로세스'}
          value={operationalProcesses}
          setValue={setEditor}
          readOnly
        />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default MaintenancesDetailModal
