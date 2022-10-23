import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge} from '@coreui/react'

const ListTemplate = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])
  const getBadge = status => {
    switch (status) {
      case true:
        return 'success'
      case false:
        return 'danger'
      default:
        return 'primary'
    }
  }

  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <CSmartTable
      items={listItems}
      columns={columns || null}
      activePage={1}
      columnFilter
      columnSorter
      pagination
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
        status: ({status}) => (
          <td>
            <CBadge color={getBadge(status)}>{status ? 'Activate' : 'Disabled'}</CBadge>
          </td>
        ),
      }}
      noItemsLabel={'Not Date'}
      itemsPerPageSelect
      itemsPerPage={10}
    />
  )
}

ListTemplate.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
}

export default ListTemplate
