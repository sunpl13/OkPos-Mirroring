import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Table, Typography} from 'antd'
import AntDesignListForm from './AntDesignListForm'
const {Text} = Typography

const NumberOfStoresList = ({items, columns, className, label}) => {
  const [listItems, setListItems] = useState([])
  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <>
      <AntDesignListForm
        listIndex={1}
        label={label || ''}
        columns={columns}
        items={listItems}
        className={className}
        summary={pageData => {
          let totalCat = 0
          let totalPos = 0
          let totalKiosk = 0
          let totalSum = 0
          pageData.forEach(({catcount, poscount, kioskcount, sum}) => {
            totalCat += catcount
            totalPos += poscount
            totalKiosk += kioskcount
            totalSum += sum
          })
          return (
            <>
              <Table.Summary.Row style={{background: '#E0FFFF'}}>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text>{Number(totalCat)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{Number(totalPos)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{Number(totalKiosk)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{Number(totalSum)}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{'  '}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          )
        }}
      />
    </>
  )
}

NumberOfStoresList.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.array,
  label: PropTypes.string,
  className: PropTypes.string,
}

export default NumberOfStoresList
