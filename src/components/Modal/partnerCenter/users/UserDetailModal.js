import {CModalBody, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import React from 'react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import DetailModalTemplate from '../DetailModalTemplate'
import MultiFileDownloadForm from '../../../forms/downloadForm/MultiFileDownloadForm'
import BasicFileDownloadForm from '../../../forms/downloadForm/BasicFileDownloadForm'
import ObjectFilesDownloadForm from '../../../forms/downloadForm/ObjectFilesDownloadForm'

const UserDetailModal = ({value, visible, setVisible, onChange, readOnly}) => {
  const {
    address, // 사업장 주소
    businessName, // 상호명
    certificateNum, // 사업자 번호
    createdAt, // 계정 등록일
    phoneNum, // 휴대전화 번호
    status, // 계정 상태
    userName, // 사용자명
    certificateFile, // 사업자 등록증
  } = value

  const userStatus = value => {
    switch (value) {
      case 'ACTIVE':
        return '활성화'
      case 'INACTIVE':
        return '비활성화'
      case true:
        return 'success'
      default:
        return ' '
    }
  }
  return (
    <DetailModalTemplate title={'회원 상세'} visible={visible} setVisible={setVisible} notEditBtn={true}>
      <CModalBody>
        <CRow className={'pb-4'}>
          <ModalInput
            id={'userName'}
            placeholder={'사용자명'}
            label={'사용자명'}
            value={userName}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
          <ModalInput
            id={'certificateNum'}
            placeholder={'사업자 번호'}
            label={'사업자 번호'}
            value={certificateNum}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </CRow>
        <CRow className={'pb-4'}>
          <ModalInput
            id={'createdAt'}
            placeholder={'최초 등록일'}
            label={'최초 등록일'}
            value={createdAt}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
          <ModalInput
            id={'status'}
            placeholder={'계정 상태'}
            label={'계정 상태'}
            value={userStatus(status)}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </CRow>
        <CRow className={'pb-4'}>
          <ModalInput
            id={'phoneNum'}
            placeholder={'휴대전화 번호'}
            label={'휴대전화 번호'}
            value={phoneNum}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
          <br />
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
        <CRow className={'pb-2'}>
          <ModalInput
            id={'address'}
            placeholder={'사업장 주소'}
            label={'사업장 주소'}
            value={address}
            onChange={onChange}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </CRow>
        <br />
        <CRow className={'pb-2'}>
          <BasicFileDownloadForm
            id={'files'}
            label={'사업자 등록증'}
            value={certificateFile}
            readOnly={readOnly}
            disabled={readOnly}
          />
        </CRow>
      </CModalBody>
    </DetailModalTemplate>
  )
}

export default UserDetailModal
