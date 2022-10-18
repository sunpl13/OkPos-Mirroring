import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'

import {AppSidebarNav} from './AppSidebarNav'

import neordinaryLogo from '../assets/neordinary-logo.svg'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector(state => state.sidebarUnfoldable)
  const sidebarShow = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      position='fixed'
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={visible => {
        dispatch({type: 'set', sidebarShow: visible})
      }}
    >
      <CSidebarBrand className='d-none d-md-flex' to='/'>
        <CImage className='sidebar-brand-full' src={neordinaryLogo} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className='d-none d-lg-flex'
        onClick={() => dispatch({type: 'set', sidebarUnfoldable: !unfoldable})}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
