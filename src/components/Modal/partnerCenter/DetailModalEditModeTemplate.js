import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

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
    if (!editMode) {
      upDate()
    }
    setEditMode(!editMode)
  }

  return (
    <CModal
      size='lg'
      visible={visible}
      onClose={() => {
        upDate()
        setVisible(false)
      }}
    >
      <CModalHeader>
        <CModalTitle>{title || 'Not Title'}</CModalTitle>
      </CModalHeader>
      <CModalBody>{children || <h1>Not Children</h1>}</CModalBody>
      <CModalFooter>
        <CButton onClick={() => handleEditModeToggle()} color={editMode ? 'success' : 'primary'}>
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

export default DetailModalEditModeTemplate
