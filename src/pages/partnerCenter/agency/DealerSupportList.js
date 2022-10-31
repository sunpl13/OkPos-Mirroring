import React, {useEffect, useState} from 'react'
import {CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import {dealerSupportListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'
import {dealerSupportList} from '../../../utils/columns/partnerCenter/Columns'
import DealerSupportDetailModal from '../../../components/Modal/users/DealerSupportDetailModal'

const DealerSupportList = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    No: -1,
    category: '',
    status: false,
    employName: '',
    employStartDate: '',
    employEndDate: '',
    employbannerImg: '',
    employmentType: 'a',
    workArea: '',
    education: 'a',
    career: 'a',
    des: '',
    qualifications: '',
    preferentiaTreatment: '',
    reason: '',
    departmentStatus: '',
    etc: '',
  })
  useEffect(() => {
    setItems(dealerSupportListData)
  }, [])

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleShowEmploymentDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleEmploymentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      No: -1,
      category: '',
      status: false,
      employName: '',
      employStartDate: '',
      employEndDate: '',
      employbannerImg: '',
      employmentType: 'a',
      workArea: '',
      education: 'a',
      career: 'a',
      des: '',
      qualifications: '',
      preferentiaTreatment: '',
      reason: '',
      departmentStatus: '',
      etc: '',
    })
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
      <PageHeader title='채용관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowEmploymentDetailModal}
                columns={dealerSupportList}
                className={'userList'}
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
