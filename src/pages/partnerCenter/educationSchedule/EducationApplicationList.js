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
  const [showModal, setShowModal] = useState(false)

  // 교육 신청 리스트 API
  const getList = async () => {
    try {
      const {
        data: {result, code, message, isSuccess},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_REGISTRAUINS,
      })
      if (!isSuccess || isEmpty(result)) {
        return alert(message)
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

  return (
    <CRow>
      <PageHeader title='교육 신청서 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowDetailModal}
              columns={educationApplicationListColumns}
              className={'userList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationApplicationDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default EducationApplicationList
