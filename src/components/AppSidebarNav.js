import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

import {CBadge} from '@coreui/react'

export const AppSidebarNav = ({items}) => {
  const location = useLocation()
  const authority = window.sessionStorage.getItem('accessAuthority')
  const auth = window.sessionStorage.getItem('auth')
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className='ms-auto'>
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, authority) => {
    const {component, name, badge, accessauthority, icon, ...rest} = item
    const Component = component
    if (accessauthority === 'ALL') {
      if (auth === 'EDITOR_PROHIBIT' || auth === 'EDITOR_AUTHORIZE') return
    } else {
      if (name === '회원관리' && auth !== 'ADMIN') return
      if (authority !== accessauthority) return
      if (auth === 'EDITOR_PROHIBIT') return
    }

    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }
  const navGroup = (item, index) => {
    const {component, name, icon, to, ...rest} = item
    const Component = component
    if (auth === 'EDITOR_PROHIBIT') return
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      </Component>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items && authority === item.accessauthority ? navGroup(item, index) : navItem(item, index, authority),
        )}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
