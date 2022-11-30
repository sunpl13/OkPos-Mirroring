import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../forms/inputForm/ModalSelect'
import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {dataRoomCategoryOptions} from '../../../utils/categoryOptions/officailMall/categoryOptions'

const DataRoomModal = ({
  onChange,
  item,
  options,
  visible,
  setVisible,
  onUpdate,
  onDelete,
  fileList,
  setFileList,
  setIsUpdate,
  isUpdate,
  setIsReadOnly,
  isReadOnly,
}) => {
  // Local state 선언
  const {category, dataRoomId, title, content, image, files, createdAt} = item

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
            />
          </CRow>
          <CRow className={'p-2'}>
            {(isReadOnly || isUpdate) && (
              <ModalInput
                id={'createdAt'}
                placeholder={'작성일'}
                label={'작성일'}
                value={createdAt}
                readOnly
                disabled
              />
            )}
          </CRow>
          <CRow className={'p-2'}>
            <ModalTextArrayInput
              id='content'
              label={'본문'}
              value={content}
              onChange={onChange}
              rows={9}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className={'p-2'}>
            <ModalFilesInput
              id={'fileList'}
              fileList={fileList}
              setFileList={setFileList}
              files={files}
              label={'첨부파일'}
              filePath={'mall/dataroom'}
              readOnly={isReadOnly}
              disabled={isReadOnly}
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
