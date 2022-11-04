import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge, CImage} from '@coreui/react'
import ThumbnailModal from './ThumbnailModal'
import RangeDatePicker from '../common/RangeDatePicker'

const ListTemplate = ({items, onClick, columns, className, onDelete, selectedOptions, datePickerHidden = true}) => {
  const [listItems, setListItems] = useState([])
  const [filterItems, setFilterItems] = useState()
  const [showModal, setShowModal] = useState(false)
  const [imgClick, setImgClick] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
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
  const testOnClick = (event, url) => {
    event.stopPropagation()
    setShowModal(!showModal)
    setImgClick(url)
  }
  const modalOnClick = () => {
    setShowModal(!showModal)
  }
  const handleDeleteOnClick = (event, item) => {
    event.stopPropagation()
    onDelete(item)
  }
  useEffect(() => {
    setListItems(items)
  }, [items])
  useEffect(() => {
    if (endDate) {
      setFilterItems(listItems.filter(value => value.createdAt >= startDate && value.createdAt <= endDate))
    } else {
      setFilterItems('')
    }
  }, [endDate])

  return (
    <>
      {datePickerHidden && <RangeDatePicker setStartDate={setStartDate} setEndDate={setEndDate} />}
      <CSmartTable
        items={filterItems || listItems}
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
              <CBadge color={getBadge(status)}>{status ? '활성화' : '비활성화'}</CBadge>
            </td>
          ),
          images: ({images}) => (
            <td onClick={event => (images.length !== 0 ? testOnClick(event, images) : onClick)}>
              <CImage rounded src={images.length === 0 ? '' : images[0]} alt='' width={100} height={60} />
            </td>
          ),
          deleteBtn: item => (
            <td onClick={event => handleDeleteOnClick(event, item)}>
              <CBadge color={'danger'}>Delete</CBadge>
            </td>
          ),
          employmentType: ({employmentType}) => <td>{selectedOptions ? selectedOptions[employmentType] : ''}</td>,
          education: ({education}) => <td>{selectedOptions ? selectedOptions[education] : ''}</td>,
          career: ({career}) => <td>{selectedOptions ? selectedOptions[career] : ''}</td>,
          deliveryStatus: ({deliveryStatus}) => (
            <td>
              <CBadge color={'primary'}>{selectedOptions ? selectedOptions[deliveryStatus] : 'Not Data'} </CBadge>
            </td>
          ),
          productImg: ({productImg}) => (
            <td>
              <CImage rounded src={productImg || ''} alt='' width={100} height={60} />
            </td>
          ),
        }}
        noItemsLabel={'Not Date'}
        itemsPerPageSelect
        itemsPerPage={10}
      />
      <ThumbnailModal visible={showModal} setVisible={setShowModal} onClick={modalOnClick} url={imgClick} />
    </>
  )
}

ListTemplate.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
  columns: PropTypes.array,
  className: PropTypes.string,
  onDelete: PropTypes.func,
  selectedOptions: PropTypes.object,
  datePickerHidden: PropTypes.bool,
}

export default ListTemplate
