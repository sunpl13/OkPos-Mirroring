import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import {meterialOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'

type Value = {
  no?: string | undefined
  userName?: string
  email?: string
  phoneNumber?: string
  text?: string | undefined
  firstRegistration?: string
  answer?: string
}

interface InquiryDetailProps {
  onClick?: () => void
  onChange?: () => void
  value?: Value
  visible: boolean
  setVisible: (state: boolean) => void
}

const MeterialLDetailModal = ({onClick, onChange, value, visible, setVisible}: InquiryDetailProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    userName: '',
    phoneNumber: '',
    email: '',
    text: '',
    firstRegistration: '',
    answer: '',
  })

  useEffect(() => {
    if (visible) {
      console.log(stateCompare, setStateCompare, value)
    }
  }, [visible])

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>자료</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'no'}
            placeholder={'No'}
            label={'No'}
            value={value?.no || ''}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalSelect
            id={'category'}
            placeholder={'category'}
            label={'카테고리'}
            value={meterialOptions || []}
            onChange={onChange}
            size={'sm'}
            readOnly
            disabled
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'제목'}
            label={'제목'}
            value={''}
            onChange={onChange}
            readOnly
            disabled
          />
        </CRow>
        <CRow>
          <ModalTextArrayInput id='userInquiry' label={'본문'} value={''} readOnly={true} rows={9} />
        </CRow>
        <CRow className={'p-2'}>
          <ModalFilesInput id={'files'} value={''} label={'첨부파일'} />
        </CRow>
        <br />
        <CForm>
          <CRow className={'p-2'}>
            <ModalInput
              id={'createdAd'}
              placeholder={'작성일'}
              label={'작성일'}
              value={''}
              onChange={onChange}
              readOnly
              disabled
            />
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton onClick={onClick} color='primary'>
          저장
        </CButton>
        <CButton color='danger' onClick={() => setVisible(false)}>
          삭제
        </CButton>
        <CButton color='danger' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default MeterialLDetailModal
