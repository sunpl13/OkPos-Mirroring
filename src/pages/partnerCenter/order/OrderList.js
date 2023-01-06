import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {orderList} from '../../../utils/columns/partnerCenter/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import OrderDetailModal from '../../../components/Modal/partnerCenter/order/OrderDetailModal'

const OrderList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // 발주신청 리스트 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_ORDERS,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
      }
      if (code === 1000) {
        setItems(result?.adminOrderPartnerDTOs)
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
  const handleShowMaterialDetailModal = async ({id}) => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.PARTNER_ORDERS}/${id}`,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
      }
      if (code === 1000) {
        setSelectedItem(result)
      } else {
        alert(message)
      }
    } catch (error) {
      console.log(error)
    }
    setShowModal(!showModal)
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
