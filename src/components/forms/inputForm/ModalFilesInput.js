import {InboxOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import styled from 'styled-components'
import {CFormLabel} from '@coreui/react'
import AWS from 'aws-sdk'
import {useEffect} from 'react'
import {antdImageFormat, returnBucketNameFile} from '../../../utils/awsCustom'
import MultiFileDownloadForm from '../downloadForm/MultiFileDownloadForm'

const ModalFilesInput = ({files, label, id, disabled, fileList, setFileList, filePath, isRequired}) => {
  // files = 조회를 통해 가져온 데이터가 있는 경우
  useEffect(() => {
    if (files && files.length > 0) {
      setFileList(
        files.map((file, index) => ({
          key: index,
          uid: index,
          name: file.fileTitle ? file.fileTitle : decodeURI(file.split('/')[file.split('/').length - 1]),
          status: 'done',
          url: file.file ? antdImageFormat(file.file) : antdImageFormat(file),
        })),
      )
    }
  }, [files])

  const getFileNameFromURL = url => {
    //   "/" 로 전체 url 을 나눈다
    const splitUrl = url.split('/')
    const splitUrlLength = splitUrl.length
    // 나누어진 배열의 맨 끝이 파일명이다
    const fileName = splitUrl[splitUrlLength - 1]
    return fileName
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
  const onDelete = item => {
    setFileList(fileList.filter(file => file.uid !== item.uid))
  }

  const props = {
    name: 'file',
    multiple: true,
    disabled: disabled,
    fileList: fileList,
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
      <DivBox className={disabled}>
        <CFormLabel className={isRequired ? 'required' : ''}>{label || ''}</CFormLabel>
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

export default ModalFilesInput

const DivBox = styled.div`
  border-radius: 0.375rem;
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
