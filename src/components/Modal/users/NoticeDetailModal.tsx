import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import React, {useEffect, useState} from 'react'
import ModalFilesInput from '../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'

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
  onChange: () => void
  upDate: () => void
}

const NoticeDetailModal = ({value, visible, setVisible, onChange, upDate}: DetailProps) => {
  const {id, title, content, files} = value
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    if (visible) {
      setToggle(true)
    }
  }, [visible])
  const btnClick = () => {
    setToggle(false)
    upDate()
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => toggle && upDate()}>
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
          <ModalFilesInput label={'Files'} value={files} />
        </CRow>
        <CRow className={'p-2'}>
          <ModalTextArrayInput
            id='content'
            label={'Notice'}
            rows={15}
            value={content}
            onChange={onChange}
            text='Must be 8-20 words long.'
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => btnClick()}>
          Edit
        </CButton>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.memo(NoticeDetailModal)
