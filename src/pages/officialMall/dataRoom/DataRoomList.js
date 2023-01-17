import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {dataRoomListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import {useNavigate} from 'react-router-dom'
import * as _ from 'lodash'
import DataRoomModal from '../../../components/Modal/officialMall/DataRoomModal'
import {sendImageUrlFormat} from '../../../utils/awsCustom'

const DataRoomList = () => {
  const navigate = useNavigate()
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [fileList, setFileList] = useState([])
  const [imageList, setImageList] = useState([])
  const [content, setContent] = useState('')

  // API 통신

  // 자료실 리스트 조회
  const onLoadMallDataRoomList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_DATAROOMS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      } else {
        setItems(res.result.dataRoomInfos)
      }
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 상세 조회
  const onLoadMallDataRoom = async dataRoomId => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_DATAROOM,
        path: {dataRoomId},
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }

      res.result.dataRoomId = dataRoomId
      setSelectedItem(res.result)
      setContent(res.result.content)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 추가
  const onCreateMallDataRoom = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_DATAROOM,
        data: {
          category: item.category,
          title: item.title,
          content: item.content,
          images: item.images,
          files: item.files,
        },
      })
      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      alert(res?.message)
      setShowModal(false)
      setSelectedItem(setInitItem)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 수정
  const onUpdateMallDataRoom = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_DATAROOM,
        path: {
          dataRoomId: item.dataRoomId,
        },
        data: {
          category: item.category,
          title: item.title,
          content: item.content,
          images: item.images,
          files: item.files,
        },
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      } else {
        setIsReadOnly(true)
        setIsUpdate(false)
      }
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 삭제
  const onDeleteMallDataRoom = async dataRoomId => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_DELETE_DATAROOM,
        path: {dataRoomId},
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      }
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  useEffect(() => {
    onLoadMallDataRoomList()
  }, [])

  const setInitItem = () => {
    return {
      title: '',
      content: '',
      category: '',
      content: '',
      images: [],
      files: [],
    }
  }

  // 자료 추가 Modal Open 함수
  const handleShowFaqItemAddModal = () => {
    setSelectedItem(setInitItem)
    setImageList([])
    setFileList([])
    setContent('')
    setIsReadOnly(false)
    setIsUpdate(false)
    setShowModal(!showModal)
  }
  const handleShowDataRoomDetailModal = item => {
    onLoadMallDataRoom(item.dataRoomId)
    setIsReadOnly(true)
    setIsUpdate(false)
    setShowModal(!showModal)
  }

  /** Add dataroom Modal*/
  const handleDataRoomItemModalOnChange = e => {
    const {id, value} = e.target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  // 객체 to key value
  const handleMultiFileUrl = array => {
    const tempFiles = array.reduce((accumulator, value) => {
      return {...accumulator, [value.name]: value.url}
    }, {})
    return tempFiles
  }

  const handleDetailModalUpdate = async () => {
    const {dataRoomId, title, category} = selectedItem

    // validation
    if (!category) return alert('카테고리를 선택해주세요')
    if (title.length === 0) return alert('제목을 입력해주세요')
    if (content.replace(/<[^>]*>?|/g, '').length === 0) return alert('본문을 입력해주세요')
    if (content.replace(/<[^>]*>?|/g, '').length > 150) return alert('본문 글자수 초과입니다.(150)')
    if (imageList.length < 1) return alert('이미지를 등록해주세요')
    if (imageList.length > 10) return alert('이미지 등록 갯수 초과입니다.(10개)')
    if (fileList.length < 1) return alert('자료를 등록해주세요')
    if (fileList.length > 5) return alert('자료 등록 갯수 초과입니다.(5개)')

    selectedItem.files = await handleMultiFileUrl(fileList)
    selectedItem.images = await sendImageUrlFormat(imageList)
    selectedItem.content = content

    if (window.confirm('저장 하시겠습니까?')) {
      if (dataRoomId) {
        // update
        await onUpdateMallDataRoom(selectedItem)
        await onLoadMallDataRoom(dataRoomId)
      } else {
        // create
        await onCreateMallDataRoom(selectedItem)
      }
      await onLoadMallDataRoomList()
    }
  }

  const handleDetailModalDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDeleteMallDataRoom(selectedItem.dataRoomId).then(onLoadMallDataRoomList, setShowModal(false))
    }
  }

  return (
    <CRow>
      <PageHeader title='자료실 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowFaqItemAddModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowDataRoomDetailModal}
              columns={dataRoomListColumns}
              className={'dataRoomList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <DataRoomModal
        item={selectedItem}
        onUpdate={handleDetailModalUpdate}
        onDelete={handleDetailModalDelete}
        onChange={handleDataRoomItemModalOnChange}
        visible={showModal}
        setVisible={setShowModal}
        fileList={fileList}
        setFileList={setFileList}
        imageList={imageList}
        setImageList={setImageList}
        content={content}
        setContent={setContent}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </CRow>
  )
}

export default DataRoomList
