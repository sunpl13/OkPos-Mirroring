import {InboxOutlined} from '@ant-design/icons'
import {Upload} from 'antd'
import styled from 'styled-components'
import {CFormLabel} from '@coreui/react'
import {v1} from 'uuid'
import AWS from 'aws-sdk'
import {useEffect} from 'react'
const ModalFilesInput = ({files, label, id, disabled, fileList, setFileList}) => {
  useEffect(() => {
    if (files && files.length > 0) {
      setFileList(
        files.map(path => ({
          uid: path,
          name: path,
          status: 'done',
          url: `https://${process.env.REACT_APP_AWS_BUCKET_NAME}.s3.${process.env.REACT_APP_AWS_REGION}.amazonaws.com/${path}`,
        })),
      )
    }
  }, [files])

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
      Bucket: `${process.env.REACT_APP_AWS_BUCKET_NAME}/test`,
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

  const onDelete = item => {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    })

    const S3 = new AWS.S3()

    const objParams = {
      Bucket: `${process.env.REACT_APP_AWS_BUCKET_NAME}`,
      Key: item.uid,
    }

    S3.deleteObject(objParams, (err, data) => {
      if (err) {
        setFileList(
          fileList.map(file => {
            if (file.uid === item.uid) {
              return {...file, status: 'error'}
            } else {
              return file
            }
          }),
        )
      }
      setFileList(fileList.filter(file => file.uid !== item.uid))
    })
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
