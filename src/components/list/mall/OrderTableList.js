import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CButton, CCol, CFormInput, CFormLabel, CFormSelect, CRow} from '@coreui/react'
import RangeDatePicker from '../../common/RangeDatePicker'
import moment from 'moment'
import {isPrice} from '../../../utils/utility'

const OrderTableList = ({
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
  setSelectedProduct, // radioButton 함수
  onLoadMallorderList,
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)

  const [imgClick, setImgClick] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [searchOption, setSearchOption] = useState({
    category: '',
    value: '',
  })

  const [allSelected, setAllSelected] = useState(false)

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

  const modalOnClick = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    setListItems(items)
  }, [items])

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

  // 주문 상태 값 저장
  const orderStatusChange = e => {
    const {value} = e.target
    if (value) {
      setFilterItems(
        listItems.filter(order => {
          for (let i = 0; i < order.subInfos.length; i++)
            if (order.subInfos[i].orderStatus === value) {
              console.log(order.subInfos[i].orderStatus)
              return true
            }
        }),
      )
    } else {
      setFilterItems(listItems)
    }
  }

  return (
    <>
      {datePickerHidden && (
        <CRow className={'d-md-flex justify-content-md-end pt-2 pb-2'}>
          <CFormSelect className='me-md-2 orderStatusForm' size='sm' onChange={orderStatusChange}>
            <option value=''>전체보기</option>
            <option value='결제 대기'>결제 대기</option>
            <option value='결제 완료'>결제 완료</option>
            <option value='배송 준비중'>배송 준비중</option>
            <option value='배송중'>배송중</option>
            <option value='배송 완료'>배송 완료</option>
          </CFormSelect>
          <CButton className='me-md-2 dateSearchBtn' color='secondary' variant='outline' size='sm'>
            1개월
          </CButton>
          <CButton className='me-md-2 dateSearchBtn' color='secondary' variant='outline' size='sm'>
            3개월
          </CButton>
          <CButton className='me-md-2 dateSearchBtn' color='secondary' variant='outline' size='sm'>
            6개월
          </CButton>
          <CCol xs={4}>
            <RangeDatePicker className='me-md-2' setStartDate={setStartDate} setEndDate={setEndDate} />
          </CCol>
        </CRow>
      )}
      <CSmartTable
        items={filterItems || listItems}
        columns={columns || null}
        columnSorter
        pagination
        columnFilter
        paginationProps={{
          limit: 10,
        }}
        tableHeadProps={{
          color: 'primary',
        }}
        clickableRows
        onRowClick={onClick}
        tableProps={{
          hover: true,
          responsive: true,
          striped: true,
          align: 'middle',
          className: className,
        }}
        scopedColumns={{
          radioButton: (item, index) => (
            <td>
              <input id={`${index}`} name='select-radio' type='radio' onClick={() => setSelectedProduct(item)} />
            </td>
          ),

          invoiceNumber: (item, index) => (
            <td className='d-md-flex justify-content-md-end'>
              <CFormInput id={`${index}`} className='me-md-2' size='sm' onClick={() => setSelectedProduct(item)} />
              <CButton id={`${index}`} className='invoiceNumberBtn' color='warning' size='sm'>
                등록
              </CButton>
            </td>
          ),
          orderItemPrice: ({orderItemPrice}) => <td className='orderItemPrice'>{isPrice(orderItemPrice)}</td>,
          totalPrice: ({totalPrice}) => <td className='totalPrice'>{isPrice(totalPrice)}</td>,
          orderDate: ({orderDate}) => <td>{moment(orderDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          payDate: ({payDate}) => <td>{moment(payDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
        }}
        noItemsLabel={'데이터가 없습니다.'}
        itemsPerPage={20}
      />
    </>
  )
}

OrderTableList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  selectedOptions: PropTypes.object,
  datePickerHidden: PropTypes.bool,
  itemPerPageHidden: PropTypes.bool,
}

export default OrderTableList
