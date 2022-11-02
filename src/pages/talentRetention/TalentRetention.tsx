import React, {useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {testTalentValues} from '../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
import EmploymemtDetailModal from '../../components/Modal/employment/EmploymemtDetailModal'
import {talentRetentionColumns} from '../../utils/columns/talentRetetion/Columns'
import {category} from '../../components/Modal/employment/EmploymemtDetailModal'

export type TalentRetentionType = {
  No: number
  name: string
  email: string
  pNum: string
  position: string
}

const TalentRetention = () => {
  const [items, setItems] = useState<TalentRetentionType[]>([])
  const [selectedItem, setSelectedItem] = useState<TalentRetentionType>({
    No: -1,

    name: '',
    email: '',
    pNum: '',
    position: '',
  })

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleRetrieveTestList = async () => {
    setItems(testTalentValues as TalentRetentionType[])
  }

  const handleShowEmploymentDetailModal = (item: TalentRetentionType) => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleEmploymentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      No: -1,

      name: '',
      email: '',
      pNum: '',
      position: '',
    })
    setShowModal(!showModal)
  }

  const handleEmployDetailOnChange = ({target}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const {id, value} = target
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
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleRetrieveTestList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleEmploymentAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowEmploymentDetailModal}
                columns={talentRetentionColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      {/* <EmploymemtDetailModal
        readOnly={false}
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      /> */}
    </main>
  )
}

export default TalentRetention
