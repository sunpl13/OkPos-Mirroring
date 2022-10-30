import React, {useState} from 'react'
import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
type Value = {
  id: number
  title: string
  content: string
  createdAt: string
  files: string
}
interface AddProps {
  visible: boolean
  setVisible: (state: boolean) => void
  onChange?: () => void
  upDate: (item: Value) => void
}
const NoticeAddModal = ({visible, setVisible, upDate}: AddProps) => {
  const [stateCompare, setStateCompare] = useState<Value>({
    id: 0,
    title: '',
    content: '',
    createdAt: '',
    files: '',
  })

  const NoticeAddOnClick = () => {
    if (window.confirm('Add ? ')) {
      upDate(stateCompare)
    }
    setStateCompare({
      id: 0,
      title: '',
      content: '',
      createdAt: '',
      files: '',
    })
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
    NoticeAddOnClick()
    setVisible(false)
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => handleCloseModal()}>
      <CModalHeader>
        <CModalTitle>Notice Add</CModalTitle>
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
        <CRow className={'p-2'}>
          <ModalInput
            id={'files'}
            type={'file'}
            placeholder={'Notice File'}
            label={'Notice File'}
            value={stateCompare.files}
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
        <CButton color={'primary'} onClick={() => NoticeAddOnClick()}>
          Add
        </CButton>
        <CButton color='primary' onClick={() => handleCloseModal()}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default NoticeAddModal
