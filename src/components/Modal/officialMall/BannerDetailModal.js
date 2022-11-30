import {CButton, CForm, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalImageInput from '../../forms/inputForm/ModalImageInput'
import ModalInput from '../../forms/inputForm/ModalInput'

const BannerDetailModal = ({
  item,
  onChange,
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
              placeholder={'제목'}
              label={'제목'}
              value={item.title || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'subTitle'}
              placeholder={'부제목'}
              label={'부제목'}
              value={item.subTitle || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            {isReadOnly ? (
              <CImage rounded src={item.image} alt='' width={460} height={350} />
            ) : (
              <ModalInput
                id={'image'}
                placeholder={'이미지'}
                label={'이미지'}
                value={item.image || ''}
                onChange={onChange}
                readOnly={isReadOnly}
                disabled={isReadOnly}
              />
            )}
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
