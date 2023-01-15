import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PageHeader from '../../../components/common/PageHeader'
import {educationApplicationListColumns} from '../../../utils/columns/partnerCenter/Columns'
import EducationApplicationDetailModal from '../../../components/Modal/partnerCenter/educationSchedule/EducationApplicationDetailModal'
import {EndPoint} from '../../../dataManager/apiMapper'
import {getDetailInfo, getListData} from '../../../components/function/partnerCenter/ApiModules'

const EducationApplicationList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [showModal, setShowModal] = useState(false)
  const datepickerOption = [
    {
      key: 'educationDate',
      value: '신청 교육 일자',
    },
  ]
  // 교육 신청서 리스트 API
  const getList = async () => {
    getListData(EndPoint.PARTNER_REGISTRAUINS)
      .then(res => {
        setItems(res?.adminEducationRegistrationDTOs)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  /** Open Modal*/
  const handleShowDetailModal = async ({id}) => {
    if (id) {
      getDetailInfo(EndPoint.PARTNER_REGISTRAUINS, id)
        .then(res => {
          setSelectedItem(res)
          setShowModal(!showModal)
        })
        .catch(err => console.log(err))
    } else {
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
              datePickerOptions={datepickerOption}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <EducationApplicationDetailModal value={selectedItem} visible={showModal} setVisible={setShowModal} readOnly />
    </CRow>
  )
}

export default EducationApplicationList
