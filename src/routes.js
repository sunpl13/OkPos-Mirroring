import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))

const UserList = React.lazy(() => import('./pages/users/userlist'))
// const UserDetail = React.lazy(() => import('./pages/users/userDetail'))

const Employment = React.lazy(() => import('./pages/employment/Employment'))
const routes = [
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},

  {path: `/test/test-list`, name: '조회', element: TestList},
  {path: `/test/create-test`, name: '생성', element: CreateTest},
  // user
  {path: `/users/userList`, name: 'UserList', element: UserList},

  //employment
  {path: `/home/employment`, name: '채용관리', element: Employment},
]

export default routes
