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

// 영업 데리점 딜러 지원 리스트
const DealerSupportList = React.lazy(() => import('./pages/partnerCenter/agency/DealerSupportList'))

const Employment = React.lazy(() => import('./pages/employment/Employment'))
const Popup = React.lazy(() => import('./pages/popup/PopUpPage'))
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

  //Notice
  {path: `/users/notice/noticeList`, name: 'NoticeList', element: NoticeList},

  // Dealer Support
  {path: '/users/dealerSupport', name: 'DealerSupport', element: DealerSupportList},
]

export default routes
