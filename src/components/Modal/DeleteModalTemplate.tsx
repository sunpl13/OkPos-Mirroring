import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

interface IProps {
  visible: boolean
  title: string
  children: JSX.Element
  onDelete: () => void
  setVisible: (state: boolean) => void
}

const DeleteModalTemplate = ({visible, title = '삭제 확인', children, onDelete, setVisible}: IProps) => {
  return (
    <CModal visible={visible} alignment='center'>
      <CModalHeader>
        <CModalTitle>{title}</CModalTitle>
      </CModalHeader>
      <CModalBody>{!children ? '정말 삭제하시겠습니까?' : children}</CModalBody>
      <CModalFooter>
        <CButton onClick={onDelete} color='primary'>
          확인
        </CButton>
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default DeleteModalTemplate
