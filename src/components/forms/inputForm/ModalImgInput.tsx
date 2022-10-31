import {InboxOutlined} from '@ant-design/icons'
import type {UploadProps} from 'antd'
import {message, Upload} from 'antd'

const ModalImgInput = () => {
  const {Dragger} = Upload

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: '데이터 베이스 주소',
    onChange(info) {
      const {status} = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  return (
    <Dragger {...props}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>업로드하려면 이 영역으로 파일을 클릭하거나 드래그하세요.</p>
      <p className='ant-upload-hint'>설명</p>
    </Dragger>
  )
}

export default ModalImgInput
