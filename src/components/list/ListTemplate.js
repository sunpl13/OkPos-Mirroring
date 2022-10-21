import React, {useCallback, useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import {CSmartPagination} from '../custom/pagination/CSmartPagination'
import {CCardBody} from '@coreui/react'
import PropTypes from 'prop-types'

const ListTemplate = ({items, size, handleRowClick}) => {
  const [listItems, setListItems] = useState([])
  const [itemTotalCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const downloadUsers = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        setListItems(result)
      })
  }, [])

  useEffect(() => {
    downloadUsers()
  }, [downloadUsers])
  const test = item => {
    console.log(item)
  }
  return (
    <CCardBody>
      <CSmartTable
        items={listItems}
        activePage={currentPage}
        columnFilter
        columnSorter
        pagination
        clickableRows
        onRowClick={test}
        tableProps={{
          hover: true,
          responsive: true,
        }}
        itemsPerPageSelect
        itemsPerPage={10}
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
