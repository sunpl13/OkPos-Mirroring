import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Table} from 'antd'
import {CFormLabel} from '@coreui/react'
import PropTypes from 'prop-types'

const AntDesignListForm = ({items, onClick, columns, className, label, listIndex, summary, children}) => {
  const getListIndex = num => {
    switch (+num) {
      case 1:
        return '①'
      case 2:
        return '②'
      case 3:
        return '③'
      case 4:
        return '④'
      case 5:
        return '⑤'
      case 6:
        return '⑥'
      case 7:
        return '⑦'
      case 8:
        return '⑧'
      case 9:
        return '⑨'
      case 10:
        return '⑩'
      default:
        return ''
    }
  }
  return (
    <>
      <ListTitleForm id={'tsts'}>
        <CFormLabel className='col-form-label'>
          <span>{`${getListIndex(listIndex)} ${label}` || ''}</span>
        </CFormLabel>
      </ListTitleForm>
      {children}
      <AntTable
        //onRow={(record, rowIndex) => {
        //           return {
        //             onClick: event => {
        //               console.log(event, record, rowIndex)
        //             }, // click row
        //             onDoubleClick: event => {
        //               console.log(event, record, rowIndex)
        //             }, // double click row
        //           }
        //         }}
        onCell={{
          cat: item => {
            console.log()
          },
        }}
        columns={columns || []}
        dataSource={items || []}
        className={className}
        pagination={false}
        summary={summary}
        bordered
      />
    </>
  )
}
AntDesignListForm.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  title: PropTypes.string,
  listIndex: PropTypes.number,
  summary: PropTypes.func,
  children: PropTypes.element,
}
export default AntDesignListForm

const AntTable = styled(Table)`
  * {
    border-radius: 0;
  }
  &.userList {
    width: 100%;
    & > div {
    width:100%
  }
  & th {
    min-width: auto;
    background:#d6d2f8;
  }
  & th,
  & td{
    text-align: center;
    padding:0.3rem;
    & select {
     border:none;
      
    }
  }
  
  }
  &.solutionList{
  & td:nth-child(2),
  & td:nth-child(5){
  padding:0;
    & select{
      padding:0.8rem;
    }
  }
  
`
const ListTitleForm = styled(CFormLabel)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  & span {
    line-height: 1.5;
    margin-right: 0.2rem;
  }
`
