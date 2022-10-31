import React, {useState} from 'react'
import {CModal, CButton, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import {IPopUp} from '../../../pages/popup/PopUpPage'
import DeleteModalTemplate from '../DeleteModalTemplate'

interface AddProps {
  value: IPopUp
  visible: boolean
  setVisible: (state: boolean) => void
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
  onClick: () => void
  isReadOnly: boolean
  setIsReadOnly: (state: boolean) => void
}

const PopupDeatil = ({value, visible, setVisible, onChange, isReadOnly, setIsReadOnly}: AddProps) => {
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
          <CModalTitle>팝업 상세</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='No'
              placeholder='No.'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.No === -1 ? '' : value.No}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='popUpName'
              placeholder='Name'
              label='팝업 제목'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.popUpName}
            />
          </CRow>
          <CRow>
            <ModalInput
              onChange={onChange}
              id='popUpImg'
              placeholder='이미지'
              label='팝업 이미지'
              value={value.popUpImg}
              type='file'
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.No === -1 ? (
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

export default PopupDeatil
