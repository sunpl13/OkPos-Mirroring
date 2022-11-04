import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {Table, Typography} from 'antd'
import styled from 'styled-components'
import {generalListApplicationColumns} from '../utils/columns/partnerCenter/Columns'
import {GeneralList} from '../utils/columns/partnerCenter/ColumnsTestData'
const {Text} = Typography
const GeneralTable = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    setListItems(items)
  }, [items])

  const handleDeleteOnClick = (event, item) => {
    event.stopPropagation()
    console.log(item)
  }

  return (
    <>
      <AntTable
        style={{width: '100%', display: 'flex', position: 'relative'}}
        columns={generalListApplicationColumns || []}
        dataSource={GeneralList || []}
        columnTitle={[{key: 1, region: '서울, 경기, 인천'}]}
        className={className}
        pagination={false}
        bordered
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
                  <Text>{' * '}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          )
        }}
      />
    </>
  )
}

GeneralTable.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
}

export default GeneralTable

const AntTable = styled(Table)`
  &.userList {
    width: 100%;
    & > div {
    width:100%
  }
  & th {
    width: 100&;
    min-width: auto;
    background:#d6d2f8;
  }
  & th,
  & td{
    text-align: center;
    padding:8px;
  }
  
`
