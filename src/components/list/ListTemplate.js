import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {
  CBadge,
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CImage,
  CInputGroup,
  CRow,
} from '@coreui/react'
import ThumbnailModal from './ThumbnailModal'
import RangeDatePicker from '../common/RangeDatePicker'
import moment from 'moment'
import ApiConfig, {HttpMethod} from '../../dataManager/apiConfig'
import {EndPoint} from '../../dataManager/apiMapper'

const ListTemplate = ({
  items, // 리스트 아이템
  onClick, // 리스트 클릭 이벤트 ex) Modal
  columns, // 리스트의 헤더
  className, // 리스트의 클레스 네임
  onDelete, // 리스트 아이템 삭제
  selectedOptions, // 리스트의 selectBox 옵션
  datePickerHidden = true, // 기간선택 데이터 피커 출력 유무
  itemPerPageHidden = true, // 리스트의 페이지마다 출력될 아이템 개수 선택 박스 출력 유무
  searchInputHidden = true, // 검색창 출력 유무
  checkBoxInputHidden = false, // 체크박스 출력 유무
  func, //보낼 함수
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)
  const [imgClick, setImgClick] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
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
  // 리스트 아이템 체크박스
  const handleItemOnSelected = item => {
    setListItems(
      listItems.map(value =>
        value._id === item._id
          ? {
              ...value,
              checked: !item.checked,
            }
          : value,
      ),
    )
    if (!item.checked) {
      item.checked = true
    } else {
      item.checked = false
    }
    console.log(item)
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

  // 함수 선언

  // 상태값 Color get 함수
  const getBadgeColor = status => {
    switch (status) {
      case 'ACTIVE':
        return 'success'
      case 'INACTIVE':
        return 'danger'
      case true:
        return 'success'
      case false:
        return 'danger'
      default:
        return 'primary'
    }
  }

  // 상태값 Text get 함수
  const getBadgeText = status => {
    switch (status) {
      case 'ACTIVE':
        return '활성화'
      case 'INACTIVE':
        return '비활성화'
      case true:
        return '완료'
      case false:
        return '미완료'
      default:
        return '기타'
    }
  }

  const testOnClick = (event, url) => {
    event.stopPropagation()
    setShowModal(!showModal)
    setImgClick(url)
  }
  const modalOnClick = () => {
    setShowModal(!showModal)
  }
  const handleDeleteOnClick = (event, item) => {
    event.stopPropagation()
    onDelete(item)
  }

  const handleOnCheckedApi = async item => {
    console.log(item)
    // try {
    //   const data = await ApiConfig.request({
    //     data: {
    //       editorIds: [item.editorId],
    //     },
    //     query: {},
    //     path: {},
    //     method: HttpMethod.PATCH,
    //     url: `${EndPoint.EDITOR}/auth`,
    //   })
    //   console.log(data)
    // } catch (error) {
    //   alert(error)
    // }
  }

  useEffect(() => {
    setListItems(items)
    if (columns) {
      setSearchOption(columns[0].key)
    }
  }, [items])

  useEffect(() => {
    // data picker 에 선택된 값
    if (endDate) {
      setFilterItems(
        listItems.filter(
          value =>
            moment(value.createdAt, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') >= startDate &&
            moment(value.createdAt, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') <= endDate,
        ),
      )
      // 생성일로 필터
    } else {
      setFilterItems('')
    }
  }, [endDate])

  const handleSearchOnClick = () => {
    console.log('test')
  }
  const handleSearchItemOnClick = key => {
    setSearchOption(key)
  }
  return (
    <>
      <CRow className={'justify-content-end'}>
        {searchInputHidden && (
          <CCol xs={4}>
            <CInputGroup>
              <CDropdown alignment='end' variant='input-group'>
                <CDropdownToggle color='secondary' variant='outline' split>
                  {searchOption}
                </CDropdownToggle>
                <CFormInput aria-label='Text input with segmented dropdown button' />
                <CDropdownMenu>
                  {columns.map(({key}) => {
                    if (key !== 'createdAt') {
                      return (
                        <CDropdownItem key={key} onClick={() => handleSearchItemOnClick(key)}>
                          {key}
                        </CDropdownItem>
                      )
                    }
                  })}
                </CDropdownMenu>
              </CDropdown>
              <CButton type='button' color='secondary' variant='outline' onClick={() => handleSearchOnClick()}>
                검색
              </CButton>
            </CInputGroup>
          </CCol>
        )}

        <CCol xs={4}>
          {datePickerHidden && <RangeDatePicker setStartDate={setStartDate} setEndDate={setEndDate} />}
        </CCol>
      </CRow>
      <br />
      <CSmartTable
        items={filterItems || listItems}
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
        scopedColumns={{
          checkBox: item => (
            <td onClick={event => event.stopPropagation()}>
              <CFormCheck onChange={() => handleItemOnSelected(item)} checked={item.checked || false} />
            </td>
          ),
          isAuthorized: item => (
            <td onClick={event => event.stopPropagation()}>
              <CFormCheck onChange={() => func(item)} checked={item.isAuthorized || false} />
            </td>
          ),
          // 상태
          status: ({status}) => (
            <td>
              <CBadge color={getBadgeColor(status)}>{getBadgeText(status)}</CBadge>
            </td>
          ),
          // 1:1 문의 답변 상태
          reply: ({reply}) => (
            <td>
              <CBadge color={getBadgeColor(reply)}>{getBadgeText(reply)}</CBadge>
            </td>
          ),
          // 단일 이미지
          image: ({image}) => (
            <td>
              <CImage rounded src={image} alt='' width={100} height={60} />
            </td>
          ),
          // 이미지 리스트
          images: ({images}) => (
            <td onClick={event => (images.length !== 0 ? testOnClick(event, images) : onClick)}>
              <CImage rounded src={images.length === 0 ? '' : images[0]} alt='' width={100} height={60} />
            </td>
          ),
          deleteBtn: item => (
            <td onClick={event => handleDeleteOnClick(event, item)}>
              <CBadge color={'danger'}>삭제</CBadge>
            </td>
          ),
          //
          //category: ({category}) => <td>{selectedOptions ? selectedOptions[category] : ''}</td>,
          jobType: ({jobType}) => <td>{selectedOptions ? selectedOptions[jobType] : ''}</td>,
          education: ({education}) => <td>{selectedOptions ? selectedOptions[education] : ''}</td>,
          inquiryType: ({inquiryType}) => <td>{selectedOptions ? selectedOptions[inquiryType] : ''}</td>,
          career: ({career}) => <td>{selectedOptions ? selectedOptions[career] : ''}</td>,
          proceed: ({proceed}) => <td>{proceed ? '채용중' : '채용 마감'}</td>,
          deliveryStatus: ({deliveryStatus}) => (
            <td>
              <CBadge color={'primary'}>{selectedOptions ? selectedOptions[deliveryStatus] : 'Not Data'} </CBadge>
            </td>
          ),
          productImg: ({productImg}) => (
            <td>
              <CImage rounded src={productImg || ''} alt='' width={100} height={60} />
            </td>
          ),
          startedAt: ({startedAt}) => <td>{moment(startedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          closedAt: ({closedAt}) => <td>{moment(closedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          createdAt: ({createdAt}) => <td>{moment(createdAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          deletedAt: ({deletedAt}) => <td>{moment(deletedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          updatedAt: ({updatedAt}) => <td>{moment(updatedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          noticeFiles: ({noticeFiles}) => <td>{noticeFiles?.length} 개</td>,
        }}
        noItemsLabel={'데이터가 없습니다.'}
        //itemsPerPageSelect={itemPerPageHidden}
        itemsPerPage={20}
      />
      {showModal ? (
        <ThumbnailModal visible={showModal} setVisible={setShowModal} onClick={modalOnClick} url={imgClick} />
      ) : (
        ''
      )}
    </>
  )
}

ListTemplate.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  selectedOptions: PropTypes.object,
  datePickerHidden: PropTypes.bool,
  itemPerPageHidden: PropTypes.bool,
}

export default ListTemplate
