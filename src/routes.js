import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))

// ------ 오케이포스 홈페이지

const Popup = React.lazy(() => import('./pages/popup/PopUpPage'))
const TalentRetention = React.lazy(() => import('./pages/talentRetention/TalentRetention'))
const Employment = React.lazy(() => import('./pages/homePage/employment/Employment'))

// ------ 가맹점 전용 공식몰 페이지

// 회원관리
const OfficailMallUserList = React.lazy(() => import('./pages/officialMall/users/Userlist'))
const OfficailMallWithdrawalUserList = React.lazy(() => import('./pages/officialMall/users/WithdrawalUsers'))

// 1:1 문의 관리
const OfficailMallInquiryList = React.lazy(() => import('./pages/officialMall/inquiry/InquiryList'))

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

const routes = [
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},

  {path: `/test/test-list`, name: '조회', element: TestList},
  {path: `/test/create-test`, name: '생성', element: CreateTest},

  // ------ 오케이포스 홈페이지

  //홈페이지 관리
  {path: `/home/employment`, name: '채용관리', element: Employment},
  {path: `/home/popup`, name: '팝업관리', element: Popup},
  {path: '/home/talentRetention', name: '인재풀 관리', element: TalentRetention},

  // ------ 가맹점 전용 공식몰 페이지

  // 회원관리
  {path: `/official/users`, name: '회원관리', element: OfficailMallUserList},
  {path: `/official/withdrawalUsers`, name: '탈퇴회원관리', element: OfficailMallWithdrawalUserList},

  // 1:1 문의 관리
  {path: `/official/inquirys`, name: '문의관리', element: OfficailMallInquiryList},

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
]

export default routes
