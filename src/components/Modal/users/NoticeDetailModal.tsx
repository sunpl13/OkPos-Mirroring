import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import React from 'react'

type Value = {
  id: number
  title: string
  content: string
  createdAt: string
  files: string
}
interface DetailProps {
  value: Value
  visible: boolean
  onChange: () => void
  upDate: () => void
}

const NoticeDetailModal = ({value, visible, onChange, upDate}: DetailProps) => {
  const {id, title, content, files} = value

  return (
    <CModal size='lg' visible={visible} onClose={() => upDate()}>
      <CModalHeader>
        <CModalTitle>id : {id} Notice Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'Notice Title'}
            label={'Notice Title'}
            value={title}
            onChange={onChange}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'files'}
            type={'file'}
            placeholder={'Notice File'}
            label={'Notice File'}
            value={files}
            onChange={onChange}
          />
        </CRow>
        <CRow>
          <CFormTextarea
            id='content'
            label=' '
            rows={15}
            value={content}
            onChange={onChange}
            text='Must be 8-20 words long.'
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => upDate()}>
          Edit
        </CButton>
        <CButton color='primary' onClick={() => upDate()}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.memo(NoticeDetailModal)
