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
    <CModal alignment='center' size='xl' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>User 안녕하세요</CModalTitle>
      </CModalHeader>
      <CModalBody className='clearfix'>
        <CImage align='center' fluid src={url} alt='' width={600} />
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
