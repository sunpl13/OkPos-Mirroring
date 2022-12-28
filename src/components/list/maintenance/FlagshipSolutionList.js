import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import AntDesignListForm from './AntDesignListForm'
import {Table} from 'antd'
import {CFormSelect} from '@coreui/react'

const FlagshipSolutionList = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])
  console.log(items)
  useEffect(() => {
    setListItems(items)
  }, [items])
  return (
    <>
      <AntDesignListForm
        columns={columns || []}
        items={listItems || []}
        className={className}
        title={'주력 솔루션 및 VAN 사'}
        listIndex={2}
        summary={pageData => {
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>기타</Table.Summary.Cell>
                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                <Table.Summary.Cell index={2}></Table.Summary.Cell>
                <Table.Summary.Cell index={3}>기타</Table.Summary.Cell>
                <Table.Summary.Cell index={4}></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          )
        }}
      />
    </>
  )
}

FlagshipSolutionList.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
}

export default FlagshipSolutionList
