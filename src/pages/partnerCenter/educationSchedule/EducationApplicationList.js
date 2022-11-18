import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
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
    if (!item) {
      setShowModal(!showModal)
      setSelectedItem({
        no: 0,
        distributorName: '',
        distributorContact: '',
        distributorAddress: '',
        trainingDate: '',
        trainingPersonnel: '',
        applicantInformationList: [],
      })
    } else {
      setSelectedItem(item)
      setEditCheck(item)
      setShowModal(!showModal)
    }
  }

  const handleDetailModalUpDate = () => {
    const {
      no,
      distributorName,
      distributorContact,
      distributorAddress,
      trainingDate,
      trainingPersonnel,
      applicantInformationList,
    } = selectedItem
    console.log('asd')
    if (no !== 0) {
      if (
        (editCheck.distributorName !== distributorName,
        editCheck.distributorContact !== distributorContact,
        editCheck.distributorAddress !== distributorAddress,
        editCheck.trainingDate !== trainingDate,
        editCheck.trainingPersonnel !== trainingPersonnel,
        editCheck.applicantInformationList !== applicantInformationList)
      ) {
        if (window.confirm('Edit ?')) {
          if (!distributorName) return alert('Not distributorName')
          if (!distributorContact) return alert('Not distributorContact')
          if (!distributorAddress) return alert('Not distributorAddress')
          if (!trainingDate) return alert('Not trainingDate')
          if (!trainingPersonnel) return alert('Not trainingPersonnel')
          if (applicantInformationList.length === 0) return alert('Not applicantInformationList')
          setItems(items.map(value => (value.no === no ? selectedItem : value)))
          setShowModal(false)
        }
      } else {
        setShowModal(false)
      }
    } else {
      if (
        distributorName ||
        distributorContact ||
        distributorAddress ||
        trainingDate ||
        trainingPersonnel ||
        applicantInformationList
      ) {
        if (window.confirm('Add ?')) {
          if (!distributorName) return alert('Not distributorName')
          if (!distributorContact) return alert('Not distributorContact')
          if (!distributorAddress) return alert('Not distributorAddress')
          if (!trainingDate) return alert('Not trainingDate')
          if (!trainingPersonnel) return alert('Not trainingPersonnel')
          if (applicantInformationList.length === 0) return alert('Not applicantInformationList')
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
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={() => handleShowDetailModal()}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
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
        searchInputHidden={false}
      />
    </CRow>
  )
}

export default EducationApplicationList
