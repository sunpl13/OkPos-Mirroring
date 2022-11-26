import {CCol, CFormLabel} from '@coreui/react'
import {map} from 'lodash'
import styled from 'styled-components'
import {antdImageFormat} from '../../../utils/awsCustom'

const MultiFileDownloadForm = ({id, placeholder, files, label, isRequired}) => {
  const downloadFile = (url, fileName) => {
    url = antdImageFormat(url)

    fetch(url, {method: 'GET'})
      .then(res => {
        return res.blob()
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        setTimeout(_ => {
          window.URL.revokeObjectURL(url)
        }, 60000)
        a.remove()
      })
      .catch(err => {
        console.error('err: ', err)
      })
  }

  //onClick={() => downloadFile(file, fileName)}

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
                <SpanStyle
                  role='link'
                  key={index}
                  href={antdImageFormat(file)}
                  onClick={() => downloadFile(file, fileName)}
                >
                  {index + 1}. {fileName}
                </SpanStyle>
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

const SpanStyle = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 8px;
  line-height: 1.5714285714285714;
  flex: auto;
  transition: all 0.3s;
  color: #1677ff !important;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
