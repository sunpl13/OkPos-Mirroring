import {useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton, CFormLabel, CFormTextarea} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import CloseCheckModal from '../../CloseCheckModal'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {useDispatch} from 'react-redux'
import {isEmpty} from '../../../../utils/utility'
import moment from 'moment'
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
  const [showDeleteModal, setshowDeleteModal] = useState(false)
  const [closeCheckModalState, setCloseCheckModalState] = useState(false)
  const [iamgeList, setImageList] = useState([])
  const [fileList, setFileList] = useState([])
  const dispatch = useDispatch()
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
    if (isEmpty(content)) {
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
        setshowDeleteModal(false)
        dispatch({
          type: 'set',
          visibleState: true,
          toastColor: 'success',
          textColor: 'white',
          text: '공지가 정상적으로 생성 되었습니다.',
        })
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
        setshowDeleteModal(false)
        dispatch({type: 'set', visibleState: true, toastColor: 'success', textColor: 'white', text: `${data.result}`})
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
        setshowDeleteModal(false)
        dispatch({type: 'set', visibleState: true, toastColor: 'success', textColor: 'white', text: `${data.result}`})
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.recruitmentId !== -1) {
      setCloseCheckModalState(true)
    } else {
      setVisible(false)
      setIsReadOnly(true)
      setImageList([])
      setFileList([])
      setSelectedItem({
        noticeId: -1,
        title: '',
        createdAt: '',
        content: '',
        imageUrls: [],
        fileUrls: [],
      })
    }
  }

  const onClose = () => {
    setCloseCheckModalState(false)
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
  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>공지 상세</CCustomModalHeader>
        <CModalBody>
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
            {/* <CFormLabel className='required'>공지 본문</CFormLabel>
            <CFormTextarea
              placeholder='공지 본문'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              value={value.content}
              rows={15}
              id='content'
            /> */}
          </CRow>
          <CRow className='mb-3 pt-3'>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={iamgeList}
              setFileList={setImageList}
              images={value.imageUrls}
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
              <CButton color='danger' onClick={() => setshowDeleteModal(true)}>
                삭제
              </CButton>
              <CButton color={isReadOnly ? 'primary' : 'success'} onClick={userDetailEditMode}>
                수정
              </CButton>
            </>
          )}
          <CButton color='primary' onClick={onCloseCheck}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
      <DeleteModalTemplate onDelete={onDelete} visible={showDeleteModal} setVisible={setshowDeleteModal} />
      <CloseCheckModal onClick={onClose} visible={closeCheckModalState} setVisible={setCloseCheckModalState} />
    </>
  )
}

export default NoticeDetail
