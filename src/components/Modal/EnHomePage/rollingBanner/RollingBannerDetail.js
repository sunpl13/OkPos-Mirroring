import {useState} from 'react'
import {CModal, CButton, CModalBody, CModalFooter, CRow} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import {isEmpty} from '../../../../utils/utility'
import {useDispatch} from 'react-redux'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'

const RollingBannerDetail = ({
  getList,
  value,
  visible,
  setSelectedItem,
  setVisible,
  onChange,
  isReadOnly,
  setIsReadOnly,
}) => {
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
          imageUrls: imgUrls,
        },
        query: {},
        path: {},
        method: HttpMethod.POST,
        url: `${EndPoint.ENGLISH_BANNER}`,
      })
      console.log(data)
      if (data.isSuccess) {
        getList()
        alert('배너가 정상적으로 생성 되었습니다.')
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
          id: value.bannerEnglishId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.ENGLISH_BANNER}/:id/d`,
      })
      if (data.isSuccess) {
        getList()
        alert(data.result)
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
          imageUrls: imgUrls,
        },
        query: {},
        path: {
          id: value.bannerEnglishId,
        },
        method: HttpMethod.PATCH,
        url: `${EndPoint.ENGLISH_BANNER}/:id`,
      })
      if (data.isSuccess) {
        getList()
        onClose()
        alert(data.result)
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.bannerEnglishId !== -1) {
      if (window.confirm('정말 페이지에서 나가시겠습니까? \n\n 지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
        onClose()
      }
    } else {
      onClose()
    }
  }

  const onClose = () => {
    setImageList([])
    setVisible(false)
    setIsReadOnly(true)
    setSelectedItem({
      bannerEnglishId: -1,
      title: '',
      imageUrls: [],
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
        <CCustomModalHeader onClick={onCloseCheck}>롤링배너 상세</CCustomModalHeader>
        <CModalBody>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='bannerEnglishId'
              xs={4}
              placeholder='ID'
              label='No'
              readOnly={true}
              disabled={true}
              value={value.bannerEnglishId === -1 ? '' : value.bannerEnglishId}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalInput
              onChange={onChange}
              id='title'
              placeholder='배너 타이틀'
              label='배너 타이틀'
              readOnly={isReadOnly}
              disabled={isReadOnly}
              value={value.title}
            />
          </CRow>
          <CRow className='mb-3'>
            <ModalImageInput
              id='image'
              label='이미지 첨부'
              fileList={iamgeList}
              setFileList={setImageList}
              images={value.imageUrls}
              imgPath='english_banner_images'
              readOnly={isReadOnly}
            />
          </CRow>
        </CModalBody>
        <CModalFooter>
          {value.bannerEnglishId === -1 ? (
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

export default RollingBannerDetail
