import {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge, CImage} from '@coreui/react'
import ThumbnailModal from './ThumbnailModal'
import RangeDatePicker from '../common/RangeDatePicker'

const ListTemplate = ({items, onClick, columns, className, onDelete, selectedOptions}) => {
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
      <RangeDatePicker setStartDate={setStartDate} setEndDate={setEndDate} />
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
          position: ({position}) => <td>{selectedOptions ? selectedOptions[position] : ''}</td>,
          education: ({education}) => <td>{selectedOptions ? selectedOptions[education] : ''}</td>,
          career: ({career}) => <td>{selectedOptions ? selectedOptions[career] : ''}</td>,
          inquiryType: ({inquiryType}) => <td>{selectedOptions ? selectedOptions[inquiryType] : ''}</td>,
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
}

export default ListTemplate
