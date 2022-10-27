import React, {useEffect, useState} from 'react'
import {CSmartTable} from '../custom/smart-table/CSmartTable'
import PropTypes from 'prop-types'
import {CBadge, CImage} from '@coreui/react'
import ThumbnailModal from './ThumbnailModal'

const ListTemplate = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [imgClick, setImgClick] = useState('')

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

  useEffect(() => {
    setListItems(items)
  }, [items])

  return (
    <>
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
          images: ({images}) => (
            <td onClick={event => (images.length !== 0 ? testOnClick(event, images) : onClick)}>
              <CImage rounded src={images.length === 0 ? '' : images[0]} alt='' width={100} height={60} />
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
}

export default ListTemplate
