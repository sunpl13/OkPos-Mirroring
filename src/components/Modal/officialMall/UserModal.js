import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalStatus from '../../forms/ModalStatus'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import BasicFileDownloadForm from '../../forms/downloadForm/BasicFileDownloadForm'
import {isEmpty} from '../../../utils/utility'

const UserDetailModal = ({value, visible, setVisible, onChange}) => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [user, setUser] = useState({
    userId: 0,
    name: '',
    email: '',
    createdAt: '',
    status: '',
    phoneNumber: '',
    businessName: '',
    businessRegistration: '',
    businessNumber: '',
    businessAddress: '',
  })

  // API 통신 함수
  const onloadMallUser = async value => {
    const {userId} = value
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {userId},
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_USER,
      })
      if (!data?.data?.isSuccess || isEmpty(data?.data?.result)) {
        console.log('onloadMallUser error')
        if (data?.data?.code === 2014) {
          navigate('/login')
        } else {
          alert(data?.data?.message)
        }
        return
      }
      setUser(data.data.result)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      onloadMallUser(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            value={value.no}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'userName'}
            placeholder={''}
            label={'이름'}
            value={user.name}
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
            value={user.email}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'createdAt'}
            placeholder={'최초등록일'}
            label={'최초등록일'}
            value={user.createdAt}
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
            value={user.phoneNumber}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalInput
            id={'businessName'}
            placeholder={'상호명'}
            label={'상호명'}
            value={user.businessName}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessNumber'}
            placeholder={'사업자등록번호'}
            label={'사업자등록번호'}
            value={user.businessNumber}
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
            value={user.businessAddress}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <BasicFileDownloadForm
            id={'businessRegistration'}
            placeholder={'사업자등록증'}
            label={'사업자등록증'}
            value={user.businessRegistration || ''}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalStatus id={'userStatus'} placeholder={'상태'} label={'상태'} value={user.status} />
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

export default UserDetailModal
