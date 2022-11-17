import {CCol, CFormLabel} from '@coreui/react'
import {map} from 'lodash'

const MultiFileDownloadForm = ({id, placeholder, files, label, isRequired}) => {
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol>
        {files.length > 0 ? (
          files.map((file, index) => {
            const splitUrl = file.split('/') //   "/" 로 전체 url 을 나눈다
            const splitUrlLength = splitUrl.length
            const fileName = splitUrl[splitUrlLength - 1] // 나누어진 배열의 맨 끝이 파일명이다
            return (
              <div key={index} className='col-form-label'>
                <a key={index} href={file} download>
                  {index + 1}. {fileName}
                </a>
              </div>
            )
          })
        ) : (
          <div className='col-form-label'>등록된 파일이 없습니다.</div>
        )}
      </CCol>
    </>
  )
}

export default MultiFileDownloadForm
