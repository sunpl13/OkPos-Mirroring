import {PlusOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import type {RcFile, UploadProps} from 'antd/es/upload'
import type {UploadFile} from 'antd/es/upload/interface'
import React, {useState} from 'react'
import {CCol, CFormLabel, CImage, CRow} from '@coreui/react'
import styled from 'styled-components'

interface ImageInputProps {
  id: string
  label: string
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

const ModalImageInput = ({id, label}: ImageInputProps) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const handleCloseImage = () => {
    setPreviewImage('')
  }
  // TestData
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ])

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) => setFileList(newFileList)

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  )
  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span>{label || ' * '}</span>
      </CFormLabel>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <CCol>
          <PreviewImageBox className={'text-center p-2'}>
            <CImage
              rounded
              alt='example'
              onClick={() => handleCloseImage()}
              src={previewImage}
              width={300}
              height={300}
            />
          </PreviewImageBox>
        </CCol>
      )}
    </>
  )
}

export default ModalImageInput

const PreviewImageBox = styled(CCol)`
  padding: 0.5rem 0;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  & img {
    cursor: pointer;
  }
`
