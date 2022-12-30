import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {rollingBannerColumns} from '../../../utils/columns/homePage/rollingBanner/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import HomePageRollingBannerDetail from '../../../components/Modal/homePage/rollingBanner/HomePageRollingBannerDetail'
const RollingBanner = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [content, setContent] = useState('') //quill용 state
  const [selectedItem, setSelectedItem] = useState({
    bannerId: -1,
    title: '',
    content: '',
    imageUrls: [],
  })

  const onLoadBannerList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.HOME_BANNER,
      })
      setItems(data?.data.result.responses)
    } catch (error) {
      alert(error)
    }
  }

  //가져오기 onLoad
  //생성 onCreate
  //수정 onUpdate
  //삭제 onDelete
  const onLoadDetail = async id => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          id: id,
        },
        method: HttpMethod.GET,
        url: `${EndPoint.HOME_BANNER}/:id`,
      })
      setSelectedItem(data.result)
      setContent(data.result.content)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadBannerList()
  }, [])

  const handleShowBannerDetailModal = async item => {
    onLoadDetail(item.bannerId)
    setShowModal(!showModal)
  }

  const handleBannerAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      bannerId: -1,
      title: '',
      content: '',
      imageUrls: [],
    })
    setContent('')
    setShowModal(!showModal)
  }

  const handleBannerDetailOnChange = ({target}) => {
    const {id, value} = target

    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  return (
    <>
      <PageHeader title='롤링배너 관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleBannerAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowBannerDetailModal}
                columns={rollingBannerColumns}
                className='BannerList'
                datePickerHidden={false}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <HomePageRollingBannerDetail
        onChange={handleBannerDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        getList={onLoadBannerList}
        setSelectedItem={setSelectedItem}
        content={content}
        setContent={setContent}
      />
    </>
  )
}

export default RollingBanner
