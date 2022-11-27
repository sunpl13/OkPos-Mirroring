import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import FaqDetailModal from '../../../components/Modal/officialMall/FaqDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {dataRoomListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import {useNavigate} from 'react-router-dom'
import * as _ from 'lodash'
import DataRoomModal from '../../../components/Modal/officialMall/DataRoomModal'

const DataRoomList = () => {
  const navigate = useNavigate()
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  const categoryOptions = [
    {
      key: '하드웨어',
      value: '하드웨어',
    },
    {
      key: '소프트웨어',
      value: '소프트웨어',
    },
    {
      key: '렌탈',
      value: '렌탈',
    },
    {
      key: '부가서비스',
      value: '부가서비스',
    },
    {
      key: '유지보수',
      value: '유지보수',
    },
  ]

  // Load FAQ List
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

  // Load DataRoom Detail
  const onLoadDataRoom = async dataRoomId => {
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
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Create DataRoom
  const onCreateFaq = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_FAQ,
        data: {
          faqId: item.faqId,
          category: item.category,
          title: item.title,
          content: item.content,
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
      setSelectedItem(item)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Update DataRoom
  const onUpdateFaq = async item => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_FAQ,
        data: {
          faqId: item.faqId,
          category: item.category,
          title: item.title,
          content: item.content,
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
      setSelectedItem(item)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Delete DataRoom
  const onDeleteFaq = async faqId => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_DELETE_FAQ,
        path: {faqId},
      })

      if (!res?.isSuccess) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      }
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
      image: '',
      files: [],
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
    onLoadDataRoom(item.dataRoomId)
    setIsReadOnly(true)
    setIsUpdate(false)
    setShowModal(!showModal)
  }

  /** Add Faq Modal*/
  const handleFaqItemModalOnChange = e => {
    const {id, value} = e.target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleDetailModalUpdate = async () => {
    const {faqId, title, content, category} = selectedItem
    // validation
    const categoryVals = categoryOptions.map(row => row.value)
    if (!category || !_.includes(categoryVals, category)) return alert('카테고리를 선택해주세요')
    if (!title) return alert('제목을 입력해주세요')
    if (!content) return alert('답변을 입력해주세요')

    if (window.confirm('저장 하시겠습니까?')) {
      if (faqId) {
        // update
        onUpdateFaq(selectedItem)
        setShowModal(true)
        setIsReadOnly(true)
        setIsUpdate(false)
      } else {
        // create
        onCreateFaq(selectedItem)
        setShowModal(false)
      }
      await onLoadMallDataRoomList()
    }
  }

  const handleDetailModalDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDeleteFaq(selectedItem.faqId).then(onLoadMallDataRoomList, setShowModal(false))
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
              datePickerHidden={false}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <DataRoomModal
        item={selectedItem}
        onUpdate={handleDetailModalUpdate}
        onDelete={handleDetailModalDelete}
        onChange={handleFaqItemModalOnChange}
        option={categoryOptions}
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

export default DataRoomList
