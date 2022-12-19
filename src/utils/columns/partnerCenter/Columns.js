// 회원 리스트
import {CFormSelect} from '@coreui/react'
import React from 'react'
export const userListColumns = [
  {
    key: 'id',
    label: '번호',
    _props: {color: 'primary', className: 'userId'},
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
    key: 'withdrawalReason',
    label: '탈퇴 사유',
    _props: {color: 'primary', className: 'withdrawalReason'},
  },
]
// 1:1 문의 리스트
export const userInquiryListColumns = [
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
    label: '회원 휴대폰 번호',
    _props: {color: 'primary', className: 'userPhoneNum'},
  },
  {
    key: 'createdAt',
    label: '문의 등록일',
    filter: false,
    _props: {color: 'primary', className: 'createdAt'},
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
    key: 'userName',
    label: '이름',
    _props: {className: 'userName'},
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
export const materiaList = [
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
    key: 'no',
    _props: {className: 'no'},
  },
  {
    key: 'orderNo',
    label: '발주 신청 식별 번호',
    _props: {className: 'orderNo'},
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
  {
    key: 'deleteBtn',
    label: ' ',
    _props: {color: 'primary', className: 'deleteBtn'},
    filter: false,
    sorter: false,
  },
]

export const maintenanceApplicationList = [
  {
    key: 'maintenanceApplicationNo',
    label: '유지보수 신청 번호',
    _props: {color: 'primary', className: 'maintenanceApplicationNo'},
  },
  {
    key: 'businessName',
    label: '상호명',
    _props: {color: 'primary', className: 'BusinessName'},
  },
  {
    key: 'businessNumber',
    label: '사업자 등록번호',
    _props: {color: 'primary', className: 'businessNumber'},
  },
  {
    key: 'representativeName',
    label: '대표자 명',
    _props: {color: 'primary', className: 'RepresentativeName'},
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
    dataIndex: 'cat',
    width: '10%',
  },
  {
    title: 'POS',
    dataIndex: 'pos',
    width: '10%',
  },
  {
    title: 'KIOSK',
    dataIndex: 'kiosk',
    width: '10%',
  },
  {
    title: 'SUM',
    dataIndex: 'sum',
    width: '10%',
    render: (value, row) => {
      if (value) {
        return row.pos + row.cat + row.kiosk
      }
    },
  },
  {
    title: '비고',
    dataIndex: 'remark',
    width: '10%',
  },
]
// 유지보수 신청 정보 / 주력 솔루션 및 VAN 사
export const solutionListColumns = [
  {
    title: 'No.',
    dataIndex: 'no',
    width: '5%',
  },
  {
    title: '구분',
    dataIndex: 'division',
    width: '20%',
    render: (value, row) => {
      console.log(value)
      if (value) {
        return (
          <CFormSelect
            aria-label='Default select example'
            options={[
              'Open this select menu',
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
    dataIndex: 'solution',
    width: '20%',
  },
  {
    title: 'No.',
    dataIndex: 'no',
    width: '5%',
  },
  {
    title: '주력 VAN사',
    dataIndex: 'flagshipCompany',
    width: '20%',
    render: (value, row) => {
      if (value) {
        return (
          <CFormSelect
            aria-label='Default select example'
            options={[
              'Open this select menu',
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
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'title',
    label: '제목',
    _props: {color: 'primary', className: 'title'},
  },

  {
    key: 'createdAt',
    label: '신청일',
    _props: {color: 'primary', className: 'createdAt'},
    filter: false,
  },
]

// 교육 일정 / 교육 신청 리스트
export const educationApplicationListColumns = [
  {
    key: 'id',
    label: 'No',
    _props: {color: 'primary', className: 'id'},
  },
  {
    key: 'agencyName',
    label: '대리점',
    _props: {color: 'primary', className: 'agencyName'},
  },
  {
    key: 'educationDate',
    label: '교육 신청일',
    _props: {color: 'primary', className: 'educationDate'},
    filter: false,
  },
  {
    key: 'phoneNum',
    label: '연락처',
    _props: {color: 'primary', className: 'phoneNum'},
    filter: false,
    sorter: false,
  },
  {
    key: 'applicantNum',
    label: '교육 신청 인원',
    _props: {color: 'primary', className: 'applicantNum'},
    filter: false,
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
