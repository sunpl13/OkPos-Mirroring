import {InboxOutlined} from '@ant-design/icons'
import type {UploadProps} from 'antd'
import {Upload} from 'antd'
import styled from 'styled-components'
import {CFormLabel} from '@coreui/react'

interface FilesInputProps {
  value: string | object | Array<object>
  label: string
  id: string
  disabled?: boolean
}

const ModalFilesInput = ({value, label, id, disabled}: FilesInputProps) => {
  const files: any = [
    {
      uid: 'rc-upload-1667393971608-62',
      lastModified: 1666338642315,
      lastModifiedDate: '2022-10-21T07:50:42.315Z',
      name: 'TestData1.jpeg',
      size: 115763,
      type: 'image/jpeg',
      percent: 0,
      originFileObj: {
        uid: 'rc-upload-16673939721608-6',
      },
      error: {
        status: 404,
        method: 'post',
        url: '업로드 URL',
      },
      status: 'success',
    },
    {
      uid: 'rc-upload-1667393971608-61',
      lastModified: 1666338642315,
      lastModifiedDate: '2022-10-21T07:50:42.315Z',
      name: 'TestData2.jpeg',
      size: 115763,
      type: 'image/jpeg',
      percent: 0,
      originFileObj: {
        uid: 'rc-upload-16673933971608-6',
      },
      error: {
        status: 404,
        method: 'post',
        url: '업로드 URL',
      },
      status: 'error',
    },
  ]
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    disabled: disabled,
    fileList: files,
    //action: '업로드 URL',
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
      <DivBox className={disabled ? 'disabled' : ''}>
        <CFormLabel className=' col-form-label'>{label || ''}</CFormLabel>
        <Upload.Dragger {...props} id={id}>
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
  &.disabled {
    background: #d8dbe0;
  }
  & .ant-upload-disabled {
    background: #d8dbe0;
    border: 0.5px dashed #b1b7c1;
    opacity: 1;
  }
  & > span {
    display: flex;
    flex-direction: column;
  }
`
export default ModalFilesInput
