// 회원 리스트
import React from 'react'
import {CFormSelect} from '@coreui/react'
export const userListColumns = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'userName',
    label: '사용자 명',
    _props: {className: 'userName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 번호',
    _props: {className: 'certificateNum'},
  },
  {
    key: 'phoneNum',
    label: '휴대전화 번호',
    _props: {className: 'phoneNum'},
  },
  {
    key: 'createdAt',
    label: '최초 등록일',
    _props: {className: 'createdAt'},
    filter: false,
  },
  {
    key: 'status',
    label: '계정 상태',
    _props: {className: 'status'},
    sorter: false,
    filter: false,
  },
]
// 탈퇴 회원 리스트
export const withdrawalUsersColumns = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'userName',
    label: '사용자 명',
    _props: {className: 'userName'},
  },
  {
    key: 'createdAt',
    label: '최초 등록일',
    filter: false,
    _props: {className: 'createdAt'},
  },
  {
    key: 'status',
    label: '계정 상태',
    _props: {className: 'status'},
    filter: false,
  },
  {
    key: 'deletedAt',
    label: '계정 탈퇴일',
    _props: {className: 'deletedAt'},
    sorter: false,
    filter: false,
  },
  {
    key: 'phoneNum',
    label: '휴대전화 번호',
    _props: {className: 'phoneNum'},
  },
  {
    key: 'certificateFile',
    label: '사업자 등록증',
    _props: {className: 'certificateFile'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {className: 'businessName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 등록번호',
    _props: {className: 'certificateNum'},
  },
  {
    key: 'address',
    label: '사업장 주소',
    _props: {className: 'address'},
  },
  {
    key: 'withdrawalCategory',
    label: '탈퇴 사유',
    _props: {className: 'withdrawalCategory'},
  },
]
// 1:1 문의 리스트
export const userInquiryListColumns = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'inquiryCategory',
    label: '문의 유형',
    _props: {className: 'inquiryCategory'},
  },
  {
    key: 'userName',
    label: '이름',
    _props: {className: 'userName'},
  },
  {
    key: 'userPhoneNum',
    label: '전화번호',
    _props: {className: 'userPhoneNum'},
  },
]
// 공지사항 리스트
export const noticeList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'no'},
  },
  {
    key: 'title',
    label: '공지사항 제목',
    _props: {className: 'title'},
  },
  {
    key: 'createdAt',
    label: '공지사항 등록일',
    _props: {className: 'createdAt'},
    filter: false,
  },
  {
    key: 'noticeFiles',
    label: '첨부 파일',
    _props: {className: 'noticeFiles'},
    filter: false,
    sorter: false,
  },
]

// 영업 대리점/ 딜러 지원 리스트
export const dealerSupportList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'no'},
  },
  {
    key: 'supportArea',
    label: '지원 분야',
    _props: {className: 'supportArea'},
  },
  {
    key: 'noticeTitle',
    label: '지원 공지 제목',
    _props: {className: 'noticeTitle'},
  },

  {
    key: 'name',
    label: '이름',
    _props: {className: 'name'},
  },
  {
    key: 'email',
    label: '이메일',
    _props: {className: 'email'},
  },
  {
    key: 'phoneNum',
    label: '전화번호',
    _props: {className: 'phoneNum'},
  },
]

// 자료 리스트
export const dataRoomList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'dataRoomCategory',
    label: '카테고리',
    _props: {className: 'createdAt'},
  },
  {
    key: 'title',
    label: '제목',
    _props: {className: 'title'},
  },
  {
    key: 'createdAt',
    label: '등록일',
    _props: {className: 'createdAt'},
    filter: false,
  },
]

// 발주 신청 리스트
export const orderList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'orderNum',
    label: '발주번호',
    _props: {className: 'orderNum'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {className: 'BusinessName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 번호',
    _props: {className: 'certificateNum'},
  },
  {
    key: 'representativeName',
    label: '대표자 명',
    _props: {className: 'RepresentativeName'},
  },

  {
    key: 'createdAt',
    label: '주문 일자',
    _props: {className: 'createdAt'},
    filter: false,
  },
]
// 발주 신청 상세 리스트
export const orderListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {className: 'no'},
  },
  {
    key: 'category',
    label: '카테고리',
    _props: {className: 'category'},
  },
  {
    key: 'invoiceNum',
    label: '송장번호',
    _props: {className: 'invoiceNum'},
  },
  {
    key: 'itemName',
    label: '제품명',
    _props: {className: 'itemName'},
  },
  {
    key: 'processingStatus',
    label: '배송 현황',
    _props: {className: 'processingStatus'},
    filter: false,
  },
  {
    key: 'quantity',
    label: '발주 수량',
    _props: {className: 'quantity'},
  },
  {
    key: 'van',
    _props: {className: 'van'},
  },
]
export const maintenanceApplicationList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'maintenanceNum',
    label: '유지보수 번호',
    _props: {className: 'maintenanceNum'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {className: 'BusinessName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 번호',
    _props: {className: 'certificateNum'},
  },
  {
    key: 'representativeName',
    label: '대표자 명',
    _props: {className: 'representativeName'},
  },

  {
    key: 'createdAt',
    label: '주문 일자',
    _props: {className: 'createdAt'},
    filter: false,
  },
]

