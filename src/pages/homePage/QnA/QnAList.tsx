import React, {useState} from 'react'
import PageHeader from '../../../components/common/PageHeader'
import {testQnAValues} from '../../test/testConstant'
import {CCard, CCardBody, CCardHeader, CCol, CForm, CButton, CRow} from '@coreui/react'
import ListTemplate from '../../../components/list/ListTemplate'
import {qnaColumns} from '../../../utils/columns/homePage/qna/Columns'
import {inquirys} from '../../../utils/columns/homePage/qna/ColumnsSelectedValue'
import QnADetail from '../../../components/Modal/homePage/QnA/QnADetail'
export type QnAType = {
  No: number
  name: string
  email: string
  pNum: string
  inquiryType: string
}

const QnAList = () => {
  const [items, setItems] = useState<QnAType[]>([])
  const [selectedItem, setSelectedItem] = useState<QnAType>({
    No: -1,

    name: '',
    email: '',
    pNum: '',
    inquiryType: '',
  })

  const [showModal, setShowModal] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleRetrieveTestList = async () => {
    setItems(testQnAValues as QnAType[])
  }

  const handleShowEmploymentDetailModal = (item: QnAType) => {
    setSelectedItem(item)
    setShowModal(!showModal)
  }

  const handleEmploymentAddModal = () => {
    setIsReadOnly(false)
    setSelectedItem({
      No: -1,

      name: '',
      email: '',
      pNum: '',
      inquiryType: '',
    })
    setShowModal(!showModal)
  }

  const handleEmployDetailOnChange = ({target}: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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
                  <CButton color='primary' onClick={handleRetrieveTestList}>
                    조회하기
                  </CButton>
                </CCol>
                <CCol xs={1}>
                  <CButton color='primary' onClick={handleEmploymentAddModal}>
                    추가
                  </CButton>
                </CCol>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <ListTemplate
                items={items}
                onClick={handleShowEmploymentDetailModal}
                selectedOptions={inquirys}
                columns={qnaColumns}
                className={'userList'}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <QnADetail
        onChange={handleEmployDetailOnChange}
        visible={showModal}
        value={selectedItem}
        setVisible={setShowModal}
        isReadOnly={isReadOnly}
        setIsReadOnly={setIsReadOnly}
      />
    </main>
  )
}

export default QnAList
