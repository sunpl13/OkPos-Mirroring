import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBank,
  cilSpeedometer,
  cilUser,
  cilHome,
  cilChatBubble,
  cilBasket,
  cilFindInPage,
  cilFolderOpen,
  cilBook,
} from '@coreui/icons'
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
    component: CNavItem,
    name: '조회',
    to: '/test/test-list',
  },
  {
    component: CNavItem,
    name: '생성',
    to: '/test/create-test',
  },

  {
    component: CNavTitle,
    name: '파트너센터',
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
      {
        component: CNavItem,
        name: '공지사항 리스트',
        to: '/users/notice/noticeList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '영업 대리점',
    icon: <CIcon icon={cilHome} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '딜러 지원 리스트',
        to: '/users/dealerSupport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '자료실',
    icon: <CIcon icon={cilFolderOpen} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '자료 리스트',
        to: '/material/materialList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '발주, 유지보수 신청',
    icon: <CIcon icon={cilBasket} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '발주 신청 리스트',
        to: '/order/orderList',
      },
      {
        component: CNavItem,
        name: '유지보수 신청 리스트',
        to: '/order/appliedForMaintenanceList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '교육 일정',
    icon: <CIcon icon={cilBook} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '교육 일정 리스트',
        to: '/education/educationScheduleList',
      },
      {
        component: CNavItem,
        name: '교육 신청 리스트',
        to: '/education/educationApplicationList',
      },
    ],
  },

  /*
  오케이포스 홈페이지 메뉴 작성
  */
  {
    component: CNavTitle,
    name: '오케이포스 홈페이지',
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
        name: '인재풀 관리',
        to: '/home/talentRetention',
      },
      {
        component: CNavItem,
        name: '1:1 문의',
        to: '/home/QnA',
      },
    ],
  },
  /*
  가맹점 전용 공식몰 코드 작성
  */
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
        name: '회원 관리',
        to: '/official/users',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 관리',
        to: '/official/resign/users',
      },
    ],
  },
  /*
  {
    component: CNavItem,
    name: '롤링 배너 관리',
    to: '/official/banners',
    icon: <CIcon icon={cilLibrary} customClassName='nav-icon' />,
  },
  */
  {
    component: CNavItem,
    name: '1:1 문의 관리',
    to: '/official/inquirys',
    icon: <CIcon icon={cilChatBubble} customClassName='nav-icon' />,
  },
  {
    component: CNavItem,
    name: 'FAQ 관리',
    to: '/official/faq',
    icon: <CIcon icon={cilFindInPage} customClassName='nav-icon' />,
  },
  {
    component: CNavItem,
    name: '자료실 관리',
    to: '/official/archieve',
    icon: <CIcon icon={cilFolderOpen} customClassName='nav-icon' />,
  },
  {
    component: CNavGroup,
    name: '주문 관리',
    icon: <CIcon icon={cilBasket} customClassName='nav-icon' />,
    items: [
      {
        component: CNavItem,
        name: '주문 현황',
        to: '/users/userList',
      },
      {
        component: CNavItem,
        name: '교환 현황',
        to: '/users/withdrawalUsers',
      },
      {
        component: CNavItem,
        name: '취소 현황',
        to: '/users/withdrawalUsers',
      },
    ],
  },

  /*
  대리점 전용 파트너센터 코드 작성
  */
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
