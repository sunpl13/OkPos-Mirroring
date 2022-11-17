const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,

  // ------ 파트너 센터 페이지
  GET_PARTNER_USERS: `${API}/admin/partner/users`, // 유저 리스트
  GET_PARTNER_INACTIVE_USERS: `${API}/admin/partner/users/inactive`, // 탈퇴 유저 리스트
  GET_PARTNER_INQUIRIES: `${API}/admin/partner/inquiries`, // 1:1 문의 리스트
  GET_PARTNER_NOTICES: `${API}/admin/partner/notices`, // 공지사항 리스트

  // ------ 가맹점 전용 공식몰 페이지
  GET_MALL_USERS: `${API}/admin/mall/users`,
  GET_MALL_USER: `${API}/admin/mall/users/:userId`,
  GET_MALL_RESIGNUSERS: `${API}/admin/mall/users/resign`,
  GET_MALL_RESIGNUSER: `${API}/admin/mall/users/resign/:userId`,

  GET_MALL_INQUIRIES: `${API}/admin/mall/inquiries`,
  GET_MALL_INQUIRY: `${API}/admin/mall/inquiries/:inquiryId`,

  // ------ 대리점 전용 파트너 센터
  POST_REGISTER: `${API}/admin/join`,

  RECRUITMENT: `${API}/admin/recruitment`,
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

    // ------ 파트너센터 페이지
    [EndPoint.GET_PARTNER_USERS]: {},
    [EndPoint.GET_PARTNER_INACTIVE_USERS]: {},
    [EndPoint.GET_PARTNER_INQUIRIES]: {},
    [EndPoint.GET_PARTNER_NOTICES]: {},
  },
  post: {
    [EndPoint.POST_LOGIN]: {},
    [EndPoint.POST_REGISTER]: {},
  },
  patch: {},
  put: {},
  delete: {},
}

export default ApiMapper
