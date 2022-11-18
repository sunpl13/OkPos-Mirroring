import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {homePageNoticeColumns} from '../../../utils/columns/homePage/notice/Columns'
import {testHomePageNoticeValues} from '../../test/testConstant'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import NoticeDetail from '../../../components/Modal/homePage/notice/NoticeDetail'
const Notice = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    notictId: -1,
    title: '',
    startedAt: '',
    content: '',
  })
  const [item, setItem] = useState({
    notictId: -1,
    title: '',
    startedAt: '',
    content: '',
  })

  useEffect(() => {
    if (!showModal) {
      setIsReadOnly(true)
    }
  }, [showModal])

  const handleRetrieveTestList = async () => {
    setItems(testHomePageNoticeValues)
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
      notictId: -1,
      title: '',
      startedAt: '',
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
      No: 0,
      popUpName: '',
      popUpImg: '',
    })
    setShowAddModal(!showAddModal)
  }

  // const onLoadEmploymentList = async () => {
  //   try {
  //     const data = await ApiConfig.request({
  //       data: {},
  //       query: {},
  //       path: {},
  //       method: HttpMethod.GET,
  //       url: EndPoint.RECRUITMENT,
  //     })
  //     setItems(data?.data.result)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  //가져오기 onLoad
  //생성 onCreate
  //수정 onUpdate
  //삭제 onDelete
  // const onLoadDetail = async id => {
  //   try {
  //     const {data} = await ApiConfig.request({
  //       data: {},
  //       query: {},
  //       path: {
  //         recruitmentId: id,
  //       },
  //       method: HttpMethod.GET,
  //       url: `${EndPoint.RECRUITMENT}/:recruitmentId`,
  //     })

  //     setSelectedItem(data.result)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // useEffect(() => {
  //   onLoadEmploymentList()
  // }, [])

  // const handleShowEmploymentDetailModal = async item => {
  //   onLoadDetail(item.recruitmentId)
  //   setShowModal(!showModal)
  // }

  // const handleEmploymentAddModal = () => {
  //   setIsReadOnly(false)
  //   setSelectedItem({
  //     notictId: -1,
  //     title: '',
  //     startedAt: '',
  //     content: '',
  //   })
  //   setShowModal(!showModal)
  // }

  // const handleEmployDetailOnChange = ({target}) => {
  //   const {id, value} = target

  //   setSelectedItem({
  //     ...selectedItem,
  //     [id]: value,
  //   })
  // }

  return (
    <>
      <PageHeader title='공지사항' />
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
                columns={homePageNoticeColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <NoticeDetail
        onClick={handleUserItemAddModalOnClick}
        onChange={handlePopUpOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </>
  )
}

export default Notice
