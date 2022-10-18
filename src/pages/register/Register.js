import React, {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
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
import {cilInstitution, cilLockLocked, cilSpreadsheet, cilUser} from '@coreui/icons'
import {useNavigate} from 'react-router-dom'
// import ApiConfig, {HttpMethod} from "../../dataManager/apiConfig"
// import {EndPoint} from "../../dataManager/apiMapper"
import {isEmpty} from '../../utils/utility'

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState('')
  const [, setCorporateRegistrationNumber] = useState('')

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
        alert('비밀번호를 입력해 주세요.')
        return
      }

      if (isEmpty(passwordConfirm)) {
        alert('비밀번호 확인을 입력해 주세요.')
        return
      }

      if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.')
        return
      }

      if (isEmpty(companyRegistrationNumber)) {
        alert('(-포함) 사업자등록번호를 입력해주세요.')
        return
      }

      /*const {data: response} = await ApiConfig.request({
        data: {
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          companyRegistrationNumber: companyRegistrationNumber,
          corporateRegistrationNumber: corporateRegistrationNumber,
        },
        method: HttpMethod.POST,
        url: EndPoint.POST_TEST_V1_REGISTER,
      })*/

      /*if (!response?.isSuccess) {
        alert(response?.message)
        return
      }*/

      alert('비밀번호가 설정되었습니다.')
      navigate(`/login`)
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }
  }

  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md={9} lg={7} xl={6}>
            <CCard className='mx-4'>
              <CCardBody className='p-4'>
                <CForm>
                  <h1>비밀번호 설정하기</h1>
                  <p className='text-medium-emphasis'>
                    아이디를 부여받고 처음 로그인 하기 위해선 비밀번호를 설정해야합니다.
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
                  <CInputGroup className='mb-3'>
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type='password'
                      id='password'
                      placeholder='비밀번호를 입력해주세요.'
                      autoComplete='off'
                      maxLength={20}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-4'>
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type='password'
                      id='passwordConfirm'
                      placeholder='비밀번호를 한번 더 입력해주세요.'
                      autoComplete='off'
                      maxLength={20}
                      onChange={e => setPasswordConfirm(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-4'>
                    <CInputGroupText>
                      <CIcon icon={cilSpreadsheet} />
                    </CInputGroupText>
                    <CFormInput
                      type='text'
                      id='companyRegistrationNumber'
                      onKeyPress={onKeyPress}
                      aria-label='companyRegistrationNumber'
                      placeholder='(-포함) 사업자등록번호를입력해주세요.'
                      autoComplete='on'
                      onChange={e => setCompanyRegistrationNumber(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-4'>
                    <CInputGroupText>
                      <CIcon icon={cilInstitution} />
                    </CInputGroupText>
                    <CFormInput
                      type='text'
                      id='corporateRegistrationNumber'
                      onKeyPress={onKeyPress}
                      aria-label='corporateRegistrationNumber'
                      placeholder='(-포함) 법인일 경우 법인등록번호를 입력해주세요.'
                      autoComplete='on'
                      onChange={e => setCorporateRegistrationNumber(e.target.value)}
                    />
                  </CInputGroup>
                  <div className='d-grid'>
                    <CButton color='primary' onClick={handleSubmit}>
                      저장하기
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
