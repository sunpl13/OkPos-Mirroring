const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,
  RECRUITMENT: `${API}/admin/recruitment`,
  TALENTPOOL: `${API}/admin/talent-pool`,
  EDITOR: `${API}/admin/editor`,
  HOME_INQUIRY: `${API}/admin/inquiry`,

  // ------ 파트너 센터 페이지
  GET_PARTNER_USERS: `${API}/admin/partner/users`, // 유저 리스트
  GET_PARTNER_INACTIVE_USERS: `${API}/admin/partner/users/inactive`, // 탈퇴 유저 리스트
  GET_PARTNER_INQUIRIES: `${API}/admin/partner/inquiries`, // 1:1 문의 리스트
  GET_PARTNER_NOTICES: `${API}/admin/partner/notices`, // 공지사항 리스트
  GET_PARTNER_AGENCYAPPLICANT: `${API}/admin/partner/notices/agencyApplicant`, // 영업점 딜러 지원 리스트

  // ------ 가맹점 전용 공식몰 페이지
  GET_MALL_USERS: `${API}/admin/mall/users`,
  GET_MALL_USER: `${API}/admin/mall/users/:userId`,
  GET_MALL_RESIGNUSERS: `${API}/admin/mall/users/resign`,
  GET_MALL_RESIGNUSER: `${API}/admin/mall/users/resign/:userId`,

  GET_MALL_INQUIRIES: `${API}/admin/mall/inquiries`,
  GET_MALL_INQUIRY: `${API}/admin/mall/inquiries/:inquiryId`,
  POST_MALL_INQUIRY_REPLY: `${API}/admin/mall/inquiryReplies`,
  PATCH_MALL_UPDATE_INQUIRY_REPLY: `${API}/admin/mall/inquiryReplies`,
  PATCH_MALL_DELETE_INQUIRY: `${API}/admin/mall/inquiries/:inquiryId`,

  GET_MALL_FAQS: `${API}/admin/mall/faqs`,
  GET_MALL_FAQ: `${API}/admin/mall/faqs/:faqId`,
  POST_MALL_FAQ: `${API}/admin/mall/faqs`,
  PATCH_MALL_UPDATE_FAQ: `${API}/admin/mall/faqs`,
  PATCH_MALL_DELETE_FAQ: `${API}/admin/mall/faqs/:faqId`,

  GET_MALL_DATAROOMS: `${API}/admin/mall/datarooms`,
  GET_MALL_DATAROOM: `${API}/admin/mall/datarooms/:dataRoomId`,
  POST_MALL_DATAROOMS: `${API}/admin/mall/datarooms`,

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

    // ------ 파트너센터 페이지
    [EndPoint.GET_PARTNER_USERS]: {},
    [EndPoint.GET_PARTNER_INACTIVE_USERS]: {},
    [EndPoint.GET_PARTNER_INQUIRIES]: {},
    [EndPoint.GET_PARTNER_NOTICES]: {},
    [EndPoint.GET_PARTNER_AGENCYAPPLICANT]: {},
  },
  post: {
    [EndPoint.POST_LOGIN]: {},
    [EndPoint.POST_REGISTER]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.POST_MALL_INQUIRY_REPLY]: {},
    [EndPoint.POST_MALL_FAQ]: {},
    [EndPoint.POST_MALL_DATAROOMS]: {},
  },
  patch: {
    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.PATCH_MALL_UPDATE_INQUIRY_REPLY]: {},
    [EndPoint.PATCH_MALL_DELETE_INQUIRY]: {},
    [EndPoint.PATCH_MALL_UPDATE_FAQ]: {},
    [EndPoint.PATCH_MALL_DELETE_FAQ]: {},
  },
  put: {},
  delete: {},
}

export default ApiMapper
