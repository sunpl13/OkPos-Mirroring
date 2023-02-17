import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useEffect} from 'react'
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
    if (!editMode) {
      upDate()
    } else {
      setEditMode(!editMode)
    }
  }
  const click = ({target: {className}}) => {
    if (
      (className?.includes('modal') &&
        className?.includes('fade') &&
        className?.includes('d-block') &&
        className?.includes('show')) ||
      (className?.includes('btn') && className?.includes('btn-close'))
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
  }, [setEditMode, visible])

  return (
    <CModal size='lg' visible={visible}>
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
    </CModal>
  )
}

export default DetailModalEditModeTemplate
