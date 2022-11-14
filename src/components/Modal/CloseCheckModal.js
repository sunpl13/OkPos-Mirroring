import {CButton, CHeader, CModal, CModalBody, CModalFooter, CModalTitle} from '@coreui/react'

const CloseCheckModal = ({onClick, visible, setVisible}) => {
  return (
    <CModal visible={visible} alignment='center'>
      <CHeader>
        <CModalTitle>정말 페이지에서 나가시겠습니까?</CModalTitle>
        <CModalBody>지금 페이지를 나가시면 변경사항이 저장되지 않습니다.</CModalBody>
        <CModalFooter>
          <CButton color='danger' onClick={onClick}>
            나가기
          </CButton>
          <CButton color='primary' onClick={() => setVisible(false)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CHeader>
    </CModal>
  )
}

export default CloseCheckModal
