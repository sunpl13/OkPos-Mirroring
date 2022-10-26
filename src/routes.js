import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))

// 유저 리스트
const UserList = React.lazy(() => import('./pages/users/Userlist'))
const WithdrawalUsers = React.lazy(() => import('./pages/users/WithdrawalUsers'))

// 1:1 문의 리스트
const UserInquiryList = React.lazy(() => import('./pages/users/inquiry/UserInquiryList'))
const UserInquiryDetail = React.lazy(() => import('./components/Modal/users/InquiryDetailModal'))

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
  {path: `/users/inquiry/userInquiryDetail`, name: 'UserInquiryDetail', element: UserInquiryDetail},
]

export default routes
