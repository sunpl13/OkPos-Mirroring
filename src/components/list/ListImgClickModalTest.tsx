import {CButton, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from '@coreui/react'

interface ModalTest {
  onClick: () => void
  onChange: () => void
  url: string
  visible: boolean
  setVisible: (state: boolean) => void
}

const ListImgClickModalTest = ({visible, setVisible, url}: ModalTest) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>User Detail</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CImage fluid src={url} alt='' />
      </CModalBody>
      <CModalFooter>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ListImgClickModalTest
