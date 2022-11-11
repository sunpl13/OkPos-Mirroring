import {useEffect} from 'react'
import ModalInput from '../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../forms/inputForm/ModalSelect'
import DetailModalTemplate from './DetailModalTemplate'
import {CForm, CRow} from '@coreui/react'

const archieveCategory = [
  {key: 'DRIVE', value: '드라이브'},
  {key: 'MANUAL', value: '메뉴얼'},
  {key: 'FIRMWARE', value: '펌웨어'},
  {key: 'TECH_DATA', value: '기술자료'},
  {key: 'ETC', value: '기타'},
]

const MeterialDetailModal = ({onChange, value, visible, setVisible, upDate}) => {
  const {no, title, content, category, createdAt} = value

  useEffect(() => {
    if (visible) {
    }
  }, [visible])

  return (
    <DetailModalTemplate
      title={no !== 0 ? '자료 상세' : '자료 추가'}
      visible={visible}
      setVisible={setVisible}
      upDate={upDate}
      btnText={no !== 0 ? '수정' : '추가'}
    >
      <CRow className={'p-2'}>
        <ModalInput id={'no'} placeholder={'No'} label={'No'} value={no} onChange={onChange} readOnly disabled />

        <ModalSelect
          options={archieveCategory}
          onChange={onChange}
          size='sm'
          id='category'
          value={category}
          isRequired={true}
          placeholder='선택해주세요'
          label='카테고리'
        />
      </CRow>
      <CRow className={'p-2'}>
        <ModalInput id={'title'} placeholder={'제목'} label={'제목'} value={title} onChange={onChange} />
      </CRow>
      <CRow>
        <ModalTextArrayInput id='content' label={'본문'} value={content} onChange={onChange} rows={9} />
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
    </DetailModalTemplate>
  )
}

export default MeterialDetailModal
