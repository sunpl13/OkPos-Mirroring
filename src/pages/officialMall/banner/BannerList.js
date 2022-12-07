import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {bannerListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import {useNavigate} from 'react-router-dom'
import * as _ from 'lodash'
import BannerDetailModal from '../../../components/Modal/officialMall/BannerDetailModal'

const BannerList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // local state 선언
  const [bannerList, setBannerList] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    title: '',
    subTitle: '',
    image: '',
  })

  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [fileList, setFileList] = useState([])

  // API 통신

  // 배너 리스트 조회
  const onLoadMallBannerList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_BANNERS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      }
      setBannerList(res.result.bannerInfos)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 배너 상세 조회
  const onLoadMallBanner = async bannerId => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_BANNER,
        path: {bannerId},
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      res.result.bannerId = bannerId
      setSelectedItem(res.result)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 배너 추가
  const onCreateMallBanner = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_BANNER,
        data: {
          title: item.title,
          subTitle: item.subTitle,
          image: item.image,
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
      setSelectedItem(setInitItem)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 수정
  const onUpdateMallBanner = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_BANNER,
        data: {
          bannerId: item.bannerId,
          title: item.title,
          subTitle: item.subTitle,
          image: item.image,
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
      setSelectedItem(item)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // 자료 삭제
  const onDeleteMallBanner = async bannerId => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_DELETE_BANNER,
        path: {bannerId},
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
    onLoadMallBannerList()
  }, [])

  // 초기화
  const setInitItem = () => {
    return {
      title: '',
      subTitle: '',
      image: '',
    }
  }

  // 자료 추가 Modal Open 함수
  const handleShowFaqItemAddModal = () => {
    setSelectedItem(setInitItem)
    setIsReadOnly(false)
    setIsUpdate(false)
    setShowModal(!showModal)
  }
  const handleShowDataRoomDetailModal = item => {
    onLoadMallBanner(item.bannerId)
    setIsReadOnly(true)
    setIsUpdate(false)
    setShowModal(!showModal)
  }

  // 값 변경
  const handleBannerOnChange = e => {
    const {id, value} = e.target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleBannerImageOnChange = url => {
    setSelectedItem({
      ...selectedItem,
      image: url,
    })
  }

  const handleDetailModalUpdate = async () => {
    const {bannerId, title, subTitle, image} = selectedItem
    // validation
    if (!title) return alert('제목을 입력해주세요')
    if (!subTitle) return alert('부제목 선택해주세요')
    if (!image) return alert('이미지를 등록해주세요')

    console.log(selectedItem)

    if (window.confirm('저장 하시겠습니까?')) {
      if (bannerId) {
        // update
        await onUpdateMallBanner(selectedItem)
        setIsReadOnly(true)
        setIsUpdate(false)
      } else {
        // create
        await onCreateMallBanner(selectedItem)
        setShowModal(false)
      }
      await onLoadMallBannerList()
    }
  }

  const handleDetailModalDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDeleteMallBanner(selectedItem.bannerId).then(onLoadMallBannerList, setShowModal(false))
    }
  }

  return (
    <CRow>
      <PageHeader title='배너 관리' />
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
              items={bannerList}
              onClick={handleShowDataRoomDetailModal}
              columns={bannerListColumns}
              className={'dataRoomList'}
              datePickerHidden={false}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <BannerDetailModal
        item={selectedItem}
        onUpdate={handleDetailModalUpdate}
        onDelete={handleDetailModalDelete}
        onChange={handleBannerOnChange}
        onChangeImage={handleBannerImageOnChange}
        visible={showModal}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
    </CRow>
  )
}

export default BannerList
