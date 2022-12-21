import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {orderList} from '../../../utils/columns/partnerCenter/Columns'
import OrderDetailModal from '../../../components/Modal/partnerCenter/order/OrderDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const OrderList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [editCheck, setEditCheck] = useState({})

  const [showModal, setShowModal] = useState(false)

  /** Open Modal*/
  const handleShowMaterialDetailModal = item => {
    setSelectedItem(item)
    setEditCheck(item)
    setShowModal(!showModal)
    //GET_PARTNER_ORDERS
  }
  // 발주신청 리스트 API
  const getList = async () => {
    try {
      const {
        data: {isSuccess, result, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_ORDERS,
      })
      console.log(result)
      if (!isSuccess || isEmpty(result)) {
        return
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

  const handleDetailModalUpDate = () => {
    const {
      no,
      businessName /** 상호명 */,
      representativeName /** 대표자명*/,
      businessNumber /** 사업자 번호 */,
      email /** 이메일 */,
      phoneNumber /** 휴대포 번호 */,
      homePhoneNumber /** 사업장 전화번호*/,
      businessAddress /** 사업장 주소*/,
      receive /** 수령 방법 */,
      orderList /** 발주 리스트  */,
      taxInvoiceEmail /** 세금 고지서 수령 이메일 */,
    } = selectedItem
    if (
      editCheck.businessName !== businessName ||
      editCheck.representativeName !== representativeName ||
      editCheck.businessNumber !== businessNumber ||
      editCheck.email !== email ||
      editCheck.phoneNumber !== phoneNumber ||
      editCheck.homePhoneNumber !== homePhoneNumber ||
      editCheck.businessAddress !== businessAddress ||
      editCheck.orderList !== orderList ||
      editCheck.receive !== receive ||
      editCheck.taxInvoiceEmail !== taxInvoiceEmail
    ) {
      if (window.confirm('Edit ?')) {
        if (!representativeName) return alert('Not Representative Name')
        if (!businessName) return alert('Not businessName')
        if (!representativeName) return alert('Not representativeName')
        if (!businessNumber) return alert('Not businessNumber')
        if (!email) return alert('Not email')
        if (!phoneNumber) return alert('Not phoneNumber')
        if (!homePhoneNumber) return alert('Not homePhoneNumber')
        if (!businessAddress) return alert('Not businessAddress')
        if (!receive) return alert('Not receive')
        if (orderList.length === 0) return alert('Not orderList')
        if (!taxInvoiceEmail) return alert('Not taxInvoiceEmail')
        setItems(items.map(value => (value.no === no ? selectedItem : value)))
        setShowModal(false)
      }
    } else {
      setShowModal(false)
    }
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
      <PageHeader title='발주 신청 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowMaterialDetailModal}
              columns={orderList}
              className={'userList'}
              onDelete={handleOrderListOnDelete}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <OrderDetailModal
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

export default OrderList
