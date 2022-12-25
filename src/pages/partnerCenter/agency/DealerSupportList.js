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
  const [selectedItem, setSelectedItem] = useState({})
  const [editor, setEditor] = useState('')

  // 딜러 지원 리스트 API
  const getList = async () => {
    try {
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.PARTNER_AGENCYAPPLICANT,
      })
      if (!isSuccess || isEmpty(result)) {
        return
      }
      if (code === 1000) {
        setItems(result?.adminAgencyApplicantDTOs)
        setEditor(result?.noticeContent)
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

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleShowDealerSupportDetailModal = async ({id}) => {
    try {
      const {
        data: {result, isSuccess, code, message},
      } = await ApiConfig.request({
        method: HttpMethod.GET,
        url: `${EndPoint.PARTNER_AGENCYAPPLICANT}/${id}`,
      })
      console.log(result)
      if (!isSuccess || isEmpty(result)) {
        return
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
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        editor={editor}
      />
    </main>
  )
}

export default DealerSupportList
