const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,

  // ------ 가맹점 전용 공식몰 페이지
  GET_V1_MALL_USERS: `${API}/admin/mall/users`,
  GET_V1_MALL_USER: `${API}/admin/mall/users/:userId`,

  // ------ 대리점 전용 파트너 센터
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.GET_V1_MALL_USERS]: {},
    [EndPoint.GET_V1_MALL_USER]: {},
  },
  post: {
    [EndPoint.POST_LOGIN]: {},
    [EndPoint.POST_TEST_V1_REGISTER]: {},
  },
  patch: {},
  put: {},
  delete: {},
}

export default ApiMapper
