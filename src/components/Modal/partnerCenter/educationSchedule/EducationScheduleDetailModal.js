import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DetailModalEditModeTemplate from '../DetailModalEditModeTemplate'
import {CRow} from '@coreui/react'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'

const EducationScheduleDetailModal = ({onChange, value, visible, setVisible, upDate}) => {
  const {no, title, createdAt, files, content} = value

  useEffect(() => {
    if (visible) {
    }
  }, [visible])
  return (
    <DetailModalEditModeTemplate
      title={no !== 0 ? '교육 일정 상세' : '교육 일정 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={no !== 0 ? '수정' : '추가'}
    >
      <CRow className={'p-2'}>
        <ModalInput id={'title'} placeholder={'공고 제목'} label={'공고 제목'} value={title} onChange={onChange} />
      </CRow>

      <CRow className={'p-2'}>
        {no !== 0 && (
          <ModalInput
            id={'createdAt'}
            placeholder={'등록일'}
            label={'등록일'}
            value={createdAt}
            onChange={onChange}
            readOnly={true}
            disabled={true}
          />
        )}
      </CRow>

      <CRow className={'p-2'}>
        <ModalFilesInput label={'첨부 파일'} id={'files'} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput id={'imageInput'} label={'이미지 리스트'} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalTextArrayInput id={'content'} label={'본문'} value={content} onChange={onChange} rows={10} />
      </CRow>
    </DetailModalEditModeTemplate>
  )
}

export default EducationScheduleDetailModal
