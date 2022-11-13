const API = process.env.REACT_APP_API

export const EndPoint = {
  // ------ 오케이포스 홈페이지
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_LOGIN: `${API}/admin/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,

  // ------ 가맹점 전용 공식몰 페이지
  GET_MALL_USERS: `${API}/admin/mall/users`,
  GET_MALL_USER: `${API}/admin/mall/users/:userId`,
  GET_MALL_RESIGNUSERS: `${API}/admin/mall/users/resign`,
  GET_MALL_RESIGNUSER: `${API}/admin/mall/users/resign/:userId`,

  // ------ 대리점 전용 파트너 센터
  POST_REGISTER: `${API}/admin/join`,

  GET_RECRUITMENT_LIST: `${API}/admin/recruitment`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},

    // ------ 가맹점 전용 공식몰 페이지
    [EndPoint.GET_MALL_USERS]: {},
    [EndPoint.GET_MALL_USER]: {},
    [EndPoint.GET_MALL_RESIGNUSERS]: {},
    [EndPoint.GET_MALL_RESIGNUSER]: {},
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
