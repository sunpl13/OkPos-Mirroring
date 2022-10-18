import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilLockLocked, cilUser} from '@coreui/icons'
// import ApiConfig, {HttpMethod} from "../../dataManager/apiConfig"
// import {EndPoint} from "../../dataManager/apiMapper"
import {isEmpty} from '../../utils/utility'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit().then()
    }
  }

  const handleSubmit = async () => {
    try {
      if (isEmpty(email)) {
        alert('이메일을 입력해 주세요.')
        return
      }

      if (isEmpty(password)) {
        alert('패스워드를 입력해 주세요.')
        return
      }

      /*const {data: response} = await ApiConfig.request({
        data: {
          email: email,
          password: password,
        },
        method: HttpMethod.POST,
        url: EndPoint.POST_TEST_V1_LOGIN,
      })

      if (!response ?.isSuccess || isEmpty(response ?.result ?.jwt)) {
        alert(response ?.message)
        return
      }

      window.localStorage.setItem("jwt", response.result.jwt)
      window.localStorage.setItem("expiredAt", response.result.expiredAt)
      window.localStorage.setItem("partnerName", response.result.partnerName)*/

      window.localStorage.setItem('userName', '테스터')

      navigate(`/`)
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }
  }

  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md={8}>
            <CCardGroup>
              <CCard className='p-4'>
                <CCardBody>
                  <CForm>
                    <h1>파트너 관리자 로그인</h1>
                    <p className='text-medium-emphasis'>
                      파트너 관리자 회원가입은 승인 절차가 필요합니다.
                      <br />
                      승인받은 이메일, 비밀번호를 입력해주세요.
                    </p>
                    <CInputGroup className='mb-3'>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type='email'
                        id='email'
                        placeholder='이메일주소를 입력해주세요.'
                        autoComplete='on'
                        maxLength={50}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <CFormFeedback invalid>이메일을 올바르게 입력해주세요.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className='mb-4'>
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type='password'
                        id='password'
                        placeholder='비밀번호를 입력해주세요.'
                        autoComplete='off'
                        onKeyPress={onKeyPress}
                        maxLength={20}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <CFormFeedback invalid>비밀번호를 올바르게 입력해주세요.</CFormFeedback>
                    </CInputGroup>
                    <div className='d-grid'>
                      <CButton color='primary' onClick={handleSubmit}>
                        로그인
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className='text-white bg-primary py-5'>
                <CCardBody className='text-center'>
                  <div>
                    <h2>파트너 관리자 회원가입은 신청 절차를 거쳐야합니다.</h2>
                    <p>너디너리 관리자에게 문의해주세요.</p>
                    <Link to='/register'>
                      <CButton
                        color='primary'
                        className='mt-3'
                        active
                        tabIndex={-1}
                        onClick={() => navigate('/register')}
                      >
                        비밀번호 설정하러가기
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
