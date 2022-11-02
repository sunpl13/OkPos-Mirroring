import {CButton, CForm, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import {useEffect, useState} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import {meterialOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'

type Value = {
  no: number | undefined
  title: string
  content: string
  category: object
  createdAt: string
}

interface InquiryDetailProps {
  onClick?: () => void
  onChange?: () => void
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
}

const MeterialDetailModal = ({onClick, onChange, value, visible, setVisible}: InquiryDetailProps) => {
  const {no, title, content, createdAt} = value
  const [stateCompare, setStateCompare] = useState<Value>({
    no: 0,
    title: '',
    content: '',
    createdAt: '',
    category: {key: 0, value: ''},
  })
  const [editMode, setEditMode] = useState(false)
  const onClickEditMode = () => {
    setEditMode(!editMode)
    if (false && onClick !== undefined) {
    }
  }
  useEffect(() => {
    if (visible) {
      console.log(stateCompare, setStateCompare, value)
    }
  }, [visible])

  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>자료</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'no'}
            placeholder={'No'}
            label={'No'}
            value={no || ''}
            onChange={onChange}
            readOnly
            disabled
          />
          <ModalSelect
            id={'category'}
            placeholder={'category'}
            label={'카테고리'}
            value={meterialOptions || []}
            onChange={onChange}
            size={'sm'}
            readOnly={!editMode}
            disabled={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'제목'}
            label={'제목'}
            value={title || ''}
            onChange={onChange}
            readOnly={!editMode}
            disabled={!editMode}
          />
        </CRow>
        <CRow>
          <ModalTextArrayInput
            id='content'
            label={'본문'}
            value={content}
            onChange={onChange}
            rows={9}
            readOnly={!editMode}
            disabled={!editMode}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalFilesInput id={'files'} value={''} label={'첨부파일'} />
        </CRow>
        <br />
        <CForm>
          <CRow className={'p-2'}>
            <ModalInput id={'createdAd'} placeholder={'작성일'} label={'작성일'} value={createdAt} readOnly disabled />
          </CRow>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton onClick={onClickEditMode} color={editMode ? 'success' : 'primary'}>
          수정
        </CButton>
        <CButton color='danger' onClick={() => setVisible(false)}>
          삭제
        </CButton>
        <CButton color='danger' onClick={() => setVisible(false)}>
          취소
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default MeterialDetailModal
