import React from 'react'
import {CFooter} from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className='ms-1'>2023, 주식회사 오케이포스</span>
      </div>
      <div className='ms-auto'>
        <span className='me-1'>오케이포스 데이터를 동의 없이 외부 유출시 형사 처벌을 받을 수 있습니다.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
