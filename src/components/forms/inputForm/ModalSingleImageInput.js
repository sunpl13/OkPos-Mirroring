import {message, Upload} from 'antd'
import AWS from 'aws-sdk'
import {PlusOutlined} from '@ant-design/icons'
import {returnBucketNameFile} from '../../../utils/awsCustom'
import {CCol, CFormLabel, CImage} from '@coreui/react'
import styled from 'styled-components'
import {useState} from 'react'

const ModalSingleImageInput = ({image, onChangeImage, label, id, disabled, filePath, isRequired}) => {
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      window.alert('올바른 확장자가 아닙니다 (JPG/PNG)')
    }
    const isLt10M = file.size / 1024 / 1024 < 10
    if (!isLt10M) {
      message.error('사이즈 용량 초과 (10MB)')
    }
    return isJpgOrPng && isLt10M
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
    onChangeImage(fileData.url)
  }

  // 파일 업로드
  const customReq = ({file, onError, onProgress, onSuccess}) => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    })

    const S3 = new AWS.S3()
    const fileName = file.name.replaceAll(' ', '')
    const objParams = {
      Bucket: returnBucketNameFile(filePath),
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

  // 파일 삭제
  const onDelete = () => {
    onChangeImage('')
  }

  // 업로드 버튼
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  )

  const props = {
    name: 'avatar',
    listType: 'picture-card',
    className: 'avatar-uploader',
    showUploadList: false,
    disabled: disabled,
    image: image,
    beforeUpload: beforeUpload,
    customRequest(data) {
      customReq(data)
    },
    onSuccess(data) {
      onSuccess(data)
    },
    onRemove(data) {
      onDelete(data)
    },
  }

  return (
    <>
      <CFormLabel htmlFor={`${id}Static`} className='col-sm-2 col-form-label'>
        <span className={isRequired ? 'required' : ''}>{label || ' * '}</span>
      </CFormLabel>
      <CCol className='align-items-center col-sm-10' style={{display: 'flex'}}>
        <Upload {...props}>
          {image ? (
            <img
              src={image}
              alt='avatar'
              style={{
                width: '100%',
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      </CCol>
      {image && (
        <>
          <CFormLabel className='col-sm-2 col-form-label'>
            <span>이미지 보기</span>
          </CFormLabel>
          <CCol className='align-items-center col-sm-10'>
            <CImage rounded fluid src={image} />
          </CCol>
        </>
      )}
    </>
  )
}

export default ModalSingleImageInput

const PreviewImageBox = styled(CCol)`
  padding: 0.5rem 0;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 75%;

    & img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
      max-height: 600px;
    }
  }
`
const ImageTitleBox = styled.div`
  width: 100%;
  padding: 0 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
