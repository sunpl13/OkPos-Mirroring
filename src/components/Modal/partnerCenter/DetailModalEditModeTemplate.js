import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useEffect, useRef} from 'react'
import styled from 'styled-components'

const DetailModalEditModeTemplate = ({
  visible,
  title,
  children,
  setVisible,
  upDate,
  onDelete,
  editMode,
  setEditMode,
  addModal,
  onClose,
}) => {
  const handleEditModeToggle = () => {
    setEditMode(!editMode)
    if (!editMode) {
      upDate()
    }
  }
  const click = e => {
    if (
      e.target.className.includes('modal') &&
      e.target.className.includes('fade') &&
      e.target.className.includes('d-block') &&
      e.target.className.includes('show')
    ) {
      return onClose()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', click)
    return () => {
      document.removeEventListener('mousedown', click)
    }
  })
  useEffect(() => {
    if (!visible) {
      setEditMode(true)
    }
  }, [visible])

  return (
    <CoreModal size='lg' visible={visible}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        <CButton
          onClick={() => {
            setEditMode ? handleEditModeToggle() : upDate()
          }}
          color={editMode ? 'primary' : 'success'}
        >
          {addModal ? '추가' : editMode ? '수정' : '저장'}
        </CButton>
        {onDelete && !addModal && (
          <CButton onClick={() => onDelete()} color={'danger'}>
            삭제
          </CButton>
        )}
        <CButton color='secondary' onClick={() => onClose()}>
          닫기
        </CButton>
      </CModalFooter>
    </CoreModal>
  )
}

export default DetailModalEditModeTemplate

const CoreModal = styled(CModal)`
  #faqwe.modal-content {
    z-index: 1100;
  }
`
