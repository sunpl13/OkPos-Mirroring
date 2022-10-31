import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))

// 유저 리스트
const UserList = React.lazy(() => import('./pages/partnerCenter/users/Userlist'))
const WithdrawalUsers = React.lazy(() => import('./pages/partnerCenter/users/WithdrawalUsers'))

// 1:1 문의 리스트
const UserInquiryList = React.lazy(() => import('./pages/partnerCenter/users/inquiry/UserInquiryList'))

// 공지사항 리스트
const NoticeList = React.lazy(() => import('./pages/partnerCenter/users/notice/NoticeList'))

const Employment = React.lazy(() => import('./pages/employment/Employment'))
const Popup = React.lazy(() => import('./pages/popup/PopUpPage'))

// 가맹점 전용 공식몰 페이지

// 회원관리
const OfficailMallUserList = React.lazy(() => import('./pages/officialMall/users/Userlist'))
const OfficailMallWithdrawalUserList = React.lazy(() => import('./pages/officialMall/users/WithdrawalUsers'))

// 1:1 문의 관리
const OfficailMallInquiryList = React.lazy(() => import('./pages/officialMall/inquiry/InquiryList'))

const routes = [
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},

  {path: `/test/test-list`, name: '조회', element: TestList},
  {path: `/test/create-test`, name: '생성', element: CreateTest},

  // user
  {path: `/users/userList`, name: 'UserList', element: UserList},
  {path: `/users/withdrawalUsers`, name: 'WithdrawalUsers', element: WithdrawalUsers},

  //employment
  {path: `/home/employment`, name: '채용관리', element: Employment},

  //popup
  {path: `/home/popup`, name: '팝업관리', element: Popup},

  //UserInquiry
  {path: `/users/inquiry/userInquiryList`, name: 'UserInquiryList', element: UserInquiryList},

  // 가맹점 전용 공식몰 페이지

  // 회원관리
  {path: `/official/users`, name: '회원관리', element: OfficailMallUserList},
  {path: `/official/withdrawalUsers`, name: '탈퇴회원관리', element: OfficailMallWithdrawalUserList},

  {path: `/official/inquirys`, name: '문의관리', element: OfficailMallInquiryList},

  //Notice
  {path: `/users/notice/noticeList`, name: 'NoticeList', element: NoticeList},
]

export default routes
