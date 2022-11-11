import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationApplicationListColumns} from '../../../utils/columns/partnerCenter/Columns'
import EducationApplicationDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationApplicationDetailModal'
import {educationApplicationListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'

const EducationApplicationList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})

  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setItems(educationApplicationListData)
  }, [])

  /** Open Modal*/
  const handleShowDetailModal = item => {
    console.log(item)
    setSelectedItem(item)
    setEditCheck(item)
    setShowModal(!showModal)
  }

  const handleDetailModalUpDate = () => {
    const {no, title, content, files, images} = selectedItem
    if (no !== 0) {
      if (editCheck.title !== title || editCheck.content !== content) {
        if (window.confirm('Edit ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          //if (!images) return alert('Not image')
          if (!content) return alert('Not Content')
          setItems(items.map(value => (value.no === no ? selectedItem : value)))
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (title || content || files) {
        if (window.confirm('Add ?')) {
          if (!title) return alert('Not Title')
          //if (!files) return alert('Not File')
          //if (!images) return alert('Not Image')
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
  const handlePersonnelOnDelete = () => {
    console.log('sdf')
  }
  return (
    <CRow>
      <PageHeader title='교육 신청 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowDetailModal}
              columns={educationApplicationListColumns}
              className={'userList'}
              onDelete={handleOrderListOnDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationApplicationDetailModal
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

export default EducationApplicationList
