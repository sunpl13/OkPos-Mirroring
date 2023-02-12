import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import FaqDetailModal from '../../../components/Modal/officialMall/FaqDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {faqListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import {useNavigate} from 'react-router-dom'
import * as _ from 'lodash'

const FaqList = () => {
  const navigate = useNavigate()
  const [isReadOnly, setIsReadOnly] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [content, setContent] = useState('')

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
  const onLoadFaqList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_FAQS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
      } else {
        setItems(
          res.result.faqInfos.map((item, index) => {
            return {...item, no: res.result.faqInfos.length - index}
          }),
        )
      }
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Load FAQ Detail
  const onLoadFaq = async (faqId, no) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_FAQ,
        path: {faqId},
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      res.result.faqId = faqId
      setSelectedItem({...res.result, no: no})
      setContent(res.result.content)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Create FAQ
  const onCreateFaq = async (item, content) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.POST,
        url: EndPoint.POST_MALL_FAQ,
        data: {
          faqId: item.faqId,
          category: item.category,
          title: item.title,
          content: content,
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
        setShowModal(false)
      }
      await onLoadFaqList()
      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Update FAQ
  const onUpdateFaq = async (item, content) => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.PATCH,
        url: EndPoint.PATCH_MALL_UPDATE_FAQ,
        path: {
          faqId: item.faqId,
        },
        data: {
          category: item.category,
          title: item.title,
          content: content,
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
        setShowModal(true)
        setIsReadOnly(true)
        setIsUpdate(false)
      }
      alert(res?.message)
      setSelectedItem(item)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Delete FAQ
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

      alert(res?.message)
    } catch (error) {
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  useEffect(() => {
    onLoadFaqList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setInitItem() {
    return {
      title: '',
      content: '',
    }
  }

  /** Open Modal*/
  const handleShowFaqItemAddModal = () => {
    setSelectedItem(setInitItem())
    setContent('')
    setIsReadOnly(false)
    setIsUpdate(false)
    setShowModal(!showModal)
  }
  const handleShowFaqDetailModal = item => {
    onLoadFaq(item.faqId, item.no)
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
    const {faqId, title, category} = selectedItem

    // validation
    const categoryVals = categoryOptions.map(row => row.value)
    if (!category || !_.includes(categoryVals, category)) return alert('카테고리를 선택해주세요')
    if (!title) return alert('제목을 입력해주세요.')
    if (title.length > 30) return alert('제목 글자수 초과입니다.(30자)')
    if (content.replace(/<[^>]*>?|/g, '').length === 0) return alert('본문을 입력해주세요.')
    if (content.replace(/<[^>]*>?|/g, '').length > 300) return alert('본문 글자수 초과입니다.')

    if (window.confirm('저장 하시겠습니까?')) {
      if (faqId) {
        // update
        onUpdateFaq(selectedItem, content)
      } else {
        // create
        onCreateFaq(selectedItem, content)
      }
    }
  }

  const handleDetailModalDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onDeleteFaq(selectedItem.faqId).then(onLoadFaqList, setShowModal(false))
    }
  }

  return (
    <CRow>
      <PageHeader title='FAQ 관리' />
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
              onClick={handleShowFaqDetailModal}
              columns={faqListColumns}
              className={'faqList'}
              datePickerHidden={false}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <FaqDetailModal
        item={selectedItem}
        onUpdate={handleDetailModalUpdate}
        onDelete={handleDetailModalDelete}
        onChange={handleFaqItemModalOnChange}
        content={content}
        setContent={setContent}
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

export default FaqList
