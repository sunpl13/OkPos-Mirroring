import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CCloseButton, CSidebar, CSidebarHeader} from '@coreui/react'

const AppAside = () => {
  const dispatch = useDispatch()
  const asideShow = useSelector(state => state.asideShow)

  return (
    <CSidebar
      size='lg'
      overlaid
      visible={asideShow}
      onVisibleChange={visible => {
        dispatch({type: 'set', asideShow: visible})
      }}
    >
      <CSidebarHeader className='bg-transparent'>
        <CCloseButton className='float-end' onClick={() => dispatch({type: 'set', asideShow: false})} />
      </CSidebarHeader>
    </CSidebar>
  )
}

export default React.memo(AppAside)
