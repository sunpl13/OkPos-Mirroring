import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {materiaList} from '../../../utils/columns/partnerCenter/Columns'
import MeterialDetailModal from '../../../components/Modal/partnerCenter/material/MeterialDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const MaterialList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)

  // 자료실 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_PARTNER_DATAROOMS,
      })
      console.log(result)
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result?.adminDataRoomPartnerDTOs)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = async ({id}) => {
    console.log(id)
    if (id) {
      try {
        const {
          data: {isSuccess, result, code, message},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.GET_PARTNER_DATAROOMS}/${id}`,
        })
        console.log(result)
        if (!isSuccess || isEmpty(result)) {
          return
        }
        if (code === 1000) {
          setSelectedItem({
            id: id,
            ...result,
          })
          setEditCheck(result)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({})
      setEditCheck({})
    }
    setShowModal(!showModal)
  }

  const handleDetailModalUpDate = () => {
    const {id, title, content, files, category} = selectedItem
    if (id) {
      if (
        editCheck.title !== title ||
        editCheck.content !== content ||
        editCheck.files !== files ||
        editCheck.category !== category
      ) {
        if (window.confirm('수정하시겠습니까?')) {
          if (!title) return alert('제목을 입력해 주세요.')
          //if (!files) return alert('파일을 등록해 주세요')
          if (!category) return alert('카테고리를 선택해 주세요')
          if (!content) return alert('본문을 입력해 주세요.')
          setItems(items.map(value => (value.id === id ? selectedItem : value)))
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (title || content || files || category) {
        if (window.confirm('등록하시겠습니까?')) {
          if (!title) return alert('제목을 입력해 주세요.')
          //if (!files) return alert('파일을 등록해 주세요')
          if (!category) return alert('카테고리를 선택해 주세요')
          if (!content) return alert('본문을 입력해 주세요.')
          setItems([
            ...items,
            {
              ...selectedItem,
              id: items.length + 1,
            },
          ])
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    }
  }

  const handleMaterialModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handleMaterialModalOnDelete = ({id}) => {
    if (window.confirm('Delete ?')) {
      setItems(items.filter(value => value.id !== id))
    }
  }
  return (
    <CRow>
      <PageHeader title='자료 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowMaterialDetailModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={materiaList}
              className={'userList'}
              onDelete={handleMaterialModalOnDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <MeterialDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleMaterialModalOnChange}
        upDate={handleDetailModalUpDate}
      />
    </CRow>
  )
}

export default MaterialList
