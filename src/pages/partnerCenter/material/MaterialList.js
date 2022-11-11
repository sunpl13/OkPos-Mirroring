import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {materiaList} from '../../../utils/columns/partnerCenter/Columns'
import MeterialDetailModal from '../../../components/Modal/partnerCenter/material/MeterialDetailModal'
import {meterialListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'

const MaterialList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})

  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setItems(meterialListData)
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = item => {
    if (!item.no) {
      setShowModal(!showModal)
      setSelectedItem({
        no: 0,
        title: '',
        content: '',
        files: '',
        createdAt: '',
      })
    } else {
      setSelectedItem(item)
      setEditCheck(item)
      setShowModal(!showModal)
    }
  }

  const handleDetailModalUpDate = () => {
    const {no, title, content, files, category} = selectedItem
    if (no !== 0) {
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
          setItems(items.map(value => (value.no === no ? selectedItem : value)))
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
              no: items.length + 1,
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

  const handleMaterialModalOnDelete = ({no}) => {
    if (window.confirm('Delete ?')) {
      setItems(items.filter(value => value.no !== no))
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
