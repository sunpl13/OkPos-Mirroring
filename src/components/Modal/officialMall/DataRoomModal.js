import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ModalInput from '../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../forms/inputForm/ModalSelect'
import DetailModalTemplate from './DetailModalTemplate'
import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import PropTypes from 'prop-types'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const dataRoomCategory = [
  {key: 'DRIVE', value: '드라이브'},
  {key: 'MANUAL', value: '메뉴얼'},
  {key: 'FIRMWARE', value: '펌웨어'},
  {key: 'TECH_DATA', value: '기술자료'},
  {key: 'ETC', value: '기타'},
]

const DataRoomModal = ({
  onChange,
  item,
  visible,
  setVisible,
  onUpdate,
  onDelete,
  setIsUpdate,
  isUpdate,
  setIsReadOnly,
  isReadOnly,
}) => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [fileList, setFileLst] = useState()
  const {category, dataRoomId, title, content, image, files, createdAt} = item

  // modal Title 세팅
  let modalTitle = '자료 추가'
  if (isUpdate) modalTitle = '자료 수정'
  if (isReadOnly) modalTitle = '자료 상세 내용'

  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  useEffect(() => {
    setFileLst(item.files)
  }, [item])

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
              options={dataRoomCategory}
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
              id={'files'}
              value={fileList}
              label={'첨부파일'}
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
