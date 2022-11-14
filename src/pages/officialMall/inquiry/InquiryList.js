import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {CCard, CCardBody, CCardHeader, CCol, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {testUserTableValues} from '../../test/testConstant'
import InquiryDetailModal from '../../../components/Modal/officialMall/InquiryDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {inquiryListColumns} from '../../../utils/columns/officialMall/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const InquiryList = () => {
  // 모듈 선언
  const navigate = useNavigate()

  // Local state 선언
  const [inquiryList, setInquiryList] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    inquiryMallId: 0,
    name: '',
    email: '',
    category: '',
    phoneNumber: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [inquiryMsg, setInquiryMsg] = useState('')

  // API 통신 함수
  const onLoadMallInquiryList = async () => {
    try {
      const {data: res} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_MALL_INQUIRIES,
      })

      if (!res?.isSuccess || isEmpty(res?.result)) {
        console.log('onLoadMallInquiryList error')
        if (res?.code === 2014) {
          navigate('/login')
        } else {
          alert(res?.message)
        }
        return
      }
      setInquiryList(res.result)
    } catch (error) {
      console.log(error)
      alert('네트워크 통신 실패. 잠시후 다시 시도해주세요.')
    }
  }

  // Life Cycle 선언
  useEffect(() => {
    onLoadMallInquiryList()
  }, [])

  // 함수 선언

  useEffect(() => {
    setInquiryList(testUserTableValues)
  }, [])

  /** Open Modal*/
  const handleShowModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const handleInquiryModalOnChange = ({target: {value}}) => {
    setInquiryMsg(value)
  }
  const handleInquiryModalOnClick = () => {
    setInquiryList(
      inquiryList.map(value => (value.id === selectedItem.id ? {...selectedItem, answer: inquiryMsg} : value)),
    )
    setInquiryMsg('')
    setShowModal(!showModal)
  }
  return (
    <CRow>
      <PageHeader title='1 : 1 문의 관리' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={inquiryList}
              onClick={handleShowModal}
              columns={inquiryListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <InquiryDetailModal
        visible={showModal}
        setVisible={setShowModal}
        value={selectedItem}
        // value={inquiryMsg}
        onChange={handleInquiryModalOnChange}
        onClick={handleInquiryModalOnClick}
      />
    </CRow>
  )
}

export default InquiryList
