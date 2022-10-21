import React, {useRef, useState} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CButton,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import {testOptions, testTableColumns, testTableValues} from '../test/testConstant'
import TestInfo from '../../components/TestInfo'
import TestInfo1 from '../../components/TestInfo1'
import {CSmartTable} from '../../components/custom/smart-table/CSmartTable'
import {CSmartPagination} from '../../components/custom/pagination/CSmartPagination'
import SortSelect from '../../components/forms/selectForm/SortSelect'
import SearchInput from '../../components/forms/inputForm/SearchInput'

const UserList = () => {
  const [page, setPage] = useState(1)
  const size = 10

  const [setTestName] = useState('')

  const [selectedOption, setSelectedOption] = useState({
    value: 'test1',
    label: '테스트1',
  })

  const [items, setItems] = useState([])
  const [itemTotalCount] = useState(0)

  const [activeKey, setActiveKey] = useState('')
  const [selectedTestId, setSelectedTestId] = useState(0)
  const testInfoRef = useRef()

  const handleSearchOnKeyPress = event => {
    if (event.key === 'Enter') {
      console.log(event.key)
    }
  }
  const handleSortList = event => {
    setSelectedOption(event)
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
    //testInfoRef.current.handleRetrieveTest(item.id)
  }

  const handleRetrieveTestList = async () => {
    setItems(testTableValues)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <CForm className='row g-3'>
              <SortSelect
                md={4}
                sm={6}
                label={'정렬'}
                options={testOptions}
                value={selectedOption}
                onchange={handleSortList}
              />
              <SearchInput
                md={4}
                label='UserSearch'
                id='userSearchInput'
                placeholder='UserSearch'
                onKeyPress={handleSearchOnKeyPress}
                onChange={e => setTestName(e.target.value)}
              />
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

export default UserList
