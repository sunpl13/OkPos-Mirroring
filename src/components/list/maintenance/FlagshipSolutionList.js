import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import AntDesignListForm from './AntDesignListForm'

const FlagshipSolutionList = ({items, onClick, columns, className}) => {
  const [listItems, setListItems] = useState([])

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
      />
      <AntDesignListForm
        columns={columns || []}
        dataSource={listItems || []}
        className={className}
        pagination={false}
        title={'주력 솔루션 및 VAN 사'}
        listIndex={3}
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
