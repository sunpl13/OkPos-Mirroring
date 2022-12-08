import {PlusOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import {useEffect, useState} from 'react'
import {CCol, CFormLabel, CImage} from '@coreui/react'
import styled from 'styled-components'
import AWS from 'aws-sdk'
import {antdImageFormat, returnBucketName} from '../../../utils/awsCustom'

const getBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

const ModalImageInput = ({images, id, label, fileList, setFileList, imgPath, readOnly, oneSheet = false}) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')

  useEffect(() => {
    if (images && images.length > 0) {
      setFileList(
        images.map(path => ({
          uid: path,
          name: decodeURI(path.split('/')[path.split('/').length - 1]),
          status: 'done',
          url: antdImageFormat(path),
        })),
      )
    }
  }, [images, setFileList])

  const handleCloseImage = () => {
    setPreviewImage('')
  }

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }

    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const onSuccess = successData => {
    const httpRequest = successData.request.httpRequest
    const file = httpRequest.body
    const {protocol, host} = httpRequest.endpoint

    const fileData = {
      uid: successData.request.params.Key,
      name: file.name,
      status: 'done',
      url: `${protocol}//${host}${httpRequest.path}`,
    }

    setFileList([...fileList, fileData])
  }

  const customReq = ({file, onError, onProgress, onSuccess}) => {
    if (oneSheet && fileList.length === 1) {
      alert('이미지는 한장만 등록 가능합니다!')
      return
    }
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    })

    const S3 = new AWS.S3()
    const fileName = file.name.replaceAll(' ', '')

    const objParams = {
      Bucket: returnBucketName(imgPath),
      Key: fileName,
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

  const onDelete = item => {
    setFileList(fileList.filter(file => file.uid !== item.uid))
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
        onRemove={data => onDelete(data)}
        customRequest={reqData => customReq(reqData)}
        disabled={readOnly}
      >
        {fileList?.length >= 8 ? null : uploadButton}
      </Upload>

      {previewImage && (
        <CCol>
          <CFormLabel className='col-form-label'>
            <span>{previewTitle || ''}</span>
          </CFormLabel>
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
