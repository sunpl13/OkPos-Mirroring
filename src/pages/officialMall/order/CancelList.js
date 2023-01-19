import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import {cancelListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'
import OrderTableList from '../../../components/list/mall/OrderTableList'
import CancelModal from '../../../components/Modal/officialMall/CancelModal'

const CancelList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [cancelList, setCanelList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)

  // API 통신 함수
  const onLoadMallCancelList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_CANCEL_ORDERS,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('loadMallCancelList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setCanelList(res.result.responses)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallCancelList()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 함수 선언

  // Open Modal
  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  return (
    <CRow>
      <PageHeader title='취소 요청 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <OrderTableList
              items={cancelList}
              onClick={handleShowUserDetailModal}
              columns={cancelListColumns}
              className={'cancelList'}
              datePicker
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CancelModal
        value={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        cancelList={cancelList}
        setCanelList={setCanelList}
        onLoadMallCancelList={onLoadMallCancelList}
        readOnly
      />
    </CRow>
  )
}

export default CancelList
