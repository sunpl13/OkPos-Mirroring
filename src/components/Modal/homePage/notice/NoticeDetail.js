import {useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {useDispatch} from 'react-redux'
import {isEmpty} from '../../../../utils/utility'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'

const NoticeDetail = ({
  getList,
  value,
  visible,
  setSelectedItem,
  setContent,
  content,
  setVisible,
  onChange,
  isReadOnly,
  setIsReadOnly,
}) => {
  const [iamgeList, setImageList] = useState([])
  const [fileList, setFileList] = useState([])
  const userDetailEditMode = () => {
    if (!isReadOnly) {
      onUpdate()
    } else {
      setIsReadOnly(false)
    }
  }

  const validateCheck = () => {
    if (isEmpty(value.title)) {
      alert('공지 제목을 입력해주세요.')
      return false
    }
    if (isEmpty(content) || content === '<p><br></p>') {
      alert('공지 내용을 입력해주세요.')
      return false
    }

    return true
  }

  const onCreate = async () => {
    try {
      if (!validateCheck()) {
        return
      }
      const imgUrls = sendImageUrlFormat(iamgeList)
      const fileUrls = sendImageUrlFormat(fileList)
      const {data} = await ApiConfig.request({
        data: {
          title: value.title,
          content: content,
          imageUrls: imgUrls,
          fileUrls: fileUrls,
        },
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.NOTICE}`,
      })
      console.log(data)
      if (data.isSuccess) {
        getList()
        alert('공지가 정상적으로 생성 되었습니다.')
        onClose()
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onDelete = async () => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          id: value.noticeId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.NOTICE}/:id/d`,
      })
      if (data.isSuccess) {
        getList()
        alert(data.result)
        onClose()
      }
    } catch (error) {
      alert(error)
    }
  }

  const onUpdate = async () => {
    const imgUrls = sendImageUrlFormat(iamgeList)
    const fileUrls = sendImageUrlFormat(fileList)

    try {
      if (!validateCheck()) {
        return
      }
      const {data} = await ApiConfig.request({
        data: {
          title: value.title,
          content: content,
          imageUrls: imgUrls,
          fileUrls: fileUrls,
        },
        query: {},
        path: {
          id: value.noticeId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.NOTICE}/:id`,
      })
      if (data.isSuccess) {
        getList()
        onClose()
        alert(data.result)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.noticeId !== -1) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n 지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        onClose()
      }
    } else {
      onClose()
    }
  }

  const onClose = () => {
    setImageList([])
    setFileList([])
    setVisible(false)
    setContent('')
    setIsReadOnly(true)
    setSelectedItem({
      noticeId: -1,
      title: '',
      createdAt: '',
      content: '',
      imageUrls: [],
      fileUrls: [],
    })
  }

  const onDeleteConfilm = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDelete()
    }
  }

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>공지 상세</CCustomModalHeader>
        <CModalBody className='modal-scroll'>
          <CRow className='mb-3'>
            <ModalInput
              xs={4}
              onChange={onChange}
              id='noticeId'
              placeholder='ID'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.noticeId === -1 ? '' : value.noticeId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='공지 제목을 입력해주세요'
              label='공지 제목'
              value={value.title}
              isRequired={true}
              readOnly={isReadOnly}
              disabled={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalQuillEditor
              id='content'
              value={content}
              isRequired={true}
              readOnly={isReadOnly}
              setValue={setContent}
              label='공지 본문'
            />
          </CRow>
          <CRow className='mb-3 pt-3'>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={iamgeList}
              setFileList={setImageList}
              images={value?.imageUrls}
              imgPath='notice_images'
              readOnly={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalFilesInput
              id='files'
              label='파일 첨부'
              files={value.fileUrls}
              disabled={isReadOnly}
              fileList={fileList}
              setFileList={setFileList}
              filePath='notice_files'
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.noticeId === -1 ? (
            <CButton color='primary' onClick={onCreate}>
              추가
            </CButton>
          ) : (
            <>
              <CButton color='danger' onClick={onDeleteConfilm}>
                삭제
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                {isReadOnly ? '수정' : '저장'}
              </CButton>
            </>
          )}
          <CButton color='secondary' onClick={onCloseCheck}>
            취소
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default NoticeDetail
