import {useState} from 'react'
import {CModal, CModalBody, CRow, CModalFooter, CButton} from '@coreui/react'
import ModalInput from '../../../forms/inputForm/ModalInput'
import CCustomModalHeader from '../../../custom/Modal/CCustomModalHeader'
import ApiConfig, {HttpMethod} from '../../../../dataManager/apiConfig'
import {EndPoint} from '../../../../dataManager/apiMapper'
import ModalImageInput from '../../../forms/inputForm/ModalImageInput'
import {isEmpty} from '../../../../utils/utility'
import {sendImageUrlFormat} from '../../../../utils/awsCustom'
import ModalFilesInput from '../../../forms/inputForm/ModalFilesInput'
import ModalQuillEditor from '../../../forms/inputForm/ModalQuillEditor'
import ModalSelect from '../../../forms/inputForm/ModalSelect'

export const category = [
  {key: 'ALL', value: 'All'},
  {key: 'PROGRAMS', value: 'Programs'},
  {key: 'DRIVER', value: 'Driver'},
  {key: 'MANUAL', value: 'Manual'},
  {key: 'FIRMWARE', value: 'Firmware'},
  {key: 'TECHNIQUE', value: 'Technique'},
  {key: 'OTHER', value: 'Other'},
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
    if (value.dataRoomEnglishId !== -1) {
      if (value.category === '선택해주세요') {
        alert('카테고리를 선택 해주세요.')
        return false
      }
    } else {
      if (isEmpty(value.category) || value.category === '선택해주세요') {
        alert('카테고리를 선택 해주세요.')
        return false
      }
    }
    if (isEmpty(value.title)) {
      alert('제목을 입력해주세요.')
      return false
    }
    if (isEmpty(content) || content === '<p><br></p>') {
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
        alert('정상적으로 자료가 생성 되었습니다.')
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
    const fileUrls = sendImageUrlFormat(fileList)

    try {
      if (!validateCheck()) {
        return
      }
      const {data} = await ApiConfig.request({
        data: {
          title: value.title,
          category: value.category ?? value.categoryEnglish,
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
        alert(data.result)
        onClose()
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert(error)
    }
  }

  const onCloseCheck = () => {
    if (!isReadOnly && value.recruitmentId !== -1) {
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
      dataRoomEnglishId: -1,
      title: '',
      createdAt: '',
      category: '',
      content: '',
      images: [],
      files: [],
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
        <CCustomModalHeader onClick={onCloseCheck}>Data Room 상세</CCustomModalHeader>
        <CModalBody className='modal-scroll'>
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
              value={value.category ?? value.categoryEnglish}
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

export default DataRoomDetail
