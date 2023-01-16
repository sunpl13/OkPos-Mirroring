import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge, CCol, CFormCheck, CImage, CRow} from '@coreui/react'
import ThumbnailModal from './ThumbnailModal'
import moment from 'moment'
import {isPrice} from '../../utils/utility'
import {antdImageFormat} from '../../utils/awsCustom'
import defaultImg from '../../assets/defaultImg.png'
import RangeDatePicker from '../common/TestRangeDatePicker'

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
  datePickerOptions, // datePicker selected Options,
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)

  const [imgClick, setImgClick] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [allSelected, setAllSelected] = useState(false)
  const [dumyEnddate, setdumyEnddate] = useState('')
  const [dumyStartdate, setdumyStartdate] = useState('')
  // 리스트 헤더 전체 체크박스
  const handleAllSelectedOnChange = () => {
    setAllSelected(!allSelected)
    setListItems(
      listItems.map(value => ({
        ...value,
        checked: !allSelected,
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
    const lists = await func(item)
    if (dumyEnddate) {
      const datas = lists.filter(value => {
        const date = formatTimes(value['createdAt'], 'YYYYMMDDHHmmss')
        return date >= dumyStartdate && date <= dumyEnddate
      })
      setFilterItems(datas)
    } else {
      setFilterItems('')
    }
  }

  useEffect(() => {
    setListItems(items)
    /*
    if (columns) {
      setSearchOption({
        ...searchOption,
        category: columns[0].key,
      })
    }
    */
  }, [items])

  const formatTimes = (value, format) => {
    if (!value || !format) return undefined
    if (format === 'YYYY-MM-DD') return moment(value, format).format('YYYY-MM-DD')
    if (format === 'YYYYMMDDHHmmss') return moment(value, format).format('YYYY-MM-DD')
  }

  const datePickerOnChange = (startDate, endDate, {key}) => {
    if (endDate) {
      const datas = listItems.filter(value => {
        const date = formatTimes(value[key], 'YYYYMMDDHHmmss')
        return date >= startDate && date <= endDate
      })
      setFilterItems(datas)
      setdumyStartdate(startDate)
      setdumyEnddate(endDate)
    } else {
      setFilterItems('')
      setdumyStartdate('')
      setdumyEnddate('')
    }
  }

  useEffect(() => {
    // data picker 에 선택된 값
    if (endDate) {
      if (listItems[0]?.orderDate) {
        setFilterItems(
          listItems.filter(
            value =>
              moment(value.orderDate, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') >= startDate &&
              moment(value.orderDate, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') <= endDate,
          ),
        )
      } else {
        // default 는 createdAt 그 외 하고 싶은 값은 위에 작성
        setFilterItems(
          listItems.filter(
            value =>
              moment(value.createdAt, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') >= startDate &&
              moment(value.createdAt, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') <= endDate,
          ),
        )
      }

      // 생성일로 필터
    } else {
      setFilterItems('')
    }
  }, [endDate])

  return (
    <>
      <CRow className={'justify-content-end align-items-end'}>
        {/*
        {searchInputHidden && (
          <CCol xs={4}>
            <CInputGroup>
              <CDropdown alignment='end' variant='input-group'>
                <CDropdownToggle color='secondary' variant='outline' split>
                  {searchSelectedBox[searchOption?.category]}
                </CDropdownToggle>
                <CFormInput
                  aria-label='Text input with segmented dropdown button'
                  onChange={({target: {value}}) =>
                    setSearchOption({
                      ...searchOption,
                      value: value,
                    })
                  }
                />
                <CDropdownMenu>
                  {columns.map(({key}) => {
                    if (key !== 'createdAt' && key !== 'noticeFiles' && key !== searchOption.category) {
                      //console.log(searchSelectedBox[key])
                      return (
                        <CDropdownItem
                          key={key}
                          value={searchSelectedBox[key]}
                          onClick={() => handleSearchItemOnClick(key)}
                        >
                          {searchSelectedBox[key]}
                        </CDropdownItem>
                      )
                    }
                  })}
                </CDropdownMenu>
              </CDropdown>
              <CButton type='button' color='secondary' variant='outline' onClick={() => itemOnSearch(searchOption)}>
                검색
              </CButton>
            </CInputGroup>
          </CCol>
        )}
        */}

        {/*{datePickerHidden && (
          <CCol xs={4}>
            <RangeDatePicker setStartDate={setStartDate} setEndDate={setEndDate} />
          </CCol>
        )}*/}
        {datePickerHidden && <RangeDatePicker datePicker={datePickerOnChange} options={datePickerOptions} />}
      </CRow>

      <br />
      <CSmartTable
        items={filterItems || listItems}
        columns={checkBoxInputHidden ? [allCheckBox, ...columns] : columns || null}
        columnSorter
        pagination
        clickableRows
        columnFilter
        //onActivePageChange={selectPage => pageOnChange(selectPage)}
        // paginationProps={{
        //   activePage: currentPage,
        //   align: 'center',
        //   pages: totalPage,
        // }}
        paginationProps={{
          limit: 10,
        }}
        tableHeadProps={{
          id: 'smTable',
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
              <CFormCheck onChange={() => handleOnCheckedApi(item)} checked={item.isAuthorized || false} />
            </td>
          ),
          // 상태
          status: ({status}) => (
            <td>
              <CBadge size='sm' color={getBadgeColor(status)}>
                {getBadgeText(status)}
              </CBadge>
            </td>
          ),
          // 1:1 문의 답변 상태
          reply: ({reply}) => (
            <td>
              <CBadge size='sm' color={getBadgeColor(reply)}>
                {getBadgeText(reply)}
              </CBadge>
            </td>
          ),
          // 공식 홈 1:1 문의 답변 상태
          hasReply: ({hasReply}) => (
            <td>
              <CBadge size='sm' color={getBadgeColor(hasReply)}>
                {getBadgeText(hasReply)}
              </CBadge>
            </td>
          ),
          // 단일 이미지
          image: ({image}) => (
            <td>
              {image ? (
                <CImage rounded thumbnail src={image} alt='' />
              ) : (
                <CImage rounded thumbnail src={defaultImg} alt='' />
              )}
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
          proceed: ({proceed}) => <td>{proceed ? '채용 마감' : '채용중'}</td>,
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
          totalPrice: ({totalPrice}) => <td className='totalPrice'>{isPrice(totalPrice)}</td>,
          orderItemPrice: ({orderItemPrice}) => <td className='orderItemPrice'>{isPrice(orderItemPrice)}</td>,

          // 날짜 변수
          startedAt: ({startedAt}) => <td>{moment(startedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          closedAt: ({closedAt}) => <td>{moment(closedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          createdAt: ({createdAt}) => <td>{moment(createdAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          deletedAt: ({deletedAt}) => <td>{moment(deletedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          updatedAt: ({updatedAt}) => <td>{moment(updatedAt, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          orderDate: ({orderDate}) => <td>{moment(orderDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          payDate: ({payDate}) => <td>{moment(payDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          noticeFiles: ({noticeFiles}) => <td>{noticeFiles?.length} 개</td>,
          imageUrls: ({imageUrls}) => (
            <td
              onClick={event =>
                imageUrls.length !== 0 && imageUrls[0] !== '.' ? testOnClick(event, imageUrls[0]) : onClick
              }
            >
              {imageUrls.length === 0 || imageUrls[0] === '.' ? (
                ''
              ) : (
                <CImage
                  rounded
                  src={antdImageFormat(imageUrls[0])}
                  alt={antdImageFormat(imageUrls[0])}
                  width={100}
                  height={60}
                />
              )}
            </td>
          ),
          invoiceNum: row => <td onClick={event => func(row, event)}>{row.invoiceNum}</td>,
          // 변수명 겹침
          // image: ({image}) => (
          //   <td onClick={event => (image.length !== 0 && image[0] !== '.' ? testOnClick(event, image[0]) : onClick)}>
          //     {image.length === 0 || image[0] === '.' ? (
          //       ''
          //     ) : (
          //       <CImage
          //         rounded
          //         src={antdImageFormat(image[0])}
          //         alt={antdImageFormat(image[0])}
          //         width={100}
          //         height={60}
          //       />
          //     )}
          //   </td>
          // ),
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
