import {InboxOutlined} from '@ant-design/icons'
import type {UploadProps} from 'antd'
import {Upload} from 'antd'
import styled from 'styled-components'
import {CFormLabel} from '@coreui/react'

interface FilesInputProps {
  value: string | object | Array<object>
  label: string
}

const ModalFilesInput = ({value, label}: FilesInputProps) => {
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: '업로드 URL',
    onChange(info) {
      const {status} = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        console.log(value)
        //message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        //message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  return (
    <>
      <DivBox>
        <CFormLabel className=' col-form-label'>{label || ''}</CFormLabel>
        <Upload.Dragger {...props}>
          <p className='ant-upload-drag-icon'>
            <InboxOutlined />
          </p>
          <p className='ant-upload-text'>업로드하려면 이 영역으로 파일을 클릭하거나 드래그하세요.</p>
          <p className='ant-upload-hint'>추가설명</p>
        </Upload.Dragger>
      </DivBox>
    </>
  )
}
const DivBox = styled.div`
  & > span {
    display: flex;
    flex-direction: column;
  }
`
export default ModalFilesInput
