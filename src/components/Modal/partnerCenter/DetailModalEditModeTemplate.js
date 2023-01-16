import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useEffect} from 'react'

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

  useEffect(() => {
    if (!visible) {
      setEditMode(true)
    }
  }, [visible])

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
