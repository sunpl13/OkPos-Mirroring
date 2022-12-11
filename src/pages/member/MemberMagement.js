import {useEffect, useState} from 'react'
import PageHeader from '../../components/common/PageHeader'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../components/list/ListTemplate'
import {EditorColumns} from '../../utils/columns/member/Columns'
import ApiConfig, {HttpMethod} from '../../dataManager/apiConfig'
import {EndPoint} from '../../dataManager/apiMapper'

const MemberManageMent = () => {
  const [items, setItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [selectedItem, setSelectedItem] = useState({
    number: -1,
    editorId: 4,
    loginId: '',
    createdAt: '',
    accessAuthority: '',
    isAuthorized: 1,
  })

  const onLoadMemberManageMentList = async () => {
    try {
      const data = await ApiConfig.request({
        data: {},
        query: {},
        path: {},
        method: HttpMethod.GET,
        url: EndPoint.EDITOR,
      })
      setItems(data?.data.result.responses)
    } catch (error) {
      alert(error)
    }
  }
  const handleOnCheckedApi = async item => {
    const sendAuthType = item.isAuthorized === 1 ? 'EDITOR_PROHIBIT' : 'EDITOR_AUTHORIZE'
    try {
      const data = await ApiConfig.request({
        data: [
          {
            editorId: item.editorId,
            editorAuthority: sendAuthType,
          },
        ],
        query: {},
        path: {},
        method: HttpMethod.PATCH,
        url: `${EndPoint.EDITOR}/auth`,
      })
      if (data.data.isSuccess) {
        onLoadMemberManageMentList()
      }
    } catch (error) {
      alert(error)
    }
  }
  //가져오기 onLoad
  //생성 onCreate
  //수정 onUpdate
  //삭제 onDelete

  useEffect(() => {
    onLoadMemberManageMentList()
  }, [])

  const handleShowMemberManageMentDetailModal = async item => {
    setShowModal(!showModal)
  }

  const handleMemberManageMentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      number: -1,
      editorId: 1,
      loginId: '',
      createdAt: '',
      accessAuthority: '',
      isAuthorized: 1,
    })
    setShowModal(!showModal)
  }

  return (
    <>
      <PageHeader title='회원관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardHeader>
              <CForm className='row g-3'>
                <CCol xs={1}>
                  <CButton color='primary' onClick={onLoadMemberManageMentList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleMemberManageMentAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowMemberManageMentDetailModal}
                columns={EditorColumns}
                className={'userList'}
                func={handleOnCheckedApi}
                datePickerHidden={false}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MemberManageMent
