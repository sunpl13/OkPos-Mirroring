import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import React, {useEffect, useState} from 'react'

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
  setVisible: (state: boolean) => void
  onChange?: () => void
  upDate: (item: Value) => void
}

const NoticeDetailModal = ({value, visible, setVisible, upDate}: DetailProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    files: '',
  })
  useEffect(() => {
    if (visible) {
      setStateCompare(value)
    }
  }, [visible])

  const userDetailEditMode = () => {
    if (
      stateCompare.id !== value.id ||
      stateCompare.title !== value.title ||
      stateCompare.content !== value.content ||
      stateCompare.files !== value.files
    ) {
      if (window.confirm('Edit ?')) {
        upDate(stateCompare)
      }
    }
    setVisible(false)
  }
  const handleDetailModalOnChange = ({
    target: {id, value},
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setStateCompare({
      ...stateCompare,
      [id]: value,
    })
  }

  return (
    <CModal size='lg' visible={visible} onClose={() => userDetailEditMode()}>
      <CModalHeader>
        <CModalTitle>Notice Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'Notice Title'}
            label={'Notice Title'}
            value={stateCompare.title}
            onChange={handleDetailModalOnChange}
          />
        </CRow>
        <CRow>
          <CFormTextarea
            id='content'
            label=''
            rows={15}
            value={stateCompare.content}
            onChange={handleDetailModalOnChange}
            text='Must be 8-20 words long.'
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => userDetailEditMode()}>
          Edit
        </CButton>
        <CButton color='primary' onClick={() => userDetailEditMode()}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default NoticeDetailModal
