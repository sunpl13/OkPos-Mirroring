import React from 'react'
import {AppContent, AppFooter, AppHeader, AppSidebar} from '../components/index'
// import {useNavigate} from "react-router-dom"
// import {isEmpty} from "../utils/utility"
// import ApiConfig, {HttpMethod} from "../dataManager/ApiConfig"
// import {EndPoint} from "../dataManager/ApiMapper"

const DefaultLayout = () => {
  /*const navigate = useNavigate()

  useEffect(() => {
    if (isEmpty(window.sessionStorage.getItem('jwt'))) {
      window.sessionStorage.clear()
      navigate(`/login`)
      return false
    }

    const fetchData = async () => {
      try {
        const {data: response} = await ApiConfig.request({
          method: HttpMethod.GET,
          url: EndPoint.GET_V1_TEST_AUTO_LOGIN,
          path: {isManual: false},
        })

        if (!response.isSuccess) {
          alert(response.message)
          window.localStorage.clear()
          navigate(`/login`)
        }
      } catch (error) {
        alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
        return false
      }
    }
    fetchData().then()
  }, [])*/

  return (
    <>
      <AppSidebar />
      <div className='wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent'>
        <AppHeader />
        <div className='body flex-grow-1 px-3'>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </>
  )
}

export default DefaultLayout
