import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {CSmartTable} from '../../custom/smart-table/CSmartTable'
import {CFormLabel, CFormSelect} from '@coreui/react'
import styled from 'styled-components'
import {
  orderCategorySelectedOptions,
  orderVanSelectedOptions,
} from '../../../utils/columns/partnerCenter/SelectCategoryOptions'

const OrderList = ({
  className,
  items, // 리스트 아이템
  onClick, // 리스트 클릭 이벤트 ex) Modal
  columns, // 리스트의 헤더
  selectedOptions, // 리스트의 selectBox 옵션
  func, //보낼 함수
  title, // 리스트 제목
  vanOnChange,
  readOnly,
}) => {
  // Local state 선언
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <>
      <CFormLabel>
        <CFormLabel className='col-form-label'>
          <span>{title || ''}</span>
        </CFormLabel>
      </CFormLabel>
      <CSmartTable
        items={listItems || []}
        columns={columns || null}
        paginationProps={{
          limit: 10,
        }}
        onRowClick={onClick}
        tableProps={{
          responsive: true,
          striped: true,
          align: 'middle',
          className: className,
        }}
        scopedColumns={{
          catcount: ({catcount}) => <td>{catcount || '0'}</td>,
          poscount: ({poscount}) => <td>{poscount || '0'}</td>,
          kioskcount: ({kioskcount}) => <td>{kioskcount || '0'}</td>,
          sum: ({sum}) => <td>{sum || '0'}</td>,
          note: ({note}) => <td>{note || ''}</td>,
          category: item => (
            <td>
              <OrderSelected
                id={'category'}
                value={item.category}
                options={orderCategorySelectedOptions}
                onChange={event => vanOnChange(item, event)}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </td>
          ),
          name: ({name}) => <td>{name}</td>,
          van: item => (
            <td>
              <OrderSelected
                id={'van'}
                value={item?.van}
                options={orderVanSelectedOptions}
                onChange={event => vanOnChange(item, event)}
                readOnly={readOnly}
                disabled={readOnly}
              />
            </td>
          ),
        }}
      />
    </>
  )
}

OrderList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  selectedOptions: PropTypes.object,
  datePickerHidden: PropTypes.bool,
  itemPerPageHidden: PropTypes.bool,
}

export default OrderList

const OrderSelected = styled(CFormSelect)`
  border: none;
`
