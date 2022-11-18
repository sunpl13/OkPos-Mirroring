import {CButton, CFormTextarea, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'

const NoticeAddModal = ({value, visible, setVisible, upDate, onChange}) => {
  const {title, content, files} = value
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
        <CModalTitle>Notice Add</CModalTitle>
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
            label=''
            rows={15}
            value={content}
            onChange={onChange}
            text='Must be 8-20 words long.'
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => btnClick()}>
          Add
        </CButton>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default NoticeAddModal
