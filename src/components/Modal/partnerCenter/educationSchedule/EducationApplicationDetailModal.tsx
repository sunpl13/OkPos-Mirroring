import React, {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalTemplate from '../DetailModalTemplate'
import {CRow} from '@coreui/react'
import {educationApplicationListDetailColumns} from '../../../../utils/columns/partnerCenter/Columns'
import ListTemplate from '../../../list/ListTemplate'

type Value = {
  no: number | undefined
  distributorName: string
  distributorContact: string
  distributorAddress: string
  trainingDate: string
  trainingPersonnel: string
  applicantInformationList: Array<any>
  content: string
  createdAt: string
}
type TrainingPersonnel = {
  name: string
  email: string
  phoneNumber: string
}
interface DetailModalProps {
  onChange?: () => void
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
  upDate: () => void
  onDelete?: () => void
}

const EducationApplicationDetailModal = ({onChange, value, visible, setVisible, upDate}: DetailModalProps) => {
  const {
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

  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  return (
    <DetailModalTemplate
      title={'교육 신청 상세'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={'수정'}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'대리점 명'}
          label={'대리점 명'}
          value={distributorName}
          onChange={onChange}
        />
        <ModalInput
          id={'title'}
          placeholder={'대리점 연락처'}
          label={'대리점 연락처'}
          value={distributorContact}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'신청 교육 일자'}
          label={'신청 교육 일자'}
          value={trainingDate}
          onChange={onChange}
        />
        <ModalInput
          id={'title'}
          placeholder={'신청 인원'}
          label={'신청 인원'}
          value={trainingPersonnel}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput
          id={'title'}
          placeholder={'대리점 주소'}
          label={'대리점 주소'}
          value={distributorAddress}
          onChange={onChange}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ListTemplate
          items={applicantInformationList}
          onClick={() => console.log('asd')}
          columns={educationApplicationListDetailColumns}
          className={'userList'}
          onDelete={() => console.log('asd')}
          datePickerHidden={false}
        />
      </CRow>
    </DetailModalTemplate>
  )
}

export default EducationApplicationDetailModal
