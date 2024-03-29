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

const ManagementTarget = ({items, label}) => {
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
      <TableContainer>
        <CustomCTable>
          <CTableHead id='head' color='light'>
            <CTableRow>
              <CTableHeaderCell style={{width: '15%'}} key={'a'}>
                구분
              </CTableHeaderCell>
              <CTableHeaderCell key={'b'}>제조사/모델명</CTableHeaderCell>
              <CTableHeaderCell style={{width: '15%'}} key={'c'}>
                구분
              </CTableHeaderCell>
              <CTableHeaderCell key={'d'}>제조사/모델명</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell className={'rowTitle'}>POS</CTableDataCell>
              <CTableDataCell>
                {listItems?.length !== 0 ? (
                  listItems?.map((value, index) => {
                    if (value.category === 'POS') {
                      return (
                        <CCol key={index}>
                          {value?.hardware} / {value?.modelName}
                        </CCol>
                      )
                    }
                    return null
                  })
                ) : (
                  <CCol></CCol>
                )}
              </CTableDataCell>
              <CTableDataCell className={'rowTitle'}>KIOSK</CTableDataCell>
              <CTableDataCell>
                {listItems?.length !== 0 ? (
                  listItems?.map((value, index) => {
                    if (value.category === 'KIOSK') {
                      return (
                        <CCol key={index}>
                          {value?.hardware} / {value?.modelName}
                        </CCol>
                      )
                    }
                    return null
                  })
                ) : (
                  <CCol></CCol>
                )}
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CustomCTable>
      </TableContainer>
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
  width: 100%;
  & th {
    padding: 0.5rem 0;
  }
  & .rowTitle {
    display: table-cell;
    vertical-align: middle;
    background: #ebedef;
  }
  & thead#head {
    background: #ebedef;
  }
  & tbody td {
    padding: 0.5rem;
    & .col {
      padding: 0.5rem;
    }
  }
`
const TableContainer = styled(CCol)`
  overflow-x: auto;
`
