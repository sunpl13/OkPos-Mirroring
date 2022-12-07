import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {CImage, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler} from '@coreui/react'
import {AppSidebarNav} from './AppSidebarNav'
import neordinaryLogo from '../assets/neordinary-logo.svg'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import {sidebarUnfoldableToggle} from '../store/sidebars'
// sidebar nav config
import navigation from '../_nav'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const unfoldable = useSelector(state => state.sideBar.sidebarUnfoldable)
  const sidebarShow = useSelector(state => state.sideBar.sidebarShow)

  return (
    <CSidebar
      position='fixed'
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={visible => {
        dispatch({type: 'SIDEBAR_TOGGLE', payload: visible})
      }}
    >
      <CSidebarBrand className='d-none d-md-flex' to='/'>
        <LogoImage className='sidebar-brand-full' src={neordinaryLogo} onClick={() => navigate('/')} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className='d-none d-lg-flex' onClick={() => dispatch(sidebarUnfoldableToggle())} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

const LogoImage = styled(CImage)`
  cursor: pointer;
`
