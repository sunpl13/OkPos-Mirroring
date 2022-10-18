import React from 'react'
// import moment from "moment";
// import {CButton} from "@coreui/react";
// import ApiConfig, {HttpMethod} from "../../dataManager/ApiConfig"
// import {EndPoint} from "../../dataManager/ApiMapper"

const Dashboard = () => {
  // const [expiredAt, setExpiredAt] = useState(window.localStorage.getItem('expiredAt'))

  /*const extendJwtExpirationTime = async () => {
    try {
      const {data: response} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_V1_TEST_AUTO_LOGIN,
        path: {isManual: true},
      })

      alert(response.message)

      if (!response.isSuccess) {
        window.localStorage.clear()
        navigate(`/login`)
      } else {
        window.localStorage.setItem("jwt", response.result.jwt)
        window.localStorage.setItem("expiredAt", response.result.expiredAt)
        setExpiredAt(response.result.expiredAt)
      }
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
      return false
    }
  }*/

  return (
    <>
      <br />
      <h4 className='card-title mb-0'>
        {window.localStorage.getItem('userName')} 님, 너디너리 템플릿에 오신 것을 환영합니다 🎉
      </h4>
      {/*<CButton color="primary" onClick={() => extendJwtExpirationTime()}>
      자동 로그인 만료 {moment.unix(expiredAt).format('YYYY-MM-DD HH:mm:ss')} 연장하기
    </CButton>*/}
      <div className='small text-medium-emphasis'>대시보드 개발중 입니다.</div>
      <div className='small text-medium-emphasis'>테스트 메시지</div>
      <br />
    </>
  )
}

export default Dashboard
