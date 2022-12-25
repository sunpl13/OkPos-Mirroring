import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge, CButton, CCol, CFormInput, CFormLabel, CFormSelect, CRow} from '@coreui/react'
import RangeDatePicker from '../../common/RangeDatePicker'
import moment from 'moment'
import {isPrice} from '../../../utils/utility'
import {getMallBadgeColor} from '../../../utils/badge/officalMall/Badge'

const OrderTableList = ({
  items, // 리스트 아이템
  onClick, // 리스트 클릭 이벤트 ex) Modal
  columns, // 리스트의 헤더
  className, // 리스트의 클레스 네임
  datePicker, // 기간선택 데이터 피커 출력 유무
  dataSearch,
  setSelectedProduct, // radioButton 함수
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // 함수 선언

  const modalOnClick = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    setListItems(items)
  }, [items])

  useEffect(() => {
    // data picker 에 선택된 값
    // console.log('filter', startDate, endDate)
    if (endDate) {
      if (listItems[0]?.cancelDate) {
        setFilterItems(
          listItems.filter(
            value =>
              moment(value.cancelDate, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') >= startDate &&
              moment(value.cancelDate, 'YYYYMMDDHHmmss').format('YYYY-MM-DD') <= endDate,
          ),
        )
      } else if (listItems[0]?.orderDate) {
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
  }, [startDate, endDate])

  // 주문 상태 값 저장
  const orderStatusChange = e => {
    const {value} = e.target
    if (value) {
      setFilterItems(
        listItems.filter(order => {
          for (let i = 0; i < order.subInfos.length; i++)
            if (order.subInfos[i].orderStatus === value) {
              return true
            }
        }),
      )
    } else {
      setFilterItems(listItems)
    }
  }

  const handleDatePicker = month => {
    moment.locale('ko')
    setEndDate(moment().format('YYYY-MM-DD'))
    setStartDate(moment().subtract(month, 'M').format('YYYY-MM-DD'))
  }

  return (
    <>
      <CRow className={'d-md-flex justify-content-md-end pt-2 pb-2'}>
        {dataSearch && (
          <CFormSelect className='me-md-2 orderStatusForm' size='sm' onChange={orderStatusChange}>
            <option value=''>전체보기</option>
            <option value='결제 대기'>결제 대기</option>
            <option value='결제 완료'>결제 완료</option>
            <option value='배송 준비중'>배송 준비중</option>
            <option value='배송중'>배송중</option>
            <option value='배송 완료'>배송 완료</option>
            <option value='취소 요청'>취소 요청</option>
            <option value='교환 요청'>교환 요청</option>
          </CFormSelect>
        )}

        {datePicker && (
          <>
            <CButton
              className='me-md-2 dateSearchBtn'
              color='secondary'
              variant='outline'
              size='sm'
              onClick={() => handleDatePicker(1)}
            >
              1개월
            </CButton>
            <CButton
              className='me-md-2 dateSearchBtn'
              color='secondary'
              variant='outline'
              size='sm'
              onClick={() => handleDatePicker(3)}
            >
              3개월
            </CButton>
            <CButton
              className='me-md-2 dateSearchBtn'
              color='secondary'
              variant='outline'
              size='sm'
              onClick={() => handleDatePicker(6)}
            >
              6개월
            </CButton>
            <CCol xs={4}>
              <RangeDatePicker className='me-md-2' setStartDate={setStartDate} setEndDate={setEndDate} />
            </CCol>
          </>
        )}
      </CRow>

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
          // 상태
          orderStatus: ({orderStatus}) => (
            <td>
              <CBadge size='sm' color={getMallBadgeColor(orderStatus)}>
                {orderStatus}
              </CBadge>
            </td>
          ),
          orderItemPrice: ({orderItemPrice}) => <td className='orderItemPrice'>{isPrice(orderItemPrice)}</td>,
          cancelPrice: ({cancelPrice}) => <td className='cancelPrice'>{isPrice(cancelPrice)}</td>,
          totalPrice: ({totalPrice}) => <td className='totalPrice'>{isPrice(totalPrice)}</td>,
          orderDate: ({orderDate}) => <td>{moment(orderDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          payDate: ({payDate}) => <td>{moment(payDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
          cancelDate: ({cancelDate}) => <td>{moment(cancelDate, 'YYYYMMDDHHmmss').format('YYYY. MM. DD')}</td>,
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
