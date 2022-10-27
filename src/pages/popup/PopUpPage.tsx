import {useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {testPopupValues} from '../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'

interface IPopUp {
  No: number
  popUpName: string
  popUpImg: string
}

const PopUpPage = () => {
  const [items, setItems] = useState<IPopUp[]>([])
  const [selectedItem, setSelectedItem] = useState({})
  // const [item, setItem] = useState({
  //   No: 0,
  //   category: '',
  //   employName: '',
  //   employStartDate: '',
  //   employEndDate: '',
  //   status: '',
  // })
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  const employmentColumns = [
    {
      key: 'No',
      _props: {color: 'primary', className: 'employId'},
    },
    {
      key: 'popUpName',
      label: '팝업 이름',
      _props: {color: 'primary', className: 'category'},
    },
    {
      key: 'popUpImg',
      label: '팝업 이미지',
      _props: {color: 'primary', className: 'employName'},
    },
  ]

  const handleRetrieveTestList = async () => {
    setItems(testPopupValues)
  }
  /** Open Modal*/
  const handleShowUserItemAddModal = () => {
    setShowAddModal(!showAddModal)
  }
  const handleShowUserDetailModal = (item: IPopUp) => {
    console.log(selectedItem)
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  // /** Add User Modal*/
  // const handleUserItemAddModalOnChange = ({target}: any) => {
  //   const {id, value} = target
  //   setItem({
  //     ...item,
  //     [id]: value,
  //   })
  // }

  // const handleUserItemAddModalOnClick = () => {
  //   if (!item.employName) return alert('Is Not User Name')
  //   if (!item.category) return alert('Is Not Business Number')
  //   if (!item.employStartDate) return alert('Is Not Phone Number')
  //   if (!item.employEndDate) return alert('Is Not Business Registration File')
  //   if (!item.status) return alert('Is Not Business Name')
  //   setItems([
  //     ...items,
  //     {
  //       ...item,
  //     },
  //   ])
  //   setItem({
  //     No: 0,
  //     category: '',
  //     employName: '',
  //     employStartDate: '',
  //     employEndDate: '',
  //     status: '',
  //   })
  //   setShowAddModal(!showAddModal)
  // }

  return (
    <main>
      <PageHeader title='팝업 관리' />
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
                  <CButton color='primary' onClick={handleShowUserItemAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowUserDetailModal}
                columns={employmentColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </main>
  )
}

export default PopUpPage
