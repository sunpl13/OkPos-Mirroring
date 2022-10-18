import React, {useRef, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
// import {EndPoint} from "../../dataManager/apiMapper"
// import ApiConfig, {HttpMethod} from "../../dataManager/apiConfig"
import Select from 'react-select'
import {testOptions, testTableColumns, testTableValues} from './testConstant'
import TestInfo from '../../components/TestInfo'
import TestInfo1 from '../../components/TestInfo1'
import {CSmartTable} from '../../components/custom/smart-table/CSmartTable'
import {CSmartPagination} from '../../components/custom/pagination/CSmartPagination'

const TestList = () => {
  const [page, setPage] = useState(1)
  const size = 10

  const [, setTestName] = useState('')
  const [isCheckTest, setIsCheckTest] = useState(false)

  const [selectedTestOption, setSelectedTestOption] = useState({
    value: 'test',
    label: '테스트',
  })

  const [items, setItems] = useState([])
  const [itemTotalCount] = useState(0)

  const [activeKey, setActiveKey] = useState('')
  const [selectedTestId, setSelectedTestId] = useState(0)
  const testInfoRef = useRef()

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleRetrieveTestList(page).then()
    }
  }

  function handlePageChange(selectedPage) {
    if (selectedPage === 0) {
      return
    }
    setPage(selectedPage)
    handleRetrieveTestList(selectedPage).then()
  }

  function handleRowClick(item) {
    setSelectedTestId(item.id)
    setActiveKey('TestInfo')
    testInfoRef.current.handleRetrieveTest(item.id)
  }

  // const handleRetrieveTestList = async (selectedPage = 1) => {
  const handleRetrieveTestList = async () => {
    setItems(testTableValues)
    /*try {
      setActiveKey('')

      const {data: response} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_TEST_V1_?,
        query: {
          page: selectedPage,
          size: size,
          selectedTestOptionValue: selectedTestOption ? selectedTestOption.value : 'false',
        },
      })

      if (!response?.isSuccess) {
        alert(response?.message)
        return
      }

      setItems(response.result.nerds)
      setItemTotalCount(response.result.totalCount)
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }*/
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <CCol md={4}>
                <CFormLabel>정렬</CFormLabel>
                <CCol sm={10}>
                  <Select options={testOptions} value={selectedTestOption} onChange={setSelectedTestOption} />
                </CCol>
              </CCol>
              <CCol md={4}>
                <CFormCheck
                  id='risingCampFormCheck'
                  label='라이징캠프 여부'
                  checked={isCheckTest}
                  onChange={() => setIsCheckTest(!isCheckTest)}
                />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor='validationTestName'>너드네임</CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type='text'
                    id='validationTestName'
                    placeholder='테스트값을 입력해주세요.'
                    onKeyPress={onKeyPress}
                    onChange={e => setTestName(e.target.value)}
                    autoComplete='off'
                  />
                </CCol>
              </CCol>
              <CCol xs={12}>
                <CButton color='primary' onClick={() => handleRetrieveTestList(page)}>
                  조회하기
                </CButton>
              </CCol>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <CSmartTable
              columns={testTableColumns}
              items={items}
              itemsPerPage={size}
              clickableRows
              onRowClick={handleRowClick}
              onFilteredItemsChange={setItems}
              noItemsLabel={'데이터가 존재하지 않습니다.'}
              tableProps={{
                striped: true,
                hover: true,
                responsive: true,
              }}
            />
            <h6>총 {new Intl.NumberFormat().format(itemTotalCount)}건이 검색되었습니다.</h6>
            <CSmartPagination
              size='sm'
              limit={11}
              activePage={page}
              pages={Math.ceil(itemTotalCount / size)}
              onActivePageChange={handlePageChange}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <hr />
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>상세 정보를 보기 위해 너드를 선택해주세요.</strong>
          </CCardHeader>
          <CCardBody>
            <CNav>
              <CNavItem>
                <CNavLink
                  href='#'
                  active={activeKey === 'TestInfo'}
                  disabled={selectedTestId === 0}
                  onClick={e => {
                    e.preventDefault()
                    setActiveKey('TestInfo')
                  }}
                >
                  테스트 정보
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href='#'
                  active={activeKey === 'TestInfo1'}
                  disabled={selectedTestId === 0}
                  onClick={e => {
                    e.preventDefault()
                    setActiveKey('TestInfo1')
                  }}
                >
                  테스트 정보 1
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane className='p-3' visible={activeKey === 'TestInfo'}>
                <TestInfo ref={testInfoRef} />
                <hr />
              </CTabPane>
              <CTabPane className='p-3' visible={activeKey === 'TestInfo1'}>
                {activeKey === 'TestInfo1' ? (
                  <TestInfo1 selectedTestId={selectedTestId} sendExample={activeKey} />
                ) : (
                  <></>
                )}
                <hr />
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TestList
