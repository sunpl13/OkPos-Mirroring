import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Table, Typography} from 'antd'
import AntDesignListForm from './AntDesignListForm'
const {Text} = Typography

const NumberOfStoresList = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <>
      <AntDesignListForm
        listIndex={1}
        title={'신청 가맹점 수'}
        columns={columns}
        items={listItems}
        className={className}
        summary={pageData => {
          let totalCat = 0
          let totalPos = 0
          let totalKiosk = 0
          let totalSum = 0
          pageData.forEach(({cat, pos, kiosk, sum}) => {
            totalCat += cat
            totalPos += pos
            totalKiosk += kiosk
            totalSum += sum
          })
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text>{totalCat}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalPos}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalKiosk}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalSum}</Text>
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
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
}

export default NumberOfStoresList
