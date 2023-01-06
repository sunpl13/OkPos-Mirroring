import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import styled from 'styled-components'

const ManagementTarget = ({items, onClick, columns, label}) => {
  const [listItems, setListItems] = useState([])
  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <CCol>
      <CFormLabel className='col-form-label'>
        <span>{label || ' * '}</span>
      </CFormLabel>
      <CCol className={'searchInput pb-3'}>
        <CFormInput type='text' placeholder='주력 H/W 모델명을 입력해 주세요' aria-label='Disabled input' />
      </CCol>
      <CCol>
        <CustomCTable stripedColumns>
          <CTableHead color='light'>
            <CTableHeaderCell key={'a'}>구분</CTableHeaderCell>
            <CTableHeaderCell key={'b'}>제조사/모델명</CTableHeaderCell>
            <CTableHeaderCell key={'c'}>구분</CTableHeaderCell>
            <CTableHeaderCell key={'d'}>제조사/모델명</CTableHeaderCell>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell className={'rowTitle'}>POS</CTableDataCell>
              <CTableDataCell>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
              </CTableDataCell>
              <CTableDataCell className={'rowTitle'}>KIOSK</CTableDataCell>
              <CTableDataCell>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
                <CCol>1</CCol>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CustomCTable>
      </CCol>
    </CCol>
  )
}

ManagementTarget.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
}

export default ManagementTarget

const CustomCTable = styled(CTable)`
  text-align: center;
  & th {
    padding: 0.5rem 0;
  }
  & .rowTitle {
    display: table-cell;
    vertical-align: middle;
  }
  & tbody td {
    padding: 0;
    & .col {
    padding: 0.5rem;
    &.col:not(:last-child) {
      border-bottom: 1px solid #D8DBE0;
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
    font-size: 17px;
    margin-right: 0.2rem;
  }
`
