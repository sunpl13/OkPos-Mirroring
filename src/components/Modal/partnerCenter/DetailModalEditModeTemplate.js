import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import {useCallback, useEffect, useRef} from 'react'

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
}) => {
  let ref = useRef('')
  let element = useRef('')
  const call = useCallback(ref => {
    upDate()
  }, [])

  const handleEditModeToggle = () => {
    setEditMode(!editMode)
    if (!editMode) {
      upDate()
    }
  }
  const refClick = () => {
    //ref.current.addEventListener('click', () => console.log('fafa'))
    console.log(call)
  }
  useEffect(() => {
    if (!visible) {
      setEditMode(true)
    }

    console.log(ref.current)
  }, [visible])

  return (
    <CModal size='lg' visible={visible} ref={call} onClose={() => refClick()}>
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
        <CButton color='secondary' onClick={() => upDate()}>
          닫기
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DetailModalEditModeTemplate
