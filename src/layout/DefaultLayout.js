import {useEffect} from 'react'
import {AppContent, AppFooter, AppHeader, AppSidebar} from '../components/index'
import {useLocation, useNavigate} from 'react-router-dom'
import {isEmpty} from '../utils/utility'

import {CToast, CToastBody} from '@coreui/react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const DefaultLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const authority = window.sessionStorage.getItem('accessAuthority')
  const auth = window.sessionStorage.getItem('auth')
  const toast = useSelector(state => state.toast)
  useEffect(() => {
    if (isEmpty(window.sessionStorage.getItem('jwt'))) {
      window.sessionStorage.clear()
      navigate(`/login`)
      return
    }
    if (location.pathname === '/memeber' && !auth.includes('ADMIN')) {
      alert('접근 권한이 없습니다!')
      navigate(-1)
      return
    } else if (location.pathname !== '/' && location.pathname !== '/dashboard') {
      if (auth === 'EDITOR_PROHIBIT') {
        alert('접근 권한이 없습니다!')
        navigate(-1)
        return
      }
      if (authority[0].toLowerCase() !== location.pathname[1]) {
        alert('접근 권한이 없습니다!')
        navigate(-1)
        return
      }
    }
  }, [])

  return (
    <Container>
      <AppSidebar />
      <div className='wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent'>
        <AppHeader />
        <div className='body flex-grow-1 px-3'>
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <CToast visible={toast.visibleState} color={toast.toastColor} className={`text-${toast.textColor}`}>
        <CToastBody>{toast.text}</CToastBody>
      </CToast>
    </Container>
  )
}

export default DefaultLayout

const Container = styled.main`
  & .toast {
    position: absolute;
    top: 170px;
    right: 150px;
  }
`
