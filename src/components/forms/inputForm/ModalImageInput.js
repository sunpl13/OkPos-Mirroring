import {PlusOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {useState} from 'react'
import {CCol, CFormLabel, CImage, CRow} from '@coreui/react'
import styled from 'styled-components'
import S3 from 'react-aws-s3'
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const ModalImageInput = ({id, label}) => {
  window.Buffer = window.Buffer || require('buffer').Buffer
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const config = {
    bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  }
  const handleCloseImage = () => {
    setPreviewImage('')
  }

  // TestData
  const [fileList, setFileList] = useState([])

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const uploadFile = async file => {
    const ReactS3Client = new S3(config)
    console.log(ReactS3Client)
    console.log(file)
    // the name of the file uploaded is used to upload it to S3
    ReactS3Client.uploadFile(file[0], file[0].name)
      .then(data => {
        console.log(data)
      })
      .catch(err => console.error(err))
  }

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
        //action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        beforeUpload={file => {
          setFileList(fileList.concat(file))
          return false
        }}
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={({fileList}) => {
          const newFileList = fileList.slice(-1)
          setFileList(newFileList)
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <button color='primary' onClick={() => uploadFile(fileList)}>
        {' '}
        Upload to S3
      </button>
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
