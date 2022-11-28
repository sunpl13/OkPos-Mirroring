import {useState} from 'react'
import {CModal, CButton, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'

const RollingBannerDetail = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}) => {
  const [showDeleteModal, setshowDeleteModal] = useState(false)

  const userDetailEditMode = () => {
    if (!isReadOnly) {
      setIsReadOnly(true)
    } else {
      //여기에 수정 api 작성
      setIsReadOnly(false)
    }
  }
  const handleCloseModal = () => {
    userDetailEditMode()
    setVisible(false)
  }
  return (
    <>
      <CModal alignment='center' size='lg' visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>롤링배너 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='bannerId'
              placeholder='ID'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.bannerId === -1 ? '' : value.bannerId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='배너 타이틀'
              label='배너 타이틀'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.title}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='img'
              placeholder='배너 이미지'
              label='배너 이미지'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.img}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.bannerId === -1 ? (
            <CButton color='primary'>Add</CButton>
          ) : (
            <>
              <CButton color='danger' onClick={() => setshowDeleteModal(true)}>
                delete
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                Edit
              </CButton>
            </>
          )}
          <CButton color='primary' onClick={handleCloseModal}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <DeleteModalTemplate
        onDelete={() => setshowDeleteModal(false)}
        visible={showDeleteModal}
        setVisible={setshowDeleteModal}
      />
    </>
  )
}

export default RollingBannerDetail
