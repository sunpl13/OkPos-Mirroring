import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CButton, CCol, CFormInput, CRow} from '@coreui/react'
import RangeDatePicker from '../../common/RangeDatePicker'
import moment from 'moment'
import {isPrice} from '../../../utils/utility'

const ProductList = ({
  items, // 리스트 아이템
  onClick, // 리스트 클릭 이벤트 ex) Modal
  columns, // 리스트의 헤더
  className, // 리스트의 클레스 네임
  datePickerHidden = true, // 기간선택 데이터 피커 출력 유무
  setSelectedProduct, // radioButton 함수
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [selectedItem, setSelectedItem] = useState(false)

  // 함수 선언
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

  const onClickRadioButton = item => {
    setSelectedItem(item)
    setSelectedProduct(item)
  }

  const onClickStop = e => {
    e.stopPropagation()
  }

  return (
    <>
      {datePickerHidden && (
        <CRow className={'d-md-flex justify-content-md-end pt-2 pb-2'}>
          <CButton className='me-md-2' color='success' size='sm'>
            주문상태 변경
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
        paginationProps={{
          limit: 10,
        }}
        tableHeadProps={{
          color: 'primary',
        }}
        clickableRows
        onRowClick={onClickRadioButton}
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
              <input
                id={`${index}`}
                name='select-radio'
                type='radio'
                checked={item.orderItemId === selectedItem.orderItemId}
                readOnly
              />
            </td>
          ),

          invoiceNumber: (item, index) => (
            <td className='d-md-flex justify-content-md-end' onClick={onClickStop}>
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

ProductList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  selectedOptions: PropTypes.object,
  datePickerHidden: PropTypes.bool,
  itemPerPageHidden: PropTypes.bool,
}

export default ProductList
