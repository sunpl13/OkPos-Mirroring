import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useState} from 'react'

const DetailModalEditModeTemplate = ({
  visible,
  title,
  children,
  setVisible,
  upDate,
  onDelete,
  btnText,
  editMode,
  setEditMode,
}) => {
  const handleEditModeToggle = () => {
    setEditMode(!editMode)
    if (!editMode) {
      upDate()
    }
  }
  const cancel = event => {
    setVisible(false)
    //event.stopPropagation()
  }
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        <CButton
          onClick={() => {
            setEditMode ? handleEditModeToggle() : upDate()
          }}
          color={editMode ? 'success' : 'primary'}
        >
          {btnText || 'Not Btn Title'}
        </CButton>
        {onDelete && (
          <CButton onClick={() => onDelete()} color={'danger'}>
            삭제
          </CButton>
        )}
        <CButton color='secondary' onClick={cancel}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DetailModalEditModeTemplate
