import {useState, useEffect} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {qnaColumns} from '../../../utils/columns/homePage/qna/Columns'
import {inquirys} from '../../../utils/columns/homePage/qna/ColumnsSelectedValue'
import QnADetail from '../../../components/Modal/homePage/QnA/QnADetail'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
const QnAList = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    inquiryId: -1,
    content: '',
    name: '',
    email: '',
    pNum: '',
    inquiryType: '',
    fileUrl: [],
  })

  const onLoadInquiryList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.HOME_INQUIRY,
      })
      setItems(data?.data.result.responses)
    } catch (error) {
      alert(error)
    }
  }

  const onLoadDetail = async id => {
    try {
      const {data} = await ApiConfig.request({
        data: {},
        query: {},
        path: {
          id: id,
        },
        method: HttpMethod.GET,
        url: `${EndPoint.HOME_INQUIRY}/:id`,
      })

      setSelectedItem(data.result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadInquiryList()
  }, [])

  const handleShowInquiryDetailModal = async item => {
    onLoadDetail(item.inquiryId)
    setShowModal(!showModal)
  }

  const handleInquiryDetailOnChange = ({target}) => {
    const {id, value} = target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }
  return (
    <main>
      <PageHeader title='1:1 문의' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={onLoadInquiryList}>
                    조회하기
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowInquiryDetailModal}
                selectedOptions={inquirys}
                columns={qnaColumns}
                className='inquiryList'
                datePickerHidden={false}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <QnADetail
        onChange={handleInquiryDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        getList={onLoadInquiryList}
      />
    </main>
  )
}

export default QnAList
