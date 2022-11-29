import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {homePageNoticeColumns} from '../../../utils/columns/homePage/notice/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import NoticeDetail from '../../../components/Modal/homePage/notice/NoticeDetail'
const Notice = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    noticeId: -1,
    title: '',
    createdAt: '',
    content: '',
    imageUrls: [],
    fileUrls: [],
  })

  const onLoadNoticeList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.NOTICE,
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
        url: `${EndPoint.NOTICE}/:id`,
      })

      setSelectedItem(data.result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadNoticeList()
  }, [])

  const handleShowNoticeDetailModal = async item => {
    onLoadDetail(item.noticeId)
    setShowModal(!showModal)
  }

  const handleNoticeAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      noticeId: -1,
      title: '',
      createdAt: '',
      content: '',
      imageUrls: [],
      fileUrls: [],
    })
    setShowModal(!showModal)
  }

  const handleNoticeDetailOnChange = ({target}) => {
    const {id, value} = target

    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  return (
    <>
      <PageHeader title='공지사항' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={onLoadNoticeList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleNoticeAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowNoticeDetailModal}
                columns={homePageNoticeColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <NoticeDetail
        onChange={handleNoticeDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        getList={onLoadNoticeList}
        setSelectedItem={setSelectedItem}
      />
    </>
  )
}

export default Notice
