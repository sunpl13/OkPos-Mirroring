import React from 'react'

const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))

const TestList = React.lazy(() => import('./pages/test/TestList'))
const CreateTest = React.lazy(() => import('./pages/test/CreateTest'))
const Member = React.lazy(() => import('./pages/member/MemberMagement'))

// ------ 오케이포스 홈페이지

const RoillingBanner = React.lazy(() => import('./pages/homePage/rollingBanner/RollingBanner'))
const Employment = React.lazy(() => import('./pages/homePage/employment/Employment'))
const TalentRetention = React.lazy(() => import('./pages/homePage/talentRetention/TalentRetention'))
const HomePageQnA = React.lazy(() => import('./pages/homePage/QnA/QnAList'))
const HopageNotice = React.lazy(() => import('./pages/homePage/notice/Notice'))
const PopUp = React.lazy(() => import('./pages/homePage/popup/PopUpPage'))

const EnglishInquiry = React.lazy(() => import('./pages/EnHomePage/Inquiry/EnglishInquiry'))
const EnglishDataRoom = React.lazy(() => import('./pages/EnHomePage/dataRoom/DataRoom'))
const EnglishRollingBanner = React.lazy(() => import('./pages/EnHomePage/rollingBanner/RollingBanner'))

// ------ 가맹점 전용 공식몰 페이지
// 회원관리
const OfficailMallUserList = React.lazy(() => import('./pages/officialMall/users/UserList'))
const OfficailMallResignUserList = React.lazy(() => import('./pages/officialMall/users/ResignUserList'))
// 1:1 문의 관리
const OfficailMallInquiryList = React.lazy(() => import('./pages/officialMall/inquiry/InquiryList'))
// FAQ 관리
const OfficialMallFaqList = React.lazy(() => import('./pages/officialMall/faq/FaqList'))
// 자료실 관리
const OfficialMallDataRoom = React.lazy(() => import('./pages/officialMall/dataRoom/DataRoomList'))
// 주문 현황
const OfficialMallOrderList = React.lazy(() => import('./pages/officialMall/order/OrderList'))
const OfficialMallCancelList = React.lazy(() => import('./pages/officialMall/order/CancelList'))
const OfficialMallExchangeList = React.lazy(() => import('./pages/officialMall/order/ExchangeList'))
// 배너 관리
const OfficialMallBannerList = React.lazy(() => import('./pages/officialMall/banner/BannerList'))
const OfficialMallNoticeList = React.lazy(() => import('./pages/officialMall/notice/Notice'))

// ------ 대리점 전용 파트너 센터
// 유저 리스트
const UserList = React.lazy(() => import('./pages/partnerCenter/users/Userlist'))
const WithdrawalUsers = React.lazy(() => import('./pages/partnerCenter/users/InActiveUserList'))

// 1:1 문의 리스트
const UserInquiryList = React.lazy(() => import('./pages/partnerCenter/inquiry/InquiryList'))

// 공지사항 리스트
const NoticeList = React.lazy(() => import('./pages/partnerCenter/notice/NoticeList'))

// 영업 데리점 딜러 지원 리스트
const DealerSupportList = React.lazy(() => import('./pages/partnerCenter/agency/DealerSupportList'))

// 자료실
const MaterialList = React.lazy(() => import('./pages/partnerCenter/dataRoom/DataRoom'))

// 발주, 유지보수 신청
const OrderList = React.lazy(() => import('./pages/partnerCenter/order/OrderList'))
const AppliedForMaintenanceList = React.lazy(() => import('./pages/partnerCenter/order/MaintenancesList'))

// 교육 일정, 교육 신청서, 교육 신청 리스트
const EducationScheduleList = React.lazy(() => import('./pages/partnerCenter/educationSchedule/EducationScheduleList'))
const EducationApplicationList = React.lazy(() =>
  import('./pages/partnerCenter/educationSchedule/EducationApplicationList'),
)
const EducationRegistrationsList = React.lazy(() =>
  import('./pages/partnerCenter/educationSchedule/EducationRegistrationsList'),
)

