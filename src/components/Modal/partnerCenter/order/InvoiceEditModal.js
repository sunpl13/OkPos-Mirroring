import React, {useEffect} from 'react'
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import styled from 'styled-components'

const InvoiceEditModal = ({visible, title, children, setVisible, upDate, btnText, notEditBtn, mousePos}) => {
  return (
    <EditModal size='sm' visible={visible} onClose={() => setVisible(false)} x={mousePos.x} y={mousePos.y}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        {!notEditBtn && (
          <CButton onClick={() => upDate()} color={'primary'}>
            {btnText || 'Not Btn Title'}
          </CButton>
        )}
        <CButton color='secondary' onClick={() => setVisible(false)}>
          닫기
        </CButton>
      </CModalFooter>
    </EditModal>
  )
}

export default InvoiceEditModal

const EditModal = styled(CModal)`
  position: absolute;
  .modal-content {
    top: ${({y}) => y && `${y}px`};
    left: ${({x}) => x && `${x}px`};
    transform: translate(-160%, -130%);
  }
`
