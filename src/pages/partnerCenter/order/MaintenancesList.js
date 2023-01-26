import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {maintenanceApplicationList} from '../../../utils/columns/partnerCenter/Columns'
import {EndPoint} from '../../../dataManager/apiMapper'
import MaintenancesDetailModal from '../../../components/Modal/partnerCenter/order/MaintenancesDetailModal'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'

const MaintenancesList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editMode, setEditMode] = useState(true)
  const [showModal, setShowModal] = useState(false)

  // 발주신청 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_MAINTENANCES)
      .then(res => {
        setItems(res?.adminMaintenanceDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  // Open Modal
  const handleShowMaterialDetailModal = async ({id}) => {
    getDetailInfo(EndPoint.PARTNER_MAINTENANCES, id)
      .then(res => {
        setSelectedItem(res)
      })
      .catch(err => console.log(err))
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <PageHeader title='유지보수 신청 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={maintenanceApplicationList}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <MaintenancesDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        editMode={editMode}
        setEditMode={setEditMode}
        getList={getList}
      />
    </CRow>
  )
}

export default MaintenancesList
