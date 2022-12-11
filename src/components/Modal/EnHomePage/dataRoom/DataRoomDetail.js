import {useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import CloseCheckModal from '../../CloseCheckModal'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {useDispatch} from 'react-redux'
import {isEmpty} from '../../../../utils/utility'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import ModalSelect from '../../../forms/inputForm/ModalSelect'

export const category = [
  {key: 'ALL', value: '전체'},
  {key: 'HARDWARE', value: '하드웨어'},
  {key: 'SOFTWARE', value: '소프트웨어'},
  {key: 'RENTAL', value: '렌탈'},
  {key: 'ADDITIONAL_SERVICE', value: '부가서비스'},
  {key: 'MAINTENANCE', value: '유지보수'},
]

const DataRoomDetail = ({
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
    if (isEmpty(value.category)) {
      alert('제목을 입력해주세요.')
      return false
    }
    if (isEmpty(value.title)) {
      alert('제목을 입력해주세요.')
      return false
    }
    if (isEmpty(content)) {
      alert('본문을 입력해주세요.')
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
          category: value.category,
          title: value.title,
          post: content,
          imageUrls: imgUrls,
          fileUrls: fileUrls,
        },
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.DATA_ROOM}`,
      })
      console.log(data)
      if (data.isSuccess) {
        getList()
        setshowDeleteModal(false)
        dispatch({
          type: 'SET_TOAST_STATE',
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
          id: value.dataRoomEnglishId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.DATA_ROOM}/:id/d`,
      })
      if (data.isSuccess) {
        getList()
        setshowDeleteModal(false)
        dispatch({
          type: 'SET_TOAST_STATE',
          visibleState: true,
          toastColor: 'success',
          textColor: 'white',
          text: `${data.result}`,
        })
        onClose()
      } else {
        alert(data.message)
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
          category: value.category,
          post: content,
          imageUrls: imgUrls,
          fileUrls: fileUrls,
        },
        query: {},
        path: {
          id: value.dataRoomEnglishId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.DATA_ROOM}/:id`,
      })
      if (data.isSuccess) {
        getList()
        onClose()
        setshowDeleteModal(false)
        dispatch({
          type: 'SET_TOAST_STATE',
          visibleState: true,
          toastColor: 'success',
          textColor: 'white',
          text: `${data.result}`,
        })
      } else {
        alert(data.message)
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
        dataRoomEnglishId: -1,
        title: '',
        createdAt: '',
        category: '',
        content: '',
        images: [],
        files: [],
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
      dataRoomEnglishId: -1,
      title: '',
      createdAt: '',
      category: '',
      content: '',
      images: [],
      files: [],
    })
  }
  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>Data Room 상세</CCustomModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              xs={4}
              onChange={onChange}
              id='dataRoomEnglishId'
              placeholder='ID'
              label='ID'
              readOnly={true}
              disabled={true}
              value={value.dataRoomEnglishId === -1 ? '' : value.dataRoomEnglishId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalSelect
              options={category}
              readOnly={isReadOnly}
              disabled={isReadOnly}
              onChange={onChange}
              size='sm'
              id='category'
              value={value.categoryEnglish}
              isRequired={true}
              placeholder='선택해주세요'
              label='카테고리'
            />
            <ModalInput
              onChange={onChange}
              id='dataRoomEnglishId'
              placeholder=''
              label='작성일'
              readOnly={true}
              disabled={true}
              value={value.createdAt}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='제목을 입력해주세요'
              label='제목'
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
              images={value.images}
              imgPath='english/data-room_images'
              readOnly={isReadOnly}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalFilesInput
              id='files'
              label='파일 첨부'
              files={value.files}
              disabled={isReadOnly}
              fileList={fileList}
              setFileList={setFileList}
              filePath='english/data-room_files'
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.dataRoomEnglishId === -1 ? (
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

export default DataRoomDetail
