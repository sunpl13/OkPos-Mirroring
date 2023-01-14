import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {rollingBannerColumns} from '../../../utils/columns/EnHomePage/rollingBanner/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import RollingBannerDetail from '../../../components/Modal/EnHomePage/rollingBanner/RollingBannerDetail'
import PrimaryBtn from '../../../components/common/PrimaryBtn'

const RollingBanner = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    bannerEnglishId: -1,
    title: '',
    imageUrls: [],
  })

  const onLoadBannerList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.ENGLISH_BANNER,
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
        url: `${EndPoint.ENGLISH_BANNER}/:id`,
      })
      setSelectedItem(data.result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadBannerList()
  }, [])

  const handleShowBannerDetailModal = async item => {
    onLoadDetail(item.bannerEnglishId)
    setShowModal(!showModal)
  }

  const handleBannerAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      bannerEnglishId: -1,
      title: '',
      imageUrls: [],
    })
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
                  <PrimaryBtn onClick={handleBannerAddModal}>추가</PrimaryBtn>
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
      <RollingBannerDetail
        onChange={handleBannerDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        getList={onLoadBannerList}
        setSelectedItem={setSelectedItem}
      />
    </>
  )
}

export default RollingBanner
