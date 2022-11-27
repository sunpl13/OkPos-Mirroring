import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../../../custom/smart-table/CSmartTable'
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'

const options = [
  {key: 'SERVICE_PLANNING', value: '서비스 기획'},
  {key: 'SERVICE_DEVELOPMENT', value: '서비스 개발'},
  {key: 'DESIGN', value: '디자인'},
  {key: 'BUSINESS_DEVELOPMENT', value: '사업 개발'},
  {key: 'B2B_DEVELOPMENT', value: 'B2B 개발'},
  {key: 'B2B_OPERATION', value: 'B2B 운영 '},
  {key: 'CORPORATE_SALES', value: '법인 영업'},
  {key: 'CHANNEL_SALES', value: '채널 영업'},
  {key: 'DEVICE_SALES', value: '디바이스 영업'},
  {key: 'DEVICE_DEVELOPMENT', value: '디바이스 개발'},
  {key: 'OEM_MANAGEMENT', value: 'OEM 관리'},
  {key: 'AS_CENTER', value: 'A/S 센터'},
  {key: 'BUSINESS_MANAGEMENT', value: '경영 관리'},
  {key: 'SETTLEMENT', value: '정산'},
  {key: 'OPERATION_PLANNING', value: '운영 기획'},
  {key: 'CUSTOMER_SUPPORT', value: '고객 지원'},
  {key: 'INTEGRATED_CS', value: '통합 CS '},
  {key: 'ONSITE_SUPPORT_TECHNICAL_SUPPORT', value: '현장 지원-기술 지원'},
  {key: 'ONSITE_SUPPORT_LOGISTICS', value: '현장 지원 - 물류'},
  {key: 'OPERATIONAL_INNOVATION_TF', value: '운영 혁신 TF'},
]

const TalentPoolList = ({
  items, // 리스트 아이템
  onClick, // 리스트 클릭 이벤트 ex) Modal
  columns, // 리스트의 헤더
  className, // 리스트의 클레스 네임
  checkBoxInputHidden = false, // 체크박스 출력 유무
  select,
  setSelect,
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [searchOption, setSearchOption] = useState('')
  const [allSelected, setAllSelected] = useState(false)
  // 리스트 헤더 전체 체크박스
  const handleAllSelectedOnChange = () => {
    setAllSelected(!allSelected)
    setListItems(
      listItems.map(value => ({
        ...value,
        checked: allSelected ? false : true,
      })),
    )
  }

  // 테이블 헤더의 전체 체크박스
  const allCheckBox = {
    key: 'checkBox',
    label: (
      <CFormCheck
        id={'allSelected'}
        type={'checkbox'}
        onChange={event => handleAllSelectedOnChange(event)}
        checked={allSelected}
      />
    ),
    _props: {className: 'checkBox'},
    sorter: false,
    filter: false,
  }

  const newOptions = options.map(item => (
    <option key={item.key} value={item.key}>
      {item.value}
    </option>
  ))

  useEffect(() => {
    setListItems(items)
    if (columns) {
      setSearchOption('이름')
    }
  }, [items])

  const handleSearchOnClick = () => {
    console.log('test')
  }
  const handleSearchItemOnClick = key => {
    setSearchOption(key)
  }
  return (
    <>
      <CRow className={'justify-content-end'}>
        <CCol xs={3}>
          <CFormSelect value={select} onChange={e => setSelect(e.target.value)}>
            <option>선택해주세요</option>
            {newOptions}
          </CFormSelect>
        </CCol>
        <CCol xs={4}>
          <CInputGroup>
            <CDropdown alignment='end' variant='input-group'>
              <CDropdownToggle color='secondary' variant='outline' split>
                {searchOption}
              </CDropdownToggle>
              <CFormInput aria-label='Text input with segmented dropdown button' />
              <CDropdownMenu>
                {['이름', '이메일'].map(key => {
                  return (
                    <CDropdownItem key={key} onClick={() => handleSearchItemOnClick(key)}>
                      {key}
                    </CDropdownItem>
                  )
                })}
              </CDropdownMenu>
            </CDropdown>
            <CButton type='button' color='secondary' variant='outline' onClick={() => handleSearchOnClick()}>
              검색
            </CButton>
          </CInputGroup>
        </CCol>
      </CRow>
      <br />
      <CSmartTable
        items={listItems}
        columns={checkBoxInputHidden ? [allCheckBox, ...columns] : columns || null}
        activePage={1}
        columnSorter
        pagination
        clickableRows
        tableHeadProps={{
          color: 'primary',
        }}
        onRowClick={onClick}
        tableProps={{
          hover: true,
          responsive: true,
          striped: true,
          align: 'middle',
          className: className,
        }}
        noItemsLabel={'데이터가 없습니다.'}
        //itemsPerPageSelect={itemPerPageHidden}
        itemsPerPage={20}
      />
    </>
  )
}

export default TalentPoolList
