import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import {dealerSupportList} from '../../../utils/columns/partnerCenter/Columns'
import DealerSupportDetailModal from '../../../components/Modal/partnerCenter/agency/DealerSupportDetailModal'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import {isEmpty} from '../../../utils/utility'

const DealerSupportList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    noticeTitle: '',
    noticeContent: '',
    noticeImages: [],
    supportArea: '',
    name: '',
    email: '',
    phoneNum: '',
  })
  const [editCheck, setEditCheck] = useState({})

  // 1:1 문의 리스트 API
  const getUsers = async () => {
    try {
      const {data} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.GET_PARTNER_AGENCYAPPLICANT}?page=${1}`,
      })
      console.log(data)
      if (!data.isSuccess || isEmpty(data?.result)) {
        return
      }
      if (data?.code === 1000) {
        setItems(data.result.adminAgencyApplicantDTOs)
      } else {
        alert(data?.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleShowDealerSupportDetailModal = async ({id}) => {
    if (id !== undefined) {
      try {
        const {data} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: `${EndPoint.GET_PARTNER_AGENCYAPPLICANT}/${id}`,
        })
        console.log(data)
        if (!data.isSuccess || isEmpty(data?.result)) {
          return
        }
        if (data?.code === 1000) {
          setSelectedItem(data.result)
          setEditCheck(data.result)
        } else {
          alert(data?.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setSelectedItem({
        content: '',
        createdAt: '',
        noticeFiles: [],
        noticeImages: [],
      })
      setEditCheck({
        content: '',
        createdAt: '',
        noticeFiles: [],
        noticeImages: [],
      })
    }
    setShowModal(!showModal)
  }

  const handleEmployDetailOnChange = ({target: {id, value}}) => {
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  return (
    <main>
      <PageHeader title='딜러 지원 리스트' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowDealerSupportDetailModal}
                columns={dealerSupportList}
                className={'userList'}
                checkBoxInputHidden={true}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <DealerSupportDetailModal
        readOnly={false}
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </main>
  )
}

export default DealerSupportList
