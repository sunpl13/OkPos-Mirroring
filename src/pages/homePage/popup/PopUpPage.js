import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testPopupValues} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import PopupDeatil from '../../../components/Modal/homePage/popup/PopupDeatil'
import {popupColumns} from '../../../utils/columns/homePage/popup/Columns'

const PopUpPage = () => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({
    No: -1,
    popUpName: '',
    popUpImg: '',
  })
  const [item, setItem] = useState({
    No: -1,
    popUpName: '',
    popUpImg: '',
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
    setItems(testPopupValues)
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
      No: -1,
      popUpName: '',
      popUpImg: '',
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
      No: 0,
      popUpName: '',
      popUpImg: '',
    })
    setShowAddModal(!showAddModal)
  }

  return (
    <main>
      <PageHeader title='팝업 관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
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
                columns={popupColumns}
                className={'popupList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <PopupDeatil
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

export default PopUpPage
