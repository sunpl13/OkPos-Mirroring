import React from 'react'
import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import styled from 'styled-components'

const OrderProductEdiModal = ({
  visible,
  title,
  children,
  setVisible,
  upDate,
  btnText,
  notEditBtn,
  mousePos,
  search,
  searchBtn,
}) => {
  const {x, y} = mousePos
  return (
    <EditModal size='sm' visible={visible} onClose={() => setVisible(false)} x={x} y={y}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        {searchBtn && (
          <CButton onClick={() => search()} color={'primary'}>
            송장 번호 입력
          </CButton>
        )}

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

export default OrderProductEdiModal

const EditModal = styled(CModal)`
  position: absolute;
  .modal-content {
    top: ${({y}) => y && `${y}px`};
    left: ${({x}) => x && `${x}px`};
    transform: translate(-220%, -130%);
  }
`
