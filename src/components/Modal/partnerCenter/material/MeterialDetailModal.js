import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import DetailModalTemplate from '../DetailModalTemplate'
import {CForm, CRow} from '@coreui/react'
import PropTypes from 'prop-types'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'

const MeterialDetailModal = ({onChange, value, visible, setVisible, upDate}) => {
  const {id, title, category, content, dataRoomFiles, dataRoomImages, createdAt} = value
  const meterialOptions = [
    {key: 'DRIVER', value: '드라이버'},
    {key: 'MANUAL', value: '메뉴얼'},
    {key: 3, value: '펌웨어'},
    {key: 4, value: '기술자료'},
    {key: 5, value: '기타'},
  ]
  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  return (
    <DetailModalTemplate
      title={id !== 0 ? '자료 상세' : '자료 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={id !== 0 ? '수정' : '추가'}
    >
      <CRow className={'p-2'}>
        <ModalInput
          id={'createdAt'}
          placeholder={'등록일'}
          label={'등록일'}
          value={createdAt}
          onChange={onChange}
          readOnly
          disabled
        />
        <ModalSelect
          id={'category'}
          placeholder={'category'}
          label={'카테고리'}
          options={meterialOptions || []}
          value={category}
          onChange={onChange}
          size={'sm'}
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput id={'title'} placeholder={'제목'} label={'제목'} value={title} onChange={onChange} />
      </CRow>
      <CRow>
        <ModalTextArrayInput id='content' label={'본문'} value={content} onChange={onChange} rows={9} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalImageInput label={'이미지'} value={dataRoomImages} />
      </CRow>
      <CRow className={'p-2'}>
        <ModalFilesInput id={'files'} value={dataRoomFiles} label={'첨부파일'} />
      </CRow>
    </DetailModalTemplate>
  )
}
MeterialDetailModal.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  upDate: PropTypes.func,
}

export default MeterialDetailModal
