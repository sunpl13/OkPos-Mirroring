const API = process.env.REACT_APP_API

export const EndPoint = {
  GET_V1_TEST_AUTO_LOGIN: `${API}/test/v1/jwt/check/:isManual`,
  POST_TEST_V1_LOGIN: `${API}/test/v1/login`,
  POST_TEST_V1_REGISTER: `${API}/test/v1/register`,
}

const ApiMapper = {
  get: {
    [EndPoint.GET_V1_TEST_AUTO_LOGIN]: {},
  },
  post: {
    [EndPoint.POST_TEST_V1_LOGIN]: {},
    [EndPoint.POST_TEST_V1_REGISTER]: {},
  },
  patch: {},
  put: {},
  delete: {},
}

export default ApiMapper
