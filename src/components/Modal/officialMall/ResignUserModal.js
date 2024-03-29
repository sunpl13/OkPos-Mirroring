import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalStatus from '../../forms/ModalStatus'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import BasicFileDownloadForm from '../../forms/downloadForm/BasicFileDownloadForm'

const UserDetailModal = ({value, visible, setVisible}) => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [resignUser, setResignUser] = useState({
    userId: 2,
    name: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    status: '',
    phoneNumber: '',
    resignReason: '',
    businessName: '',
    businessRegistration: '',
    businessNumber: '',
    businessAddress: '',
  })

  // API 통신 함수
  const onloadMallResignUser = async value => {
    const {userId} = value
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {userId},
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_RESIGNUSER,
      })
      if (!data?.data?.isSuccess || isEmpty(data?.data?.result)) {
        console.log('onloadMallResignUser error')
        if (data?.data?.code === 2014) {
          navigate('/login')
        } else {
          alert(data?.data?.message)
        }
        return
      }
      setResignUser(data.data.result)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    if (visible) {
      onloadMallResignUser(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const closeModal = () => {
    setVisible(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={closeModal}>
      <CModalHeader>
        <CModalTitle>탈퇴회원 상세정보</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput id={'id'} placeholder={'User Id'} label={'No'} value={value.no} readOnly disabled />
          <ModalInput id={'userName'} placeholder={'이름'} label={'이름'} value={resignUser.name} readOnly disabled />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput id={'email'} placeholder={'이메일'} label={'이메일'} value={resignUser.email} readOnly disabled />
          <ModalInput
            id={'createdAt'}
            placeholder={'최초등록일'}
            label={'최초등록일'}
            value={resignUser.createdAt}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'phoneNumber'}
            placeholder={'휴대전화번호'}
            label={'휴대전화번호'}
            value={resignUser.phoneNumber}
            readOnly
            disabled
          />
          <ModalInput
            id={'businessName'}
            placeholder={'상호명'}
            label={'상호명'}
            value={resignUser.businessName}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'updatedAt'}
            placeholder={'계정탈퇴일'}
            label={'계정탈퇴일'}
            value={resignUser.updatedAt}
            readOnly
            disabled
          />
          <ModalInput
            id={'businessNumber'}
            placeholder={'사업자등록번호'}
            label={'사업자등록번호'}
            value={resignUser.businessNumber}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'businessAddress'}
            placeholder={'사업장주소'}
            label={'사업장주소'}
            value={resignUser.businessAddress}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <BasicFileDownloadForm
            id={'businessRegistration'}
            placeholder={'사업자등록증'}
            label={'사업자등록증'}
            value={resignUser.businessRegistration}
          />
        </CRow>

        <CRow className={'p-2'}>
          {resignUser?.resignReason.length < 20 ? (
            <ModalInput
              id={'resignReason'}
              placeholder={'탈퇴사유'}
              label={'탈퇴사유'}
              value={resignUser.resignReason}
              readOnly
              disabled
            />
          ) : (
            <CFormTextarea
              id={'resignReason'}
              placeholder={'탈퇴사유'}
              label={'탈퇴사유'}
              value={resignUser.resignReason}
              rows='4'
              readOnly
              disabled
            />
          )}
        </CRow>
        <CRow className={'p-2'}>
          <ModalStatus id={'userStatus'} placeholder={'상태'} label={'상태'} value={resignUser.status} />
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
