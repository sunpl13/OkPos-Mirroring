import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCol, CRow} from '@coreui/react'
import PageHeader from '../../../components/common/PageHeader'
import ListTemplate from '../../../components/list/ListTemplate'
import {dealerSupportListData} from '../../../utils/columns/partnerCenter/ColumnsTestData'
import {dealerSupportList} from '../../../utils/columns/partnerCenter/Columns'
import DealerSupportDetailModal from '../../../components/Modal/users/DealerSupportDetailModal'
import ModalFilesInput from '../../../components/forms/inputForm/ModalFilesInput'

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
    employmentType: '',
    workArea: '',
    education: '',
    career: '',
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

  const handleShowDealerSupportDetailModal = item => {
    setSelectedItem(item)
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
