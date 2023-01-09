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
  const datePickerOps = [{key: 'createdAt', value: '최초 등록일'}]

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
      return data?.data.result.responses
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
        return onLoadMemberManageMentList()
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

  return (
    <>
      <PageHeader title='회원관리' />
      <CRow>
        <CCol xs={12}>
          <CCard className='mb-4'>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowMemberManageMentDetailModal}
                columns={EditorColumns}
                className={'userList'}
                func={handleOnCheckedApi}
                datePickerOptions={datePickerOps}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MemberManageMent
