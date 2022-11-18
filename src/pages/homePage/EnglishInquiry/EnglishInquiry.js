import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testEnInquiryValues} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PopupDeatil from '../../../components/Modal/homePage/popup/PopupDeatil'
import {InquiryColumns} from '../../../utils/columns/homePage/EnglishInquiry/Columns'
import EnglishInquiryDetail from '../../../components/Modal/homePage/EnglishInquiry/EnglishInquiryDetail'

const EnglishInquiry = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    inquiryId: -1,
    email: '',
    number: '',
    category: '',
    title: '',
    content: '',
  })
  const [item, setItem] = useState({
    inquiryId: -1,
    email: '',
    number: '',
    category: '',
    title: '',
    content: '',
  })
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  useEffect(() => {
    if (!showModal) {
      setIsReadOnly(true)
    }
  }, [showModal])

  const handleRetrieveTestList = async () => {
    setItems(testEnInquiryValues)
  }

  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handlePopUpOnChange = ({target}) => {
    const {id, value} = target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handlePopupAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      inquiryId: -1,
      email: '',
      number: '',
      category: '',
      title: '',
      content: '',
    })
    setShowModal(!showModal)
  }

  const handleUserItemAddModalOnClick = () => {
    setItems([
      ...items,
      {
        ...item,
      },
    ])
    setItem({
      inquiryId: -1,
      email: '',
      number: '',
      category: '',
      title: '',
      content: '',
    })
    setShowAddModal(!showAddModal)
  }

  return (
    <main>
      <PageHeader title='1:1 Inquiry' />
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
                  <CButton color='primary' onClick={handlePopupAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowUserDetailModal}
                columns={InquiryColumns}
                className={'inquiryList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <EnglishInquiryDetail
        setVisible={setShowModal}
        onClick={handleUserItemAddModalOnClick}
        visible={showModal}
        value={selectedItem}
        onChange={handlePopUpOnChange}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </main>
  )
}

export default EnglishInquiry
