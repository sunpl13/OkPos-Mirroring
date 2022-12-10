import {useEffect, useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {dataRoomColumns} from '../../../utils/columns/EnHomePage/dataRoom/Columns'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import DataRoomDetail from '../../../components/Modal/EnHomePage/dataRoom/DataRoomDetail'

const DataRoom = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [post, setPost] = useState('') //quill용 state
  const [selectedItem, setSelectedItem] = useState({
    dataRoomEnglishId: -1,
    title: '',
    category: '',
    createdAt: '',
    post: '',
    images: [],
    files: [],
  })

  const onLoadDataRoomList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.DATA_ROOM,
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
        url: `${EndPoint.DATA_ROOM}/:id`,
      })
      setSelectedItem(data.result)
      setPost(data.result.post)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadDataRoomList()
  }, [])

  const handleShowDataRoomDetailModal = async item => {
    onLoadDetail(item.dataRoomEnglishId)
    setShowModal(!showModal)
  }

  const handleDataRoomAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      dataRoomEnglishId: -1,
      title: '',
      category: '',
      createdAt: '',
      post: '',
      images: [],
      files: [],
    })
    setPost('')
    setShowModal(!showModal)
  }

  const handleDataRoomDetailOnChange = ({target}) => {
    const {id, value} = target

    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  return (
    <>
      <PageHeader title='Data Room' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={onLoadDataRoomList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleDataRoomAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowDataRoomDetailModal}
                columns={dataRoomColumns}
                className={'userList'}
                datePickerHidden={false}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <DataRoomDetail
        onChange={handleDataRoomDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        getList={onLoadDataRoomList}
        setSelectedItem={setSelectedItem}
        content={post}
        setContent={setPost}
      />
    </>
  )
}

export default DataRoom
