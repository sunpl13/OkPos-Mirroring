import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {orderList} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import OrderDetailModal from '../../../components/Modal/partnerCenter/order/OrderDetailModal'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'

const OrderList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // 발주신청 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_ORDERS)
      .then(res => {
        setItems(res?.adminOrderPartnerDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowMaterialDetailModal = async ({id}) => {
    getDetailInfo(EndPoint.PARTNER_ORDERS, id)
      .then(res => {
        setSelectedItem(res)
        !showModal && setShowModal(true)
      })
      .catch(err => console.log(err))
  }

  const handleOrderModalOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  return (
    <CRow>
      <PageHeader title='발주 신청 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={orderList}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <OrderDetailModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        onChange={handleOrderModalOnChange}
        upDate={handleShowMaterialDetailModal}
        readOnly
      />
    </CRow>
  )
}

export default OrderList
