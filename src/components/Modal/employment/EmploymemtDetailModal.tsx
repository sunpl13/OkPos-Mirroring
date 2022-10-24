import React from 'react'
import {CModal, CModalBody, CModalHeader, CModalTitle} from '@coreui/react'
import ModalSelect from '../../forms/inputForm/ModalSelect'
import ModalInput from '../../forms/inputForm/ModalInput'
type Value = {
  id: number
  userName: string
  businessNumber: string
  createdAt: string
  status: boolean
  phoneNumber: string
  businessRegistration: string
  businessName: string
  businessAddress: string
}
interface AddProps {
  readOnly: boolean
  value: Value
  visible: boolean
  setVisible: (state: boolean) => void
}

const category = [
  {key: 'servicePlanning', value: '서비스 기획'},
  {key: 'serviceDevelop', value: '서비스 개발'},
  {key: 'design', value: '디자인'},
  {key: 'a', value: '사업 개발'},
  {key: 'b', value: 'B2B 개발'},
  {key: 'c', value: 'B2B 운영 '},
  {key: 'd', value: '법인 영업'},
  {key: 'e', value: '채널 영업'},
  {key: 'f', value: '디바이스 영업'},
  {key: 'g', value: '디바이스 개발'},
  {key: 'h', value: 'OEM 관리'},
  {key: 'i', value: 'A/S 센터'},
  {key: 'j', value: '경영 관리'},
  {key: 'k', value: '정산'},
  {key: 'l', value: '운영 기획'},
  {key: 'm', value: '고객 지원'},
  {key: 'n', value: '통합 CS '},
  {key: 'o', value: '현장 지원-기술 지원'},
  {key: 'p', value: '현장 지원 - 물류'},
  {key: 'q', value: '운영 혁신 TF'},
]

// const status = [
//   {key: 'p', value: '채용중'},
//   {key: 'q', value: '마감'},
// ]

const EmploymemtDetailModal = ({value, visible, setVisible, readOnly}: AddProps) => {
  return (
    <CModal size='lg' visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>채용 상세</CModalTitle>
      </CModalHeader>
      {/* 
- 공고 제목 
- 접수 기간 ( 시작 지점 ~ 마감 지점 ) 
- 본문 이미지
- 고용 형태 ( 정규직 / 계약직 / 인턴 )
- 근무 지역
- 학력 및 전공 ( 대졸(4년제) 이상 / 대졸 (2,3년제) 이상 / 고졸 )
- 경력 ( 신입 / 경력 / 둘 다 / 무관 )
- 직무 내용 
- 자격 요건 
- 우대 사항 
- 채용 사유 
- 부서 현황 
- 기타 참고 사항 

- 수정 버튼 
- 삭제 버튼 "
*/}
      <CModalBody>
        <ModalSelect size='sm' value={category} placeholder='선택해주세요' label='카테고리' />
        <ModalInput
          id={'userName'}
          placeholder={'UserName'}
          label={'UserName'}
          value={value.userName}
          readOnly={readOnly}
        />
      </CModalBody>
    </CModal>
  )
}

export default EmploymemtDetailModal
