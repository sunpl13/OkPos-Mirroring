const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,
  RECRUITMENT: `${API}/admin/recruitments`,
  TALENTPOOL: `${API}/admin/talents`,
  EDITOR: `${API}/admin/editor`,
  HOME_INQUIRY: `${API}/admin/inquiries`,
  ENGLISH_HOME_INQUIRY: `${API}/admin/english/inquiries`,
  NOTICES: `${API}/admin/notices`,
  GET_NOTICE: `${API}/admin/notices/:id`,
  POST_NOTICE: `${API}/admin/notices`,
  PATCH_NOTICE: `${API}/admin/notices/:noticeId`,
  DELETE_NOTICE: `${API}/admin/notices/:noticeId/d`,
  DATA_ROOM: `${API}/admin/english/datarooms`,
  HOME_BANNER: `${API}/admin/banners`,
  ENGLISH_BANNER: `${API}/admin/english/banners`,

  // ------ 파트너 센터 페이지
  PARTNER_USERS: `${API}/admin/partner/users`, // 유저 리스트
  PARTNER_INACTIVE_USERS: `${API}/admin/partner/users/inactive`, // 탈퇴 유저 리스트
  PARTNER_INQUIRIES: `${API}/admin/partner/inquiries`, // 1:1 문의 리스트
  PARTNER_NOTICES: `${API}/admin/partner/notices`, // 공지사항 리스트
  PARTNER_AGENCYAPPLICANT: `${API}/admin/partner/notices/agencyApplicant`, // 영업점 딜러 지원 리스트
  PARTNER_DATAROOMS: `${API}/admin/partner/dataRooms`, // 자료실 리스트
  PARTNER_ORDERS: `${API}/admin/partner/orders`, // 발주신청 리스트
  PARTNER_MAINTENANCES: `${API}/admin/partner/maintenances`, // 유지보수 신청 리스트
  PARTNER_SCHEDULES: `${API}/admin/partner/educations/schedules`, // 교육일정 리스트
  PARTNER_REGISTRAUINS: `${API}/admin/partner/educations/registrations`, // 교육신청 리스트
  PARTNER_REGISTRAUINS_NOTICES: `${API}/admin/partner/educations/registrations/notices`, // 교육신청 공고 리스트

  // ------ 가맹점 전용 공식몰 페이지
  GET_MALL_USERS: `${API}/admin/mall/users`,
  GET_MALL_USER: `${API}/admin/mall/users/:userId`,
  GET_MALL_RESIGNUSERS: `${API}/admin/mall/users/resign`,
  GET_MALL_RESIGNUSER: `${API}/admin/mall/users/resign/:userId`,

  GET_MALL_INQUIRIES: `${API}/admin/mall/inquiries`,
  GET_MALL_INQUIRY: `${API}/admin/mall/inquiries/:inquiryId`,
  POST_MALL_INQUIRY_REPLY: `${API}/admin/mall/inquiries/:inquiryId/reply`,
  PATCH_MALL_UPDATE_INQUIRY_REPLY: `${API}/admin/mall/inquiries/:inquiryReplyId/reply`,
  PATCH_MALL_DELETE_INQUIRY: `${API}/admin/mall/inquiries/:inquiryId/status`,

  GET_MALL_FAQS: `${API}/admin/mall/faqs`,
  GET_MALL_FAQ: `${API}/admin/mall/faqs/:faqId`,
  POST_MALL_FAQ: `${API}/admin/mall/faqs`,
  PATCH_MALL_UPDATE_FAQ: `${API}/admin/mall/faqs/:faqId`,
  PATCH_MALL_DELETE_FAQ: `${API}/admin/mall/faqs/:faqId/status`,

  GET_MALL_DATAROOMS: `${API}/admin/mall/datarooms`,
  GET_MALL_DATAROOM: `${API}/admin/mall/datarooms/:dataRoomId`,
  POST_MALL_DATAROOM: `${API}/admin/mall/datarooms`,
  PATCH_MALL_UPDATE_DATAROOM: `${API}/admin/mall/datarooms/:dataRoomId`,
  PATCH_MALL_DELETE_DATAROOM: `${API}/admin/mall/datarooms/:dataRoomId/status`,

  GET_MALL_BANNERS: `${API}/admin/mall/banners`,
  GET_MALL_BANNER: `${API}/admin/mall/banners/:bannerId`,
  POST_MALL_BANNER: `${API}/admin/mall/banners`,
  PATCH_MALL_UPDATE_BANNER: `${API}/admin/mall/banners/:bannerId`,
  PATCH_MALL_DELETE_BANNER: `${API}/admin/mall/banners/:bannerId/status`,

  GET_MALL_ORDERS: `${API}/admin/mall/orders`,
  GET_MALL_CANCEL_ORDERS: `${API}/admin/mall/orders/cancel`,
  GET_MALL_EXCHANGE_ORDERS: `${API}/admin/mall/orders/exchange`,
  PATCH_MALL_ORDERS_STATUS: `${API}/admin/mall/orders/:orderItemId`,
  POST_MALL_ORDERS_STATUS: `${API}/admin/mall/orders/:orderItemId`,
  PATCH_MALL_ORDERS_INVOICE: `${API}/admin/mall/orders/:orderItemId/invoice`,
  PATCH_MALL_CANCEL_ORDERS_STATUS: `${API}/admin/mall/orders/:orderCancelId/cancel`,
  PATCH_MALL_EXCHANGE_ORDERS_STATUS: `${API}/admin/mall/orders/:orderExchangeId/exchange`,
  GET_MALL_NOTICES: `${API}/admin/mall/notices`, // 공지사항 리스트 조회
  GET_MALL_NOTICE: `${API}/admin/mall/notices/:noticeId`, // 공지사항 상세 조회
  POST_MALL_NOTICE: `${API}/admin/mall/notices`, // 공지사항 작성
  PATCH_MALL_NOTICE: `${API}/admin/mall/notices/:noticeId`, // 공지사항 수정
  DELETE_MALL_NOTICE: `${API}/admin/mall/notices/:noticeId/d`, // 공지사항 삭제

  // ------ 대리점 전용 파트너 센터
  POST_REGISTER: `${API}/admin/join`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.GET_MALL_USERS]: {},
    [EndPoint.GET_MALL_USER]: {},
    [EndPoint.GET_MALL_RESIGNUSERS]: {},
    [EndPoint.GET_MALL_RESIGNUSER]: {},
    [EndPoint.GET_MALL_INQUIRIES]: {},
    [EndPoint.GET_MALL_INQUIRY]: {},
    [EndPoint.GET_MALL_FAQS]: {},
    [EndPoint.GET_MALL_FAQ]: {},
    [EndPoint.GET_MALL_DATAROOMS]: {},
    [EndPoint.GET_MALL_DATAROOM]: {},
    [EndPoint.GET_MALL_BANNERS]: {},
    [EndPoint.GET_MALL_BANNER]: {},
    [EndPoint.GET_MALL_ORDERS]: {},
    [EndPoint.GET_MALL_CANCEL_ORDERS]: {},
    [EndPoint.GET_MALL_EXCHANGE_ORDERS]: {},
    [EndPoint.GET_MALL_NOTICES]: {},
    [EndPoint.GET_MALL_NOTICE]: {},

    // ------ 파트너센터 페이지
    [EndPoint.PARTNER_USERS]: {},
    [EndPoint.PARTNER_INACTIVE_USERS]: {},
    [EndPoint.PARTNER_INQUIRIES]: {},
    [EndPoint.PARTNER_NOTICES]: {},
    [EndPoint.PARTNER_AGENCYAPPLICANT]: {},
    [EndPoint.PARTNER_ORDERS]: {},
    [EndPoint.PARTNER_MAINTENANCES]: {},
    [EndPoint.PARTNER_SCHEDULES]: {},
    [EndPoint.PARTNER_REGISTRAUINS]: {},
    [EndPoint.PARTNER_REGISTRAUINS_NOTICIES]: {},
  },
  post: {
    [EndPoint.POST_LOGIN]: {},
    [EndPoint.POST_REGISTER]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.POST_MALL_INQUIRY_REPLY]: {},
    [EndPoint.POST_MALL_FAQ]: {},
    [EndPoint.POST_MALL_DATAROOM]: {},
    [EndPoint.POST_MALL_BANNER]: {},
    [EndPoint.POST_MALL_ORDERS_STATUS]: {},
    [EndPoint.POST_MALL_NOTICE]: {},
  },
  patch: {
    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.PATCH_MALL_UPDATE_INQUIRY_REPLY]: {},
    [EndPoint.PATCH_MALL_DELETE_INQUIRY]: {},
    [EndPoint.PATCH_MALL_UPDATE_FAQ]: {},
    [EndPoint.PATCH_MALL_DELETE_FAQ]: {},
    [EndPoint.PATCH_MALL_UPDATE_DATAROOM]: {},
    [EndPoint.PATCH_MALL_DELETE_DATAROOM]: {},
    [EndPoint.PATCH_MALL_UPDATE_BANNER]: {},
    [EndPoint.PATCH_MALL_DELETE_BANNER]: {},
    [EndPoint.PATCH_MALL_ORDERS_STATUS]: {},
    [EndPoint.PATCH_MALL_ORDERS_INVOICE]: {},
    [EndPoint.PATCH_MALL_CANCEL_ORDERS_STATUS]: {},
    [EndPoint.PATCH_MALL_EXCHANGE_ORDERS_STATUS]: {},
    [EndPoint.PATCH_MALL_NOTICE]: {},
    [EndPoint.DELETE_MALL_NOTICE]: {},
  },
  put: {},
  delete: {},
}

export default ApiMapper
