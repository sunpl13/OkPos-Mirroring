import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationApplicationListColumns} from '../../../utils/columns/partnerCenter/Columns'
import EducationApplicationDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationApplicationDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const EducationApplicationList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [editMode, setEditMode] = useState(false)

  // 교육 신청 리스트 API
  const getList = async () => {
    try {
      const {
        data: {result, code, message, isSuccess},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_REGISTRAUINS,
      })

      console.log(result)
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result?.adminEducationRegistrationDTOs)
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
  const handleShowDetailModal = async ({id}) => {
    if (id) {
      try {
        const {
          data: {result, code, message, isSuccess},
        } = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.PARTNER_REGISTRAUINS}/${id}`,
        })
        console.log(result)
        if (!isSuccess || isEmpty(result)) {
          return alert(message)
        }
        if (code === 1000) {
          setSelectedItem(result)
          setShowModal(!showModal)
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setShowModal(!showModal)
      setSelectedItem({})
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
      <PageHeader title='교육 신청서 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          {/*
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={() => handleShowDetailModal(undefined)}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          */}
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
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </CRow>
  )
}

export default EducationApplicationList
