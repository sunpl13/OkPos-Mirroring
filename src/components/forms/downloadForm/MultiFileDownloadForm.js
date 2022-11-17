import {CCol, CFormLabel} from '@coreui/react'
import {map} from 'lodash'

const MultiFileDownloadForm = ({id, placeholder, files, label, isRequired}) => {
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol>
        {files.length > 0
          ? files.map((file, index) => {
              return (
                <div key={index}>
                  <a key={index} href={file} download>
                    {index + 1}. 파일 다운로드
                  </a>
                </div>
              )
            })
          : '첨부파일이 없습니다.'}
      </CCol>
    </>
  )
}

export default MultiFileDownloadForm
