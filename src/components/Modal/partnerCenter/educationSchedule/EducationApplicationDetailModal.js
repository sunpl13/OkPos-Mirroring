import React, {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalTemplate from '../DetailModalTemplate'
import {CButton, CCol, CRow} from '@coreui/react'
import {educationApplicationListDetailColumns} from '../../../../utils/columns/partnerCenter/Columns'
import ListTemplate from '../../../list/ListTemplate'

const EducationApplicationDetailModal = ({onChange, value, visible, setVisible, upDate, searchInputHidden = true}) => {
  const {
    no,
    distributorName,
    distributorContact,
    distributorAddress,
    trainingDate,
    trainingPersonnel,
    applicantInformationList,
  } = value
  //distributorName: 대리점 명,
  // distributorContact: 대리점 연락처,
  // distributorAddress: 대리점 주소,
  // trainingDate: 신청 교육 일자,
  // trainingPersonnel: 교육 신청 인원,
  // applicantInformationList: 교육 신청 인원 상세 정보
  console.log(value)
  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  return (
    <DetailModalTemplate
      title={no === 0 ? '교육 신청 추가' : '교육 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={no === 0 ? '추가' : '수정'}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'distributorName'}
          placeholder={'대리점 명'}
          label={'대리점 명'}
          value={distributorName}
          onChange={onChange}
        />
        <ModalInput
          id={'distributorContact'}
          placeholder={'대리점 연락처'}
          label={'대리점 연락처'}
          value={distributorContact}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'trainingDate'}
          placeholder={'신청 교육 일자'}
          label={'신청 교육 일자'}
          value={trainingDate}
          onChange={onChange}
        />
        <ModalInput
          id={'trainingPersonnel'}
          placeholder={'신청 인원'}
          label={'신청 인원'}
          value={trainingPersonnel}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'distributorAddress'}
          placeholder={'대리점 주소'}
          label={'대리점 주소'}
          value={distributorAddress}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <CCol>
          <CButton>인원 추가</CButton>
        </CCol>
        <ListTemplate
          items={applicantInformationList}
          onClick={() => console.log('asd')}
          columns={educationApplicationListDetailColumns}
          className={'userList'}
          onDelete={() => console.log('asd')}
          datePickerHidden={false}
          searchInputHidden={searchInputHidden}
        />
      </CRow>
    </DetailModalTemplate>
  )
}

export default EducationApplicationDetailModal
