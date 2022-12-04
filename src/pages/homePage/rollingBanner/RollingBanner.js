import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {rollingBannerColumns} from '../../../utils/columns/homePage/rollingBanner/Columns'
import {testHomePageRollingBannerValues} from '../../test/testConstant'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import RollingBannerDetail from '../../../components/Modal/EnHomePage/rollingBanner/RollingBannerDetail'

const RollingBanner = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    bannerId: -1,
    title: '',
    imgUrl: [],
    content: '',
  })
  const [item, setItem] = useState({
    bannerId: -1,
    title: '',
    imgUrl: [],
    content: '',
  })

  useEffect(() => {
    if (!showModal) {
      setIsReadOnly(true)
    }
  }, [showModal])

  const handleTestList = async () => {
    setItems(testHomePageRollingBannerValues)
  }

  const handleShowUserDetailModal = item => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }
  const getStringLength = str => {
    let strLength = 0

    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i)
      let ch = str.substr(i, 1).toUpperCase()

      code = parseInt(code)

      if ((ch < '0' || ch > '9') && (ch < 'A' || ch > 'Z') && (code > 255 || code < 0)) strLength = strLength + 2
      else strLength = strLength + 1
    }
    return strLength
  }

  const handlePopUpOnChange = ({target}) => {
    const {id, value} = target

    if (id === 'title' && getStringLength(value) > 30) {
      alert('배너 타이틀은 공백 포함 30자 까지입니다.')
    }
    if (id === 'content' && getStringLength(value) > 30) {
      alert('문구는 공백 포함 150자 까지입니다.')
    }
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  const handlePopupAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      bannerId: -1,
      title: '',
      imgUrl: [],
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
  //     bannerId: -1,
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
      <PageHeader title='롤링배너 관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleTestList}>
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
                columns={rollingBannerColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <RollingBannerDetail
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

export default RollingBanner
