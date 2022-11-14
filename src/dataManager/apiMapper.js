const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,

  // ------ 파트너 센터 페이지
  GET_V1_MALL_PARTNER_USERS: `${API}/admin/partner/users`, // 유저 리스트 조회
  GET_V1_MALL_PARTNER_INACTIVE_USERS: `${API}/admin/partner/users/inactive`, // 탈퇴 유저 리스트 조회

  // ------ 가맹점 전용 공식몰 페이지
  GET_V1_MALL_USERS: `${API}/admin/mall/users`,
  GET_V1_MALL_USER: `${API}/admin/mall/users/:userId`,

  // ------ 대리점 전용 파트너 센터
  POST_REGISTER: `${API}/admin/join`,

  RECRUITMENT: `${API}/admin/recruitment`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.GET_V1_MALL_USERS]: {},
    [EndPoint.GET_V1_MALL_USER]: {},

    // ------ 파트너센터 페이지
    [EndPoint.GET_V1_MALL_PARTNER_USERS]: {},
    [EndPoint.GET_V1_MALL_PARTNER_INACTIVE_USERS]: {},
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
