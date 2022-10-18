import React, {forwardRef, useImperativeHandle, useState} from 'react'
// import {EndPoint} from "../../dataManager/apiMapper"
// import ApiConfig, {HttpMethod} from "../../dataManager/apiConfig"
import {CButton, CCard, CCardBody, CCardHeader, CCol, CFormInput, CFormLabel, CRow} from '@coreui/react'

const TestInfo = forwardRef((props, ref) => {
  // 너드 기본 정보
  const [testId, setTestId] = useState(0)

  useImperativeHandle(ref, () => ({
    handleRetrieveTest: selectedTestId => handleRetrieveTest(selectedTestId),
  }))

  const handleRetrieveTest = async selectedTestId => {
    try {
      setTestId(selectedTestId)
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }
  }

  return (
    <CCard className='mb-4'>
      <CCardHeader>
        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
          <CButton
            className='float-end'
            color='primary'
            onClick={() => {
              alert('저장')
            }}
          >
            저장하기
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow className='mb-4'>
          <CFormLabel htmlFor='testId' className='col-sm-2 col-form-label'>
            테스트 아이디
          </CFormLabel>
          <CCol sm={10}>
            <CFormInput type='number' id='testId' value={testId || 0} disabled={true} />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
})

TestInfo.displayName = 'TestInfo'

export default TestInfo
