import React, {useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import {testTableColumns} from '../../pages/test/testConstant'
import {CSmartPagination} from '../custom/pagination/CSmartPagination'
import {CCardBody} from '@coreui/react'
import PropTypes from 'prop-types'

const ListTemplate = props => {
  const {items, size, handleRowClick, page, handleSortList, handlePageChange} = props

  const [itemTotalCount] = useState(0)

  return (
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
  )
}

ListTemplate.propTypes = {
  items: PropTypes.array,
  size: PropTypes.number,
  handleRowClick: PropTypes.func,
  page: PropTypes.number,
  handleSortList: PropTypes.func,
  handlePageChange: PropTypes.func,
}

export default ListTemplate
