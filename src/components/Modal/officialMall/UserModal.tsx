import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalStatus from '../../forms/ModalStatus'

type Value = {
  id: number
  userName: string
  businessNumber: string
  createdAt: string
  status: boolean
  phoneNumber: string
  businessRegistration: string
  businessName: string
  businessAddress: string
}
interface AddProps {
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: () => void
}

const UserDetailModal = ({value, visible, setVisible, onChange}: AddProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    userName: '',
    createdAt: '',
    status: true,
    phoneNumber: '',
    businessName: '',
    businessNumber: '',
    businessRegistration: '',
    businessAddress: '',
  })

  useEffect(() => {
    if (visible) {
      setStateCompare(value)
    }
  }, [visible])

  const closeModal = () => {
    setVisible(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>회원 상세정보</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'id'}
            placeholder={'User Id'}
            label={'No'}
            value={stateCompare.id}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'userName'}
            placeholder={''}
            label={'사용자명'}
            value={stateCompare.userName}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'email'}
            placeholder={'이메일'}
            label={'이메일'}
            value={stateCompare.businessNumber}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'createdAt'}
            placeholder={'최초등록일'}
            label={'최초등록일'}
            value={stateCompare.createdAt}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'phoneNumber'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={stateCompare.phoneNumber}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'businessName'}
            placeholder={'상호명'}
            label={'상호명'}
            value={stateCompare.businessName}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessRegistration'}
            placeholder={'사업자등록번호'}
            label={'사업자등록번호'}
            value={stateCompare.businessRegistration}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessAddress'}
            placeholder={'사업장주소'}
            label={'사업장주소'}
            value={stateCompare.businessAddress}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessRegistration'}
            placeholder={'사업자등록증'}
            label={'사업자등록증'}
            value={stateCompare.businessRegistration}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalStatus
            id={'userStatus'}
            placeholder={'상태'}
            label={'상태'}
            value={stateCompare.status ? 'Activate' : 'Disabled'}
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color='danger' onClick={closeModal}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default UserDetailModal
