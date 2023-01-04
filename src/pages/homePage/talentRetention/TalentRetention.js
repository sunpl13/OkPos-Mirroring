import {useState, useEffect} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testTalentValues} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import {talentRetentionColumns} from '../../../utils/columns/homePage/talentRetetion/Columns'
import TalentRetentionDetail from '../../../components/Modal/homePage/talentRetention/TalentRetentionDetail'
import {category} from '../../../utils/columns/homePage/employment/ColumnsSelectedValue'
import ApiConfig, {HttpMethod} from '../../../dataManager/apiConfig'
import {EndPoint} from '../../../dataManager/apiMapper'
import TalentPoolList from '../../../components/list/homepage/talentTetention/TalentPoolList'
import ListTemplate from '../../../components/list/ListTemplate'
const TalentRetention = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [select, setSelect] = useState('')
  const [selectedItem, setSelectedItem] = useState({
    talentPoolId: -1,
    number: '',
    name: '',
    email: '',
    phoneNumber: '',
    position: '',
    registeredAt: new Date(),
    portfolio: [],
    otherDocument: [],
    otherLink: '',
    resume: [],
  })

  const onLoadTalentPoolList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.TALENTPOOL,
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
        url: `${EndPoint.TALENTPOOL}/:id`,
      })
      if (!data.isSuccess) {
        return alert(data.message)
      }
      setSelectedItem(data.result)
      setShowModal(!showModal)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    onLoadTalentPoolList()
  }, [])

  const handleRetrieveTestList = async () => {
    setItems(testTalentValues)
  }

  const handleShowTalentPoolDetailModal = async item => {
    onLoadDetail(item.talentPoolId)
  }

  const handleTalentPoolAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      talentPoolId: -1,
      number: '',
      name: '',
      email: '',
      phoneNumber: '',
      position: '',
      registeredAt: new Date(),
      portfolio: [],
      otherDocument: [],
      otherLink: '',
      resume: [],
    })
    setShowModal(!showModal)
  }

  const handleTalentPoolDetailOnChange = ({target}) => {
    const {id, value} = target
    setSelectedItem({
      ...selectedItem,
      [id]: value,
    })
  }

  return (
    <main>
      <PageHeader title='인재풀 관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowTalentPoolDetailModal}
                columns={talentRetentionColumns}
                className='talentPoolList'
                datePickerHidden={false}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <TalentRetentionDetail
        onChange={handleTalentPoolDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
        select={select}
        setSelect={setSelect}
      />
    </main>
  )
}

export default TalentRetention
