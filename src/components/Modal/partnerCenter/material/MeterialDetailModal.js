import {useEffect} from 'react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import ModalTextArrayInput from '../../../forms/inputForm/ModalTextArrayInput'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalSelect from '../../../forms/inputForm/ModalSelect'
import {meterialOptions} from '../../../../utils/columns/partnerCenter/ColumnsSelectData'
import DetailModalTemplate from '../DetailModalTemplate'
import {CForm, CRow} from '@coreui/react'

const MeterialDetailModal = ({onChange, value, visible, setVisible, upDate}) => {
  const {no, title, content, createdAt} = value

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
          id={'category'}
          placeholder={'category'}
          label={'카테고리'}
          options={meterialOptions || []}
          value={value.category}
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
