import {useEffect} from 'react'
import {AppContent, AppFooter, AppHeader, AppSidebar} from '../components/index'
import {useNavigate} from 'react-router-dom'
import {isEmpty} from '../utils/utility'

import {CToast, CToastBody} from '@coreui/react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

const DefaultLayout = () => {
  const navigate = useNavigate()
  const toast = useSelector(state => state.toast)
  useEffect(() => {
    if (isEmpty(window.sessionStorage.getItem('jwt'))) {
      window.sessionStorage.clear()
      navigate(`/login`)
      return
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
