import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import UserAddModalTemplate from '../../../components/Modal/partnerCenter/users/UserAddModalTemplate'
import UserDetailModal from '../../../components/Modal/partnerCenter/users/UserDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {materiaList, userListColumns} from '../../../utils/columns/partnerCenter/Columns'
import MeterialDetailModal from '../../../components/Modal/partnerCenter/users/MeterialDetailModal'
import {meterialListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'

const MaterialList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({
    no: 0,
    title: '',
    category: {key: 0, value: ''},
    content: '',
    files: {},
    createdAt: '',
  })

  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  useEffect(() => {
    setItems(meterialListData)
  }, [])

  /** Open Modal*/
  const handleShowMaterialItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowMaterialDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  /** Add Modal*/
  const handleUserItemAddModalOnChange = ({target}) => {
    const {id, value} = target
    setItem({
      ...item,
      [id]: value,
    })
  }
  const handleUserDetailModalUpdateData = data => {
    setItems(items.map(value => (value.id === data.id ? data : value)))
  }
  const handleUserItemAddModalOnClick = () => {
    if (!item.title) return alert('Is Not Title')
    if (!item.content) return alert('Is Not Content')
    if (!item.category) return alert('Is Not Business Registration File')

    setItems([
      ...items,
      {
        ...item,
      },
    ])
    setItem({
      no: 0,
      title: '',
      content: '',
      createdAt: '',
      category: {key: 0, value: ''},
    })
    setShowAddModal(!showAddModal)
  }
  const handleMaterialDetailModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  return (
    <CRow>
      <PageHeader title='자료 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowMaterialItemAddModal}>
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
            />
          </CCardBody>
        </CCard>
      </CCol>
      <UserAddModalTemplate
        value={item}
        visible={showAddModal}
        setVisible={setShowAddModal}
        onChange={handleUserItemAddModalOnChange}
        onClick={handleUserItemAddModalOnClick}
      />
      <MeterialDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleMaterialDetailModalOnChange}
        readOnly
        upDate={handleUserDetailModalUpdateData}
      />
    </CRow>
  )
}

export default MaterialList
