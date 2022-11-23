import {PlusOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {useState} from 'react'
import {CCol, CFormLabel, CImage, CRow} from '@coreui/react'
import styled from 'styled-components'
import {v1} from 'uuid'
import AWS from 'aws-sdk'
const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const ModalImageInput = ({id, label}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

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

  const onSuccess = successData => {
    const file = successData.request.httpRequest.body
    const endPoint = successData.request.httpRequest.endpoint

    const fileData = {
      uid: successData.request.params.Key,
      name: file.name,
      status: 'done',
      url: `${endPoint.protocol}${endPoint.host}${successData.request.httpRequest.path}`,
    }
    setFileList([...fileList, fileData])
  }

  const customReq = ({file, onError, onProgress, onSuccess}) => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    })

    const S3 = new AWS.S3()
    const objParams = {
      Bucket: `${process.env.REACT_APP_AWS_BUCKET_NAME}/images`,
      Key: `${v1().toString().replace('-', '')}.${file.type.split('/')[1]}`,
      Body: file,
      ContentType: file.type, // TODO: You should set content-type because AWS SDK will not automatically set file MIME
    }

    const upload = S3.putObject(objParams)
      .on('httpUploadProgress', ({loaded, total}) => onProgress({percent: (loaded / total) * 100}))
      .promise()
    upload.then(
      function (data) {
        onSuccess(data.$response)
      },
      function (error) {
        onError()
        console.log(error.code)
        console.log(error.message)
      },
    )
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
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onSuccess={data => onSuccess(data)}
        customRequest={reqData => customReq(reqData)}
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