const routes = [
  {path: '/dashboard', name: 'Dashboard', element: Dashboard},
  {path: `/test/test-list`, name: '조회', element: TestList},
  {path: `/test/create-test`, name: '생성', element: CreateTest},
  {path: `/member`, name: '생성', element: Member},
  // ------ 오케이포스 홈페이지

  //홈페이지 관리
  {path: '/home/rolling-banner', name: '롤링배너 관리', element: RoillingBanner},
  {path: `/home/employment`, name: '채용관리', element: Employment},
  {path: '/home/talentRetention', name: '인재풀 관리', element: TalentRetention},
  {path: '/home/QnA', name: '1:1문의', element: HomePageQnA},
  {path: '/home/notice', name: '공지사항', element: HopageNotice},
  {path: '/home/popup', name: '팝업 관리', element: PopUp},

  // ------ 영문 홈페이지
  {path: `/home/en/inquiry`, name: '1:1 Inquiry', element: EnglishInquiry},
  {path: '/home/en/rolling-banner', name: '롤링배너 관리', element: EnglishRollingBanner},
  {path: '/home/en/data-room', name: 'Data Room', element: EnglishDataRoom},

  // ------ 가맹점 전용 공식몰 페이지
  {path: `/mall/users`, name: '회원 관리', element: OfficailMallUserList},
  {path: `/mall/resign/users`, name: '탈퇴회원 관리', element: OfficailMallResignUserList},
  {path: `/mall/inquiry`, name: '1:1 문의관리', element: OfficailMallInquiryList},
  {path: `/mall/faq`, name: 'FAQ 관리', element: OfficialMallFaqList},
  {path: `/mall/dataroom`, name: '자료실 관리', element: OfficialMallDataRoom},
  {path: `/mall/order`, name: '주문 관리', element: OfficialMallOrderList},
  {path: `/mall/cancel`, name: '취소 요청 관리', element: OfficialMallCancelList},
  {path: `/mall/exchange`, name: '교환 요청 관리', element: OfficialMallExchangeList},
  {path: `/mall/banner`, name: '배너 관리', element: OfficialMallBannerList},
  {path: `/mall/notice`, name: '공지사항 관리', element: OfficialMallNoticeList},

  // ------ 대리점 전용 파트너 센터

  // user
  {path: `/partnerCenter/users/userList`, name: 'UserList', element: UserList},
  {path: `/partnerCenter/users/withdrawalUsers`, name: 'WithdrawalUsers', element: WithdrawalUsers},

  // materialList
  {path: `/partnerCenter/dataRoom/materialList`, name: 'MaterialList', element: MaterialList},

  //Notice
  {path: `/partnerCenter/notice/noticeList`, name: 'NoticeList', element: NoticeList},

  // Dealer Support
  {path: '/partnerCenter/dealerSupport', name: 'DealerSupport', element: DealerSupportList},

  //UserInquiry
  {path: `/partnerCenter/inquiry/userInquiryList`, name: 'UserInquiryList', element: UserInquiryList},

  // orderList
  {path: `/partnerCenter/order/orderList`, name: 'OrderList', element: OrderList},
  {
    path: `/partnerCenter/order/appliedForMaintenanceList`,
    name: 'AppliedForMaintenanceList',
    element: AppliedForMaintenanceList,
  },

  // EducationScheduleList
  {
    path: `/partnerCenter/education/educationScheduleList`,
    name: 'educationScheduleList',
    element: EducationScheduleList,
  },
  {
    path: `/partnerCenter/education/educationApplicationList`,
    name: 'educationApplicationList',
    element: EducationApplicationList,
  },
  {
    path: `/partnerCenter/education/registrationsList`,
    name: 'educationApplicationList',
    element: EducationRegistrationsList,
  },
]

export default routes