/**
 * AntDesign Table Columns
 * 유지보수 상세모달 유지보수 신청서
 */

// 유지보수 신청 정보 / 신청 가맹점 수
export const generalListApplicationColumns = [
  {
    title: '지역',
    dataIndex: 'region',
    width: '20%',
  },
  {
    title: 'CAT',
    dataIndex: 'catcount',
    width: '10%',
  },
  {
    title: 'POS',
    dataIndex: 'poscount',
    width: '10%',
  },
  {
    title: 'KIOSK',
    dataIndex: 'kioskcount',
    width: '10%',
  },
  {
    title: '합계',
    dataIndex: 'sum',
    width: '10%',
    //render: (value, row) => {
    //       if (value) {
    //         console.log(value)
    //         return row.poscount + row.catcount + row.kioskcount
    //       }
    //     },
  },
  {
    title: '비고',
    dataIndex: 'note',
    width: '10%',
  },
]
// 유지보수 신청 정보 / 주력 솔루션 및 VAN 사
export const solutionListColumns = [
  {
    title: 'No.',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: '구분',
    dataIndex: 'category',
    width: '20%',
    render: (value, row) => {
      if (value) {
        return (
          <CFormSelect
            aria-label='Default select example'
            options={[
              '선택',
              {label: '외식업', value: '외식업'},
              {label: '유통업', value: '유통업'},
              {label: '기타', value: '기타'},
            ]}
          />
        )
      }
    },
  },
  {
    title: '솔루션명',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'No.',
    dataIndex: 'id',
    width: '5%',
  },
  {
    title: '주력 VAN사',
    dataIndex: 'van',
    width: '20%',
    render: (value, row) => {
      if (value) {
        return (
          <CFormSelect
            aria-label='Default select example'
            options={[
              '선택',
              {label: 'NICE', value: 'NICE'},
              {label: 'KIS', value: 'KIS'},
              {label: 'JTNET', value: 'JTNET'},
              {label: 'KICC', value: 'KICC'},
              {label: 'KSNET', value: 'KSNET'},
              {label: 'KCP', value: 'KCP'},
              {label: 'KOCES', value: 'KOCES'},
              {label: 'SMARTRO', value: 'SMARTRO'},
              {label: 'FDK', value: 'FDK'},
              {label: 'DAOUDATA', value: 'DAOUDATA'},
              {label: 'KFTC', value: 'KFTC'},
            ]}
          />
        )
      }
    },
  },
]
// 유지보수 신청 정보 / 관리 대상 H/W 현황
export const managementTargetColumns = [
  {
    title: '구분.',
    dataIndex: 'division',
    width: '10%',
  },
  {
    title: '제조사/모델명',
    dataIndex: 'manufactureCompany',
    width: '40%',
  },
]

// 교육 일정 / 교육 일정 리스트
export const educationScheduleListColumns = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'no'},
  },
  {
    key: 'title',
    label: '제목',
    _props: {className: 'title'},
  },

  {
    key: 'createdAt',
    label: '등록일',
    _props: {className: 'createdAt'},
    filter: false,
  },
]

// 교육 일정 / 교육 신청서 리스트
export const educationApplicationListColumns = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'agencyName',
    label: '대리점 명',
    _props: {className: 'agencyName'},
  },
  {
    key: 'phoneNum',
    label: '대리점 연락처',
    _props: {className: 'phoneNum'},
    sorter: false,
  },

  {
    key: 'applicantNum',
    label: '신청 인원',
    _props: {className: 'applicantNum'},
    sorter: false,
  },
  {
    key: 'educationDate',
    label: '신청 교육 일자',
    _props: {className: 'educationDate'},
    filter: false,
  },
]

// 교육 일정 / 교육 신청 인원 상세정보
export const educationApplicationListDetailColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'name',
    label: '이름',
    _props: {className: 'distributorName'},
  },

  {
    key: 'email',
    label: '이메일',
    _props: {className: 'distributorContact'},
  },
  {
    key: 'mobilePhoneNum',
    label: '연락처',
    _props: {className: 'phoneNumber'},
  },
]
// 교육 일정 / 교육 신청 리스트
export const educationRegistrationsList = [
  {
    key: 'idx',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'title',
    label: '공고 제목',
    _props: {className: 'title'},
  },
  {
    key: 'createdAt',
    label: '등록일',
    filter: false,
    _props: {className: 'createdAt'},
  },

  {
    key: 'start',
    label: '교육신청 시작일',
    filter: false,
    _props: {className: 'createdAt'},
  },
  {
    key: 'deadline',
    label: '교육신청 마감일',
    filter: false,
    _props: {className: 'createdAt'},
  },
  {
    key: 'place',
    label: '교육 장소',
    _props: {className: 'place'},
  },
  {
    key: 'applicantsCap',
    label: '참여 가능 인원',
    _props: {className: 'id'},
  },
]
