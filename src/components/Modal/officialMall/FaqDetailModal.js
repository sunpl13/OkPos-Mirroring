import {
  CButton,
  CForm,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import ModalInput from '../../forms/inputForm/ModalInput'
import ModalSelect from '../../forms/inputForm/ModalSelect'

const FaqDetailModal = ({onClick, onChange, item, visible, setVisible, isUpdate}) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{modalTitle}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow className={'p-2'}>
            {(isReadOnly || isUpdate) && (
              <ModalInput id={'faqId'} placeholder={''} label={'No'} value={item.faqId || ''} readOnly disabled />
            )}
            <ModalSelect
              id={'category'}
              size={'sm'}
              placeholder={'선택'}
              label={'분류'}
              value={item.category || ''}
              options={option}
              isRequired={false}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
            ></ModalSelect>
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'title'}
              placeholder={''}
              label={'제목'}
              value={item.title || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            <CFormTextarea
              id='content'
              label='답변 내용'
              rows={9}
              value={item.content || ''}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            ></CFormTextarea>
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

export default FaqDetailModal
