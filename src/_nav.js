import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilBank, cilSpeedometer, cilUser, cilHome} from '@coreui/icons'
import {CNavGroup, CNavItem, CNavTitle} from '@coreui/react'

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
    component: CNavTitle,
    name: '오케이포스 홈페이지',
  },
  {
    component: CNavGroup,
    name: '회원 관리',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '회원 리스트',
        to: '/users/userList',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 리스트',
        to: '/users/withdrawalUsers',
      },
      {
        component: CNavItem,
        name: '1 : 1 문의 리스트',
        to: '/users/inquiry/userInquiryList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '홈페이지 관리',
    icon: <CIcon icon={cilHome} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '채용 관리',
        to: '/home/employment',
      },
      {
        component: CNavItem,
        name: '팝업 관리',
        to: '/home/popup',
      },
    ],
  },
  {
    component: CNavTitle,
    name: '가맹점 전용 공식몰',
  },
  {
    component: CNavGroup,
    name: '회원 관리',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '회원 리스트',
        to: '/users/userList',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 리스트',
        to: '/users/withdrawalUsers',
      },
    ],
  },
  {
    component: CNavTitle,
    name: '대리점 전용 파트너센터',
  },
  {
    component: CNavGroup,
    name: '파트너센터 회원 관리',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '회원 리스트',
        to: '/users/userList',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 리스트',
        to: '/users/withdrawalUsers',
      },
    ],
  },
]

export default _nav
