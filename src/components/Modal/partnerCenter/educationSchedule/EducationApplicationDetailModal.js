import React, {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {CFormLabel, CRow} from '@coreui/react'
import {educationApplicationListDetailColumns} from '../../../../utils/columns/partnerCenter/Columns'
import ListTemplate from '../../../list/ListTemplate'
import DetailModalTemplate from '../DetailModalTemplate'

const EducationApplicationDetailModal = ({onChange, value, visible, setVisible, readOnly}) => {
  const {
    agencyName, // 대리점 명,
    phoneNum, // phoneNum: 대리점 연락처,
    address, // address: 대리점 주소,
    educationDate, // educationDate: 신청 교육 일자,
    applicantsNum, // applicantNum: 교육 신청 인원,
    adminApplicantDTOs, // adminApplicantDTOs: 교육 신청 인원 리스트
  } = value
  useEffect(() => {
    if (visible) {
    }
  }, [visible])
  return (
    <DetailModalTemplate title={'교육 신청서'} visible={visible} setVisible={setVisible} notEditBtn={true}>
      <CRow className={'p-2'}>
        <ModalInput
          id={'agencyName'}
          placeholder={'대리점 명'}
          label={'대리점 명'}
          value={agencyName}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'phoneNum'}
          placeholder={'대리점 연락처'}
          label={'대리점 연락처'}
          value={phoneNum}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'educationDate'}
          placeholder={'신청 교육 일자'}
          label={'신청 교육 일자'}
          value={educationDate}
          readOnly={readOnly}
          disabled={readOnly}
        />
        <ModalInput
          id={'applicantNum'}
          placeholder={'신청 인원'}
          label={'신청 인원'}
          value={applicantsNum}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'address'}
          placeholder={'대리점 주소'}
          label={'대리점 주소'}
          value={address}
          readOnly={readOnly}
          disabled={readOnly}
        />
      </CRow>
      <br />
      <CRow className={'p-2'}>
        <CFormLabel>교육 신청자 리스트</CFormLabel>
        <ListTemplate
          items={adminApplicantDTOs}
          columns={educationApplicationListDetailColumns}
          className={'userList'}
          datePickerHidden={false}
        />
      </CRow>
    </DetailModalTemplate>
  )
}

export default EducationApplicationDetailModal
