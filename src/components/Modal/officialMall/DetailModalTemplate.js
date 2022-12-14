import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useEffect, useState} from 'react'

const DetailModalTemplate = ({visible, title, children, setVisible, upDate, btnText}) => {
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    if (visible) {
      setToggle(true)
    }
  }, [visible])
  const editBtnClick = () => {
    setToggle(false)
    upDate()
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => toggle && upDate()}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        <CButton onClick={() => editBtnClick()} color={'primary'}>
          {btnText || 'Not Btn Title'}
        </CButton>
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DetailModalTemplate
