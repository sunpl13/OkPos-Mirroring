import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilBank, cilSpeedometer, cilUser} from '@coreui/icons'
import {CNavGroup, CNavItem} from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: '대시보드',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName='nav-icon' />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: '테스트 관리',
    icon: <CIcon icon={cilBank} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '조회',
        to: '/test/test-list',
      },
      {
        component: CNavItem,
        name: '생성',
        to: '/test/create-test',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: 'UserList',
        to: '/users/userList',
      },
      {
        component: CNavItem,
        name: 'WithdrawalUsers',
        to: '/users/withdrawalUsers',
      },
    ],
  },
]

export default _nav
