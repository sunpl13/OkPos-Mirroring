import React from 'react'
import {CModal, CModalBody, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import {IPopUp} from '../../../pages/popup/PopUpPage'

interface AddProps {
  readOnly: boolean
  value?: IPopUp
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const PopupDeatil = ({value, visible, setVisible, readOnly, onChange}: AddProps) => {
  return (
    <CModal alignment='center' size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>팝업 상세</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className='mb-3'>
          <ModalInput onChange={onChange} id='No' placeholder='No.' label='No' value={value?.No} readOnly={readOnly} />
        </CRow>
        <CRow className='mb-3'>
          <ModalInput
            onChange={onChange}
            id='Name'
            placeholder='Name'
            label='팝업 제목'
            value={value?.popUpName}
            readOnly={true}
          />
        </CRow>
        <CRow>
          <ModalInput
            onChange={onChange}
            id='이미지'
            placeholder='이미지'
            label='팝업 이미지'
            value={value?.popUpImg}
            readOnly={true}
            type='file'
          />
        </CRow>
      </CModalBody>
    </CModal>
  )
}

export default PopupDeatil
