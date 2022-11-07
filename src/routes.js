import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))

// ------ 오케이포스 홈페이지

const Employment = React.lazy(() => import('./pages/homePage/employment/Employment'))
const TalentRetention = React.lazy(() => import('./pages/homePage/talentRetention/TalentRetention'))
const HomePageQnA = React.lazy(() => import('./pages/homePage/QnA/QnAList'))

// ------ 가맹점 전용 공식몰 페이지

// 회원관리
const OfficailMallUserList = React.lazy(() => import('./pages/officialMall/users/UserList'))
const OfficailMallWithdrawalUserList = React.lazy(() => import('./pages/officialMall/users/WithdrawalUsers'))
// 1:1 문의 관리
const OfficailMallInquiryList = React.lazy(() => import('./pages/officialMall/inquiry/InquiryList'))
// FAQ 관리
const OfficialMallFaqList = React.lazy(() => import('./pages/officialMall/faq/FaqList'))
// 자료실 관리
const OfficialMallArchieve = React.lazy(() => import('./pages/officialMall/archieve/Archieve'))

// ------ 대리점 전용 파트너 센터

// 유저 리스트
const UserList = React.lazy(() => import('./pages/partnerCenter/users/Userlist'))
const WithdrawalUsers = React.lazy(() => import('./pages/partnerCenter/users/WithdrawalUsers'))

// 1:1 문의 리스트
const UserInquiryList = React.lazy(() => import('./pages/partnerCenter/users/inquiry/UserInquiryList'))

// 공지사항 리스트
const NoticeList = React.lazy(() => import('./pages/partnerCenter/users/notice/NoticeList'))

// 영업 데리점 딜러 지원 리스트
const DealerSupportList = React.lazy(() => import('./pages/partnerCenter/agency/DealerSupportList'))

// 자료실
const MaterialList = React.lazy(() => import('./pages/partnerCenter/material/MaterialList'))

// 발주, 유지보수 신청
const OrderList = React.lazy(() => import('./pages/partnerCenter/order/OrderList'))
const AppliedForMaintenanceList = React.lazy(() => import('./pages/partnerCenter/order/AppliedForMaintenanceList'))

const routes = [
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},
  {path: `/test/test-list`, name: '조회', element: TestList},
  {path: `/test/create-test`, name: '생성', element: CreateTest},

  // ------ 오케이포스 홈페이지

  //홈페이지 관리
  {path: `/home/employment`, name: '채용관리', element: Employment},
  {path: '/home/talentRetention', name: '인재풀 관리', element: TalentRetention},
  {path: '/home/QnA', name: '1:1문의', element: HomePageQnA},

  // ------ 가맹점 전용 공식몰 페이지

  // 회원관리
  {path: `/official/users`, name: '회원관리', element: OfficailMallUserList},
  {path: `/official/withdrawalUsers`, name: '탈퇴회원관리', element: OfficailMallWithdrawalUserList},
  // 1:1 문의 관리
  {path: `/official/inquirys`, name: '문의관리', element: OfficailMallInquiryList},
  // FAQ 관리
  {path: `/official/faq`, name: 'FAQ관리', element: OfficialMallFaqList},
  // 자료실 관리
  {path: `/official/archieve`, name: '자료실 관리', element: OfficialMallArchieve},

  // ------ 대리점 전용 파트너 센터

  // user
  {path: `/users/userList`, name: 'UserList', element: UserList},
  {path: `/users/withdrawalUsers`, name: 'WithdrawalUsers', element: WithdrawalUsers},

  // materialList
  {path: `/material/materialList`, name: 'MaterialList', element: MaterialList},

  //Notice
  {path: `/users/notice/noticeList`, name: 'NoticeList', element: NoticeList},

  // Dealer Support
  {path: '/users/dealerSupport', name: 'DealerSupport', element: DealerSupportList},

  //UserInquiry
  {path: `/users/inquiry/userInquiryList`, name: 'UserInquiryList', element: UserInquiryList},

  // orderList
  {path: `/order/orderList`, name: 'OrderList', element: OrderList},
  {path: `/order/appliedForMaintenanceList`, name: 'AppliedForMaintenanceList', element: AppliedForMaintenanceList},
]

export default routes
