import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import React, {useState} from 'react'

type Value = {
  id: number
  title: string
  content: string
  createdAt: string
  files: string
}
interface AddProps {
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
  onChange?: () => void
  upDate: (item: Value) => void
}

const NoticeDetailModal = ({value, visible, setVisible, upDate}: AddProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    files: '',
  })

  const userDetailEditMode = () => {
    console.log(stateCompare, value)
    if (
      stateCompare.id !== value.id ||
      stateCompare.title !== value.title ||
      stateCompare.content !== value.content ||
      stateCompare.files !== value.files
    ) {
      if (window.confirm(value.id === 0 ? 'Add ? ' : 'Edit ?')) {
        upDate(stateCompare)
      }
    }
  }
  const handleDetailModalOnChange = ({
    target: {id, value},
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setStateCompare({
      ...stateCompare,
      [id]: value,
    })
  }

  //
  const handleCloseModal = () => {
    userDetailEditMode()
    setVisible(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => handleCloseModal()}>
      <CModalHeader>
        <CModalTitle>Notice {value.id === 0 ? 'Add' : 'Detail'}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'Notice Title'}
            label={'Notice Title'}
            value={value.title}
            onChange={handleDetailModalOnChange}
          />
        </CRow>
        <CRow>
          <CFormTextarea
            id='content'
            label=''
            rows={15}
            value={value.content}
            onChange={handleDetailModalOnChange}
            text='Must be 8-20 words long.'
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => userDetailEditMode()}>
          {value.id === 0 ? 'Add' : 'Edit'}
        </CButton>
        <CButton color='primary' onClick={() => handleCloseModal()}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default NoticeDetailModal
