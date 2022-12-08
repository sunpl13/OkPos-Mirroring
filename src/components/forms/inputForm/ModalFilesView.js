import {PaperClipOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {CCol, CFormInput} from '@coreui/react'
import {useEffect, useState} from 'react'
import {antdImageFormat} from '../../../utils/awsCustom'

const ModalFilesView = ({fileItem}) => {
  const [fileList, setFileList] = useState([])
  useEffect(() => {
    if (fileItem && fileItem.length > 0) {
      setFileList(
        fileItem.map(path => {
          const nameArr = path.split('/')
          return {
            uid: path,
            name: nameArr[nameArr.length - 1],
            status: 'done',
            url: antdImageFormat(path),
          }
        }),
      )
    }
  }, [fileItem])

  return (
    <CCol>
      {fileList.length !== 0 ? (
        fileList.map(item => (
          <DivBox key={item.uid}>
            <PaperClipOutlined />
            <a>{item.name}</a>
          </DivBox>
        ))
      ) : (
        <CFormInput type='text' placeholder='파일이 없습니다.' disabled />
      )}
    </CCol>
  )
}

export default ModalFilesView

const DivBox = styled.div`
  display: flex;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  & a {
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
  }
`
