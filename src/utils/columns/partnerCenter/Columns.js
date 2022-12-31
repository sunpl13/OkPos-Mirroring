// 회원 리스트
import {CFormSelect} from '@coreui/react'
import React from 'react'
export const userListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'userName',
    label: '회원 이름',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'certificateNum',
    label: '사업자번호',
    _props: {color: 'primary', className: 'certificateNum'},
  },
  {
    key: 'phoneNum',
    lebel: '휴대폰 번호',
    _props: {color: 'primary', className: 'phoneNum'},
  },
  {
    key: 'createdAt',
    lebel: '계정 생성일',
    _props: {color: 'primary', className: 'createdAt'},
    filter: false,
  },
  {
    key: 'status',
    lebel: '계정 상태',
    _props: {color: 'primary', className: 'status'},
    sorter: false,
    filter: false,
  },
]
// 탈퇴 회원 리스트
export const withdrawalUsersColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'userName',
    label: '회원 이름',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'createdAt',
    label: '계정 생성일',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'status',
    label: '계정 상태',
    _props: {color: 'primary', className: 'status'},
    sorter: false,
    filter: false,
  },
  {
    key: 'deletedAt',
    label: '계정 삭제일',
    _props: {color: 'primary', className: 'deletedAt'},
    sorter: false,
    filter: false,
  },
  {
    key: 'phoneNum',
    label: '휴대폰 번호',
    _props: {color: 'primary', className: 'phoneNum'},
  },
  {
    key: 'certificateFile',
    label: '사업자 등록증 파일',
    _props: {color: 'primary', className: 'certificateFile'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {color: 'primary', className: 'businessName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 등록번호',
    _props: {color: 'primary', className: 'certificateNum'},
  },
  {
    key: 'address',
    label: '사업장 주소',
    _props: {color: 'primary', className: 'address'},
  },
  {
    key: 'withdrawalCategory',
    label: '탈퇴 사유',
    _props: {color: 'primary', className: 'withdrawalCategory'},
  },
]
// 1:1 문의 리스트
export const userInquiryListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'inquiryCategory',
    label: '문의 유형',
    _props: {color: 'primary', className: 'inquiryCategory'},
  },
  {
    key: 'userName',
    label: '회원 이름',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'userPhoneNum',
    label: '전화번호',
    _props: {color: 'primary', className: 'userPhoneNum'},
  },
]
// 공지사항 리스트
export const noticeList = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'title',
    label: '공지사항 제목',
    _props: {color: 'primary', className: 'title'},
  },
  {
    key: 'createdAt',
    label: '공지사항 등록일',
    _props: {color: 'primary', className: 'createdAt'},
    filter: false,
  },
  {
    key: 'noticeFiles',
    label: '파일',
    _props: {color: 'primary', className: 'noticeFiles'},
    filter: false,
    sorter: false,
  },
]

// 영업 대리점/ 딜러 지원 리스트
export const dealerSupportList = [
  {
    key: 'id',
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
    key: 'phoneNum',
    label: '전화번호',
    _props: {className: 'phoneNum'},
  },
  {
    key: 'email',
    label: '이메일',
    _props: {className: 'email'},
  },
]

