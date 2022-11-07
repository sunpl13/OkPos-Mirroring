import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationScheduleListColumns} from '../../../utils/columns/partnerCenter/Columns'
import {educationScheduleListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'
import EducationScheduleDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationScheduleDetailModal'

const EducationScheduleList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})

  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setItems(educationScheduleListData)
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = item => {
    setSelectedItem(item)
    setEditCheck(item)
    setShowModal(!showModal)
  }

  const handleDetailModalUpDate = () => {
    console.log('test')
    setShowModal(false)
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  const handleOrderListOnDelete = ({no}) => {
    if (window.confirm('Delete ?')) {
      setItems(items.filter(value => value.no !== no))
    }
  }
  const handleOrderOnDelete = ({productId}) => {
    if (window.confirm('Delete ?')) {
      setSelectedItem({
        ...selectedItem,
        orderList: selectedItem.orderList.filter(value => value.productId !== productId),
      })
    }
  }
  return (
    <CRow>
      <PageHeader title='교육 일정 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={() => console.log('asdf')}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={educationScheduleListColumns}
              className={'userList'}
              onDelete={handleOrderListOnDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationScheduleDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleOrderModalOnChange}
        upDate={handleDetailModalUpDate}
        onDelete={handleOrderOnDelete}
      />
    </CRow>
  )
}

export default EducationScheduleList
