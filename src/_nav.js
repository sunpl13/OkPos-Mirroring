import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilUser,
  cilHome,
  cilChatBubble,
  cilBasket,
  cilFindInPage,
  cilFolderOpen,
  cilBook,
  cilLibrary,
  cilPeople,
  cilAddressBook,
  cilNotes,
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
    name: '회원관리',
    to: '/member',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    accessauthority: 'HOME',
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
  /*
  대리점 전용 파트너센터 코드 작성
  */
  {
    component: CNavTitle,
    name: '파트너센터',
    accessauthority: 'PARTNER',
  },
  {
    component: CNavGroup,
    name: '회원 관리',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '회원 리스트',
        to: '/partnerCenter/users/userList',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 리스트',
        to: '/partnerCenter/users/withdrawalUsers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '1:1 문의 관리',
    icon: <CIcon icon={cilChatBubble} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '공지사항 리스트',
        to: '/partnerCenter/notice/noticeList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '공지사항 관리',
    icon: <CIcon icon={cilNotes} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '1 : 1 문의 리스트',
        to: '/partnerCenter/inquiry/userInquiryList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '영업 대리점',
    icon: <CIcon icon={cilHome} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '딜러 지원 리스트',
        to: '/partnerCenter/dealerSupport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '자료실',
    icon: <CIcon icon={cilFolderOpen} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '자료 리스트',
        to: '/partnerCenter/dataRoom/materialList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '발주, 유지보수 신청',
    icon: <CIcon icon={cilBasket} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '발주 신청 리스트',
        to: '/partnerCenter/order/orderList',
      },
      {
        component: CNavItem,
        name: '유지보수 신청 리스트',
        to: '/partnerCenter/order/appliedForMaintenanceList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '교육 일정',
    icon: <CIcon icon={cilBook} customClassName='nav-icon' />,
    accessauthority: 'PARTNER',
    items: [
      {
        component: CNavItem,
        name: '교육 일정 리스트',
        to: '/partnerCenter/education/educationScheduleList',
      },
      {
        component: CNavItem,
        name: '교육 신청서 리스트',
        to: '/partnerCenter/education/educationApplicationList',
      },
      {
        component: CNavItem,
        name: '교육 신청 리스트',
        to: '/partnerCenter/education/registrationsList',
      },
    ],
  },

  /*
  오케이포스 홈페이지 메뉴 작성
  */
  {
    component: CNavTitle,
    name: '오케이포스 홈페이지',
    accessauthority: 'HOME',
  },
  {
    component: CNavGroup,
    name: '롤링배너 관리',
    icon: <CIcon icon={cilLibrary} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '롤링배너 관리',
        to: '/home/rolling-banner',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '채용 관리',
    icon: <CIcon icon={cilPeople} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '채용 관리',
        to: '/home/employment',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '인재풀 관리',
    icon: <CIcon icon={cilAddressBook} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '인재풀 관리',
        to: '/home/talentRetention',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '1:1 문의',
    icon: <CIcon icon={cilChatBubble} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '1:1 문의',
        to: '/home/QnA',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '공지사항',
    icon: <CIcon icon={cilNotes} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '공지사항',
        to: '/home/notice',
      },
    ],
  },

  /*
  가맹점 전용 공식몰 코드 작성
  */
  {
    component: CNavTitle,
    name: '가맹점 전용 공식몰',
    accessauthority: 'MALL',
  },
  {
    component: CNavGroup,
    name: '회원 관리',
    icon: <CIcon icon={cilUser} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: '회원 관리',
        to: '/mall/users',
      },
      {
        component: CNavItem,
        name: '탈퇴 회원 관리',
        to: '/mall/resign/users',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '롤링 배너 관리',
    icon: <CIcon icon={cilLibrary} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: '롤링 배너 관리',
        to: '/mall/banner',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '1:1 문의 관리',
    icon: <CIcon icon={cilChatBubble} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: '1:1 문의 관리',
        to: '/mall/inquiry',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'FAQ 관리',
    icon: <CIcon icon={cilFindInPage} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: 'FAQ 관리',
        to: '/mall/faq',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '자료실 관리',
    icon: <CIcon icon={cilFolderOpen} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: '자료실 관리',
        to: '/mall/dataroom',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '주문 관리',
    icon: <CIcon icon={cilBasket} customClassName='nav-icon' />,
    accessauthority: 'MALL',
    items: [
      {
        component: CNavItem,
        name: '주문 현황',
        to: '/mall/order',
      },
      {
        component: CNavItem,
        name: '취소 현황',
        to: '/mall/cancel',
      },
      {
        component: CNavItem,
        name: '교환 현황',
        to: '/mall/exchange',
      },
    ],
  },

  /*
  영문 홈페이지
  */
  {
    component: CNavTitle,
    name: '영문 홈페이지',
    accessauthority: 'HOME',
  },
  {
    component: CNavGroup,
    name: '롤링배너 관리',
    icon: <CIcon icon={cilLibrary} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '롤링배너 관리',
        to: '/home/en/rolling-banner',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Data Room',
    icon: <CIcon icon={cilFolderOpen} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: 'Data Room',
        to: '/home/en/data-room',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '1:1 문의',
    icon: <CIcon icon={cilChatBubble} customClassName='nav-icon' />,
    accessauthority: 'HOME',
    items: [
      {
        component: CNavItem,
        name: '1:1 문의',
        to: '/home/en/inquiry',
      },
    ],
  },
]

export default _nav
