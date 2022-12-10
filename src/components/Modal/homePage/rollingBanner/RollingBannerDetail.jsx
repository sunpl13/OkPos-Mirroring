import {useState} from 'react'
import {CModal, CButton, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import DeleteModalTemplate from '../../DeleteModalTemplate'
import {isEmpty} from '../../../../utils/utility'
import {useDispatch} from 'react-redux'
import CloseCheckModal from '../../CloseCheckModal'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
const RollingBannerDetail = ({
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
      alert('배너 제목을 입력해주세요.')
      return false
    }
    if (isEmpty(content)) {
      alert('배너 내용을 입력해주세요.')
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
      const {data} = await ApiConfig.request({
        data: {
          title: value.title,
          content: content,
          imageUrls: imgUrls,
        },
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.HOME_BANNER}`,
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
          id: value.bannerId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.HOME_BANNER}/:id/d`,
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

    try {
      if (!validateCheck()) {
        return
      }
      const {data} = await ApiConfig.request({
        data: {
          title: value.title,
          content: content,
          imageUrls: imgUrls,
        },
        query: {},
        path: {
          id: value.bannerId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.HOME_BANNER}/:id`,
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
    if (!isReadOnly && value.bannerId !== -1) {
      setCloseCheckModalState(true)
    } else {
      setVisible(false)
      setIsReadOnly(true)
      setImageList([])
      setSelectedItem({
        bannerId: -1,
        title: '',
        content: '',
        imageUrls: [],
      })
    }
  }

  const onClose = () => {
    setCloseCheckModalState(false)
    setImageList([])
    setVisible(false)
    setContent('')
    setIsReadOnly(true)
    setSelectedItem({
      bannerId: -1,
      title: '',
      content: '',
      imageUrls: [],
    })
  }

  return (
    <>
      <CModal alignment='center' size='lg' visible={visible}>
        <CCustomModalHeader onClick={onCloseCheck}>롤링배너 상세</CCustomModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              xs={4}
              onChange={onChange}
              id='bannerId'
              placeholder='ID'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.bannerId === -1 ? '' : value.bannerId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='공백 포함 30자 이내로 입력해주세요.'
              label='배너 타이틀'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.title}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalQuillEditor
              id='content'
              value={content}
              isRequired={true}
              readOnly={isReadOnly}
              setValue={setContent}
              label='본문'
            />
          </CRow>
          <CRow className='pt-3'>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={iamgeList}
              setFileList={setImageList}
              images={value.imageUrls}
              imgPath='home_banner_images'
              readOnly={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.bannerId === -1 ? (
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
export default RollingBannerDetail
