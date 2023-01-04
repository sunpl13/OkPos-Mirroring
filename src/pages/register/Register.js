import {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilLockLocked, cilLowVision, cilUser} from '@coreui/icons'
import {useNavigate} from 'react-router-dom'
import ApiConfig, {HttpMethod} from '../../dataManager/apiConfig'
import {EndPoint} from '../../dataManager/apiMapper'
import {isEmpty} from '../../utils/utility'

const ACCESS_AUTHORITY = [
  {value: 'HOME', label: '공식 홈페이지'},
  {value: 'PARTNER', label: '파트너'},
  {value: 'MALL', label: '공식몰'},
]

const Register = () => {
  const navigate = useNavigate()

  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [responsiblePage, setResponsiblePage] = useState('')

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit().then()
    }
  }

  const handleSubmit = async () => {
    try {
      if (isEmpty(loginId)) {
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

      if (isEmpty(responsiblePage) || responsiblePage === '담당 페이지를 선택해주세요') {
        alert('담당 페이지가 선택되지 않았습니다.')
        return
      }

      const {data: response} = await ApiConfig.request({
        data: {
          loginId: loginId,
          password: password,
          accessAuthority: responsiblePage,
        },
        method: HttpMethod.POST,
        url: EndPoint.POST_REGISTER,
      })

      if (!response?.isSuccess) {
        alert(response?.message)
        return
      }

      alert(response.message)
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
                  <h1 className='text-center mb-3'>회원 가입</h1>

                  <CInputGroup className='mb-3'>
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type='email'
                      id='loginId'
                      placeholder='ID를 입력해주세요.'
                      autoComplete='on'
                      maxLength={50}
                      onChange={e => setLoginId(e.target.value)}
                    />
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
                      onKeyPress={onKeyPress}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-3'>
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type='password'
                      id='passwordConfirm'
                      placeholder='비밀번호를 한번 더 입력해주세요.'
                      autoComplete='off'
                      maxLength={20}
                      onKeyPress={onKeyPress}
                      onChange={e => setPasswordConfirm(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className='mb-5'>
                    <CInputGroupText>
                      <CIcon icon={cilLowVision} />
                    </CInputGroupText>
                    <CFormSelect
                      options={['담당 페이지를 선택해주세요', ...ACCESS_AUTHORITY]}
                      onChange={e => setResponsiblePage(e.target.value)}
                    />
                  </CInputGroup>
                  <div className='d-grid'>
                    <CButton color='primary' onClick={handleSubmit}>
                      가입하기
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
