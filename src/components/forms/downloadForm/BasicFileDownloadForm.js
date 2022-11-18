import {CCol, CFormLabel} from '@coreui/react'

const BasicFileDownloadForm = ({id, placeholder, value, label, isRequired}) => {
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol className='align-items-center' style={{display: 'flex'}}>
        {value ? (
          <a href={value ? value : ''} download>
            파일 다운로드
          </a>
        ) : (
          <div>등록된 파일이 없습니다.</div>
        )}
      </CCol>
    </>
  )
}

export default BasicFileDownloadForm
