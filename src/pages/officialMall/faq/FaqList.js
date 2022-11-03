import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import FaqDetailModal from '../../../components/Modal/officialMall/FaqDetailModal'
import PageHeader from '../../../components/common/PageHeader'
import {faqListColumns} from '../../../utils/columns/officialMall/Columns'

const Faqlist = () => {
  const [isUpdate, setIsUpdate] = useState(false)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState({})
  const [item, setItem] = useState({
    id: 0,
    category: '',
    title: '',
    content: '',
  })

  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const testValues = [
    {
      id: 1,
      category: '유형1',
      title: '문의젬목',
      content: '문의내용',
    },
  ]

  // 첫실행 시 렌더링
  useEffect(() => {
    setItems(testValues)
  }, [])

  function setInitItem() {
    return {
      id: 0,
      category: '',
      title: '',
      content: '',
    }
  }

  /** Open Modal*/
  const handleShowFaqItemAddModal = () => {
    setSelectedItem(setInitItem())
    setIsUpdate(false)
    setShowModal(!showModal)
  }
  const handleShowFaqDetailModal = item => {
    setSelectedItem(item)
    setIsUpdate(true)
    setShowModal(!showModal)
  }

  /** Add Faq Modal*/
  const handleFaqItemAddModalOnChange = ({target}) => {
    const {id, value} = target
    setItem({
      ...item,
      [id]: value,
    })
  }
  const handleFaqDetailModalUpdateData = data => {
    setItems(items.map(value => (value.id === data.id ? data : value)))
    console.log(data.target)
  }
  const handleFaqItemAddModalOnClick = () => {
    // if (!item.userName) return alert('Is Not User Name')
    // if (!item.businessNumber) return alert('Is Not Business Number')
    // if (!item.phoneNumber) return alert('Is Not Phone Number')
    // if (!item.businessRegistration) return alert('Is Not Business Registration File')
    // if (!item.businessName) return alert('Is Not Business Name')
    // if (!item.businessAddress) return alert('Is Not Business Address')
    setItems([
      ...items,
      {
        ...item,
      },
    ])
    setItem({
      id: 0,
      category: '',
      title: '',
      content: '',
    })
    setShowAddModal(!showAddModal)
  }

  const onChange = e => {
    const {value, id} = e.target // 우선 e.target 에서 name 과 value 를 추출
    setItems({
      ...items, // 기존의 input 객체를 복사한 뒤
      [id]: value, // name 키를 가진 값을 value 로 설정
    })
  }

  return (
    <CRow>
      <PageHeader title='FAQ 리스트' />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol xs={1}>
                <CButton color='primary' onClick={handleShowFaqItemAddModal}>
                  추가
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <ListTemplate
              items={items}
              onClick={handleShowFaqDetailModal}
              columns={faqListColumns}
              className={'faqList'}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <FaqDetailModal
        item={selectedItem}
        visible={showModal}
        setVisible={setShowModal}
        upDate={handleFaqDetailModalUpdateData}
        onChange={onChange}
        isUpdate={isUpdate}
      />
    </CRow>
  )
}

export default Faqlist