// 자료 리스트
export const dataRoomList = [
  {
    key: 'id',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'title',
    label: '제목',
    _props: {className: 'title'},
  },
  {
    key: 'dataRoomCategory',
    label: '자료 유형',
    _props: {className: 'dataRoomCategory'},
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
    key: 'id',
    label: 'No',
    _props: {className: 'id'},
  },
  {
    key: 'orderNum',
    label: '발주 신청 식별 번호',
    _props: {className: 'orderNum'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {className: 'BusinessName'},
  },
  {
    key: 'representativeName',
    label: '대표자 명',
    _props: {className: 'RepresentativeName'},
  },

  {
    key: 'createdAt',
    label: '신청 일자',
    _props: {className: 'createdAt'},
    filter: false,
  },
]
// 발주 신청 상세 리스트
export const orderListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'category',
    label: '카테고리',
    _props: {color: 'primary', className: 'category'},
  },
  {
    key: 'invoiceNum',
    label: '송장번호',
    _props: {color: 'primary', className: 'invoiceNum'},
  },
  {
    key: 'itemName',
    label: '제품명',
    _props: {color: 'primary', className: 'itemName'},
  },
  {
    key: 'quantity',
    label: '발주 수량',
    _props: {color: 'primary', className: 'quantity'},
  },
  {
    key: 'processingStatus',
    label: '배송 현황',
    _props: {color: 'primary', className: 'processingStatus'},
    filter: false,
  },
  {
    key: 'quantity',
    label: '발주 수량',
    _props: {color: 'primary', className: 'quantity'},
  },
  {
    key: 'van',
    _props: {color: 'primary', className: 'van'},
  },
]
export const maintenanceApplicationList = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'maintenanceNum',
    label: '유지보수 신청 번호',
    _props: {color: 'primary', className: 'maintenanceNum'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {color: 'primary', className: 'BusinessName'},
  },
  {
    key: 'certificateNum',
    label: '사업자 등록번호',
    _props: {color: 'primary', className: 'certificateNum'},
  },
  {
    key: 'representativeName',
    label: '대표자 명',
    _props: {color: 'primary', className: 'representativeName'},
  },

  {
    key: 'createdAt',
    label: '신청 일자',
    _props: {color: 'primary', className: 'createdAt'},
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
    title: 'SUM',
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
      console.log(value)
      if (value) {
        return (
          <CFormSelect
            aria-label='Default select example'
            options={[
              '선택',
              {label: 'One', value: '1'},
              {label: 'Two', value: '2'},
              {label: 'Three', value: '3', disabled: true},
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
              {label: 'One', value: '1'},
              {label: 'Two', value: '2'},
              {label: 'Three', value: '3', disabled: true},
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
    key: 'id',
    label: 'No',
    filter: false,
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'title',
    label: '제목',
    filter: false,
    _props: {color: 'primary', className: 'title'},
  },

  {
    key: 'createdAt',
    label: '등록일',
    _props: {color: 'primary', className: 'createdAt'},
    filter: false,
  },
]

// 교육 일정 / 교육 신청서 리스트
export const educationApplicationListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'agencyName',
    label: '대리점 명',
    _props: {color: 'primary', className: 'agencyName'},
  },
  {
    key: 'phoneNum',
    label: '대리점 연락처',
    _props: {color: 'primary', className: 'phoneNum'},
    sorter: false,
  },
  {
    key: 'educationDate',
    label: '신청 교육 일자',
    _props: {color: 'primary', className: 'educationDate'},
    filter: false,
  },

  {
    key: 'applicantNum',
    label: '신청 인원',
    _props: {color: 'primary', className: 'applicantNum'},
    sorter: false,
  },
]

// 교육 일정 / 교육 신청 인원 상세정보
export const educationApplicationListDetailColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'name',
    label: '이름',
    _props: {color: 'primary', className: 'distributorName'},
  },

  {
    key: 'email',
    label: '이메일',
    _props: {color: 'primary', className: 'distributorContact'},
  },
  {
    key: 'mobilePhoneNum',
    label: '연락처',
    _props: {color: 'primary', className: 'phoneNumber'},
  },
]
// 교육 일정 / 교육 신청 리스트
export const educationRegistrationsList = [
  {
    key: 'title',
    label: '공고 제목',
    _props: {color: 'primary', className: 'title'},
  },
  {
    key: 'createdAt',
    label: '등록일',
    filter: false,
    _props: {color: 'primary', className: 'createdAt'},
  },

  {
    key: 'start',
    label: '접수기간',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'deadline',
    label: '교육 일자',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'place',
    label: '교육 장소',
    _props: {color: 'primary', className: 'place'},
  },
  {
    key: 'applicantsCap',
    label: '참여 가능 인원',
    _props: {color: 'primary', className: 'id'},
  },
]
