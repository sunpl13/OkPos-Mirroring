import {CCol, CFormLabel} from '@coreui/react'
import {useEffect, useState} from 'react'

const BasicFileDownloadForm = ({id, placeholder, value, label, isRequired}) => {
  // Local state
  const [fileName, setFileName] = useState('')

  // Life Cycle
  useEffect(() => {
    if (value) {
      const arSplitUrl = value.split('/') //   "/" 로 전체 url 을 나눈다
      const nArLength = arSplitUrl.length
      const arFileName = arSplitUrl[nArLength - 1] // 나누어진 배열의 맨 끝이 파일명이다
      setFileName(arFileName)
    }
  }, [value])

  const downloadFile = ({value}) => {
    const element = document.createElement('a')
    const file = new Blob([document.getElementById('input').value], {
      type: 'text/plain;charset=utf-8}',
    })
    element.href = value
    element.click()
  }

  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol className='align-items-center' style={{display: 'flex'}}>
        {value ? (
          <div className='col-form-label'>
            <a href={value} download>
              {fileName}
            </a>
          </div>
        ) : (
          <div className='col-form-label'>등록된 파일이 없습니다.</div>
        )}
      </CCol>
    </>
  )
}

export default BasicFileDownloadForm
