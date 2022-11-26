import React from 'react'
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

const DetailModalTemplate = ({visible, title, children, setVisible, upDate, onDelete, btnText}) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        <CButton onClick={() => upDate()} color={'primary'}>
          {btnText || 'Not Btn Title'}
        </CButton>
        {onDelete && (
          <CButton onClick={() => onDelete()} color={'danger'}>
            삭제
          </CButton>
        )}
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DetailModalTemplate
