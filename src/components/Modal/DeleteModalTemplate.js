import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'
import PropTypes from 'prop-types'

const DeleteModalTemplate = ({visible, title = '삭제 확인', children, onDelete, setVisible}) => {
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

DeleteModalTemplate.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  onDelete: PropTypes.func,
  setVisible: PropTypes.func,
}

export default DeleteModalTemplate
