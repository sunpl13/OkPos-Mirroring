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

  /** Open Modal*/
  const handleShowMaterialDetailModal = async item => {
    if (!item.id) {
      setShowModal(!showModal)
      setSelectedItem({
        id: 0,
        title: '',
        content: '',
        files: '',
        createdAt: '',
      })
    } else {
      setShowModal(!showModal)
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.GET_PARTNER_DATAROOMS}/${item.id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
        } else {
          alert(data?.message)
        }
        setSelectedItem(data.result)
        setEditCheck(data.result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  // 자료실 API
  const getDataList = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_DATAROOMS}?page=${1}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
      } else {
        alert(data?.message)
      }
      setItems(data.result.adminDataRoomPartnerDTOS)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getDataList()
  }, [])

  const handleDetailModalUpDate = () => {
    const {id, title, content, files, category} = selectedItem
    if (id !== 0) {
      if (
        editCheck.title !== title ||
        editCheck.content !== content ||
        editCheck.files !== files ||
        editCheck.category !== category
      ) {
        if (window.confirm('Edit ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          if (!category) return alert('Not Selected Category')
          if (!content) return alert('Not Content')
          setItems(items.map(value => (value.id === id ? selectedItem : value)))
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (title || content || files || category) {
        if (window.confirm('Add ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          if (!category) return alert('Not Selected Category')
          if (!content) return alert('Not Content')
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

  const handleMaterialModalOnChange = ({target: {id, value}, target}) => {
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
