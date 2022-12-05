import {CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {useEffect, useState} from 'react'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'

const NoticeAddModal = ({value, visible, setVisible, upDate, onChange}) => {
  const {title, content, files, images, category} = value
  const [toggle, setToggle] = useState(true)
  const noticeOptions = [
    {key: 'DEALER', value: '딜러'},
    {key: 'AGENCY', value: '대리점'},
  ]

  useEffect(() => {
    if (visible) {
      setToggle(true)
    }
  }, [visible])
  const btnClick = () => {
    setToggle(false)
    upDate()
  }

  return (
    <CModal size='lg' visible={visible} onClose={() => toggle && upDate()}>
      <CModalHeader>
        <CModalTitle>공지사항 추가</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow className={'p-2'}>
          <ModalInput
            id={'title'}
            placeholder={'공지사항 제목'}
            label={'공지사항 제목'}
            value={title}
            onChange={onChange}
          />
          <ModalSelect
            id={'category'}
            placeholder={'카테고리를 선택해 주세요'}
            label={'카테고리'}
            options={noticeOptions}
            value={category || ''}
            onChange={onChange}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalFilesInput
            id={'files'}
            type={'file'}
            placeholder={'파일 첨부'}
            label={'파일 첨부'}
            value={files}
            onChange={onChange}
          />
        </CRow>
        <CRow className={'p-2'}>
          <ModalImageInput id='image' label='이미지 첨부' value={images} />
        </CRow>
        <CRow className={'p-2'}>
          <ModalTextArrayInput
            id='content'
            label='공지사항 본문'
            rows={15}
            value={content}
            onChange={onChange}
            text=''
          />
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color={'primary'} onClick={() => btnClick()}>
          Add
        </CButton>
        <CButton color='primary' onClick={() => setVisible(false)}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default NoticeAddModal
