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
  const [editCheck, setEditCheck] = useState({})
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
        setEditCheck(res)
      })
      .catch(err => console.log(err))
    setShowModal(!showModal)
  }
  // Close Modal
  const handleDetailModalOnClose = () => {
    if (window.confirm('정말 페이지에서 나가시겠습니까?.\n\n지금 페이지를 나가시면 변경사항이 저장되지 않습니다.')) {
      return setShowModal(false)
    } else {
      return null
    }
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
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
        onChange={handleOrderModalOnChange}
        editMode={editMode}
        setEditMode={setEditMode}
        onClose={handleDetailModalOnClose}
      />
    </CRow>
  )
}

export default MaintenancesList
