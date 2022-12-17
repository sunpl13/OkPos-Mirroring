import React, {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CButton, CCol, CFormLabel, CRow} from '@coreui/react'
import {educationApplicationListDetailColumns} from '../../../../utils/columns/partnerCenter/Columns'
import ListTemplate from '../../../list/ListTemplate'

const EducationApplicationDetailModal = ({onChange, value, visible, setVisible, upDate, searchInputHidden = true}) => {
  const {
    id,
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
    <DetailModalEditModeTemplate
      title={id === 0 ? '교육 신청 추가' : '교육 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={id === 0 ? '추가' : '수정'}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'agencyName'}
          placeholder={'대리점 명'}
          label={'대리점 명'}
          value={agencyName}
          onChange={onChange}
        />
        <ModalInput
          id={'phoneNum'}
          placeholder={'대리점 연락처'}
          label={'대리점 연락처'}
          value={phoneNum}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'educationDate'}
          placeholder={'신청 교육 일자'}
          label={'신청 교육 일자'}
          value={educationDate}
          onChange={onChange}
        />
        <ModalInput
          id={'applicantNum'}
          placeholder={'신청 인원'}
          label={'신청 인원'}
          value={applicantsNum}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'address'}
          placeholder={'대리점 주소'}
          label={'대리점 주소'}
          value={address}
          onChange={onChange}
        />
      </CRow>
      <br />
      <CRow className={'p-2'}>
        <CFormLabel className={'pb-0'}>교육 신청자 리스트</CFormLabel>
        <ListTemplate
          items={adminApplicantDTOs}
          onClick={() => console.log('asd')}
          columns={educationApplicationListDetailColumns}
          className={'userList'}
          onDelete={() => console.log('asd')}
          datePickerHidden={false}
          searchInputHidden={searchInputHidden}
        />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default EducationApplicationDetailModal
