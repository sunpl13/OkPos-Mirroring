import {CButton, CForm, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalSingleImageInput from '../../forms/inputForm/ModalSingleImageInput'
import ModalInput from '../../forms/inputForm/ModalInput'

const BannerDetailModal = ({
  item,
  onChange,
  onChangeImage,
  onUpdate,
  onDelete,
  visible,
  setVisible,
  isReadOnly,
  setIsReadOnly,
  isUpdate,
  setIsUpdate,
}) => {
  const clickUpdateBtn = () => {
    setIsReadOnly(false)
    setIsUpdate(true)
  }

  // modal Title 세팅
  let modalTitle = '배너 추가'
  if (isUpdate) modalTitle = '배너 수정'
  if (isReadOnly) modalTitle = '배너 상세 내용'

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{modalTitle}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow className={'p-2'}>
            {(isReadOnly || isUpdate) && (
              <ModalInput id={'bannerId'} placeholder={''} label={'No'} value={item.bannerId || ''} readOnly disabled />
            )}
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'title'}
              placeholder={'배너 타이틀'}
              label={'배너 타이틀'}
              value={item.title || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'subTitle'}
              placeholder={'서브 타이틀'}
              label={'서브 타이틀'}
              value={item.subTitle || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              isRequired
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalSingleImageInput
              id={'image'}
              placeholder={'이미지'}
              label={'이미지'}
              image={item.image || ''}
              onChangeImage={onChangeImage}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              isRequired
            />
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        {!isReadOnly && !isUpdate && (
          <CButton onClick={onUpdate} color='primary'>
            추가
          </CButton>
        )}
        {isUpdate && (
          <CButton onClick={onUpdate} color='primary'>
            저장
          </CButton>
        )}
        {isReadOnly && (
          <>
            <CButton color={isReadOnly ? 'primary' : 'success'} onClick={clickUpdateBtn}>
              수정
            </CButton>
            <CButton onClick={onDelete} color='danger'>
              삭제
            </CButton>
          </>
        )}
        <CButton color='secondary' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default BannerDetailModal
