import {useEffect} from 'react'
import ModalInput from '../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../forms/inputForm/ModalSelect'
import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {dataRoomCategoryOptions} from '../../../utils/categoryOptions/officailMall/categoryOptions'
import ModalImageInput from '../../forms/inputForm/ModalImageInput'
import ModalTextOnlyQuillEditor from '../../forms/inputForm/ModalTextOnlyQuillEditor'

const DataRoomModal = ({
  onChange,
  item,
  visible,
  setVisible,
  onUpdate,
  onDelete,
  fileList,
  setFileList,
  imageList,
  setImageList,
  content,
  setContent,
  setIsUpdate,
  isUpdate,
  setIsReadOnly,
  isReadOnly,
}) => {
  // Local state 선언
  const {category, dataRoomId, title, images, files, createdAt} = item

  // modal Title 세팅
  let modalTitle = '자료 추가'
  if (isUpdate) modalTitle = '자료 수정'
  if (isReadOnly) modalTitle = '자료 상세 내용'

  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  // 수정 버튼 클릭 함수
  const clickUpdateBtn = () => {
    setIsReadOnly(false)
    setIsUpdate(true)
  }

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>{modalTitle}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CRow className={'p-2'}>
            {(isReadOnly || isUpdate) && (
              <ModalInput
                id={'no'}
                placeholder={'No'}
                label={'No'}
                value={dataRoomId}
                onChange={onChange}
                readOnly
                disabled
              />
            )}
            <ModalSelect
              options={dataRoomCategoryOptions}
              onChange={onChange}
              size='sm'
              id='category'
              value={category}
              isRequired={true}
              placeholder='선택해주세요'
              label='카테고리'
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalInput
              id={'title'}
              placeholder={'제목'}
              label={'제목'}
              value={title}
              onChange={onChange}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              isRequired
            />
          </CRow>
          {(isReadOnly || isUpdate) && (
            <CRow className={'p-2'}>
              <ModalInput
                id={'createdAt'}
                placeholder={'작성일'}
                label={'작성일'}
                value={createdAt}
                readOnly
                disabled
              />
            </CRow>
          )}
          <CRow className={'p-2'}>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={imageList}
              setFileList={setImageList}
              images={images}
              isRequired={true}
              imgPath='mall/dataRoom_images'
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalTextOnlyQuillEditor
              id='content'
              value={content || ''}
              isRequired={true}
              readOnly={isReadOnly}
              setValue={setContent}
              label='본문'
              maxLength={150}
            />
          </CRow>
          <br />
          <CRow className={'p-2'}>
            <ModalFilesInput
              id={'fileList'}
              fileList={fileList}
              setFileList={setFileList}
              files={files}
              label={'첨부파일'}
              filePath={'mall/dataRoom_files'}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              isRequired
            />
          </CRow>
          <br />
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

export default DataRoomModal
