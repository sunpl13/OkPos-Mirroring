const popUpColumns = [
  {
    key: 'No',
    _props: {color: 'primary', className: 'employId'},
  },
  {
    key: 'popUpName',
    label: '팝업 이름',
    _props: {color: 'primary', className: 'category'},
  },
  {
    key: 'popUpImg',
    label: '팝업 이미지',
    _props: {color: 'primary', className: 'employName'},
  },
]

// 회원 리스트
export const userListColumns = [
  {key: 'userId', label: 'No', sorter: false, filter: false},
  {key: 'name', label: '이름'},
  {key: 'email', label: '이메일'},
  {key: 'phoneNumber', label: '휴대전화번호'},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false},
  {key: 'status', label: '상태', sorter: false, filter: false},
]

// 탈퇴회원 리스트
export const resignUserListColumns = [
  {key: 'userId', label: 'No', sorter: false, filter: false},
  {key: 'name', label: '이름'},
  {key: 'email', label: '이메일'},
  {key: 'phoneNumber', label: '휴대전화번호'},
  {key: 'resignReason', label: '탈퇴사유'},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false},
  {key: 'updatedAt', label: '계정탈퇴일', sorter: false, filter: false},
  {key: 'status', label: '상태', sorter: false, filter: false},
]

// 1:1 문의 리스트
export const inquiryListColumns = [
  {key: 'inquiryMallId', label: 'No', sorter: false, filter: false},
  {key: 'category', label: '문의 유형'},
  {key: 'name', label: '이름'},
  {key: 'email', label: '이메일'},
  {key: 'phoneNumber', label: '휴대전화번호'},
]

// FAQ 리스트
export const faqListColumns = [
  {key: 'faqId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '분류', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
]

// 자료실 리스트
export const archieveColumns = [
  {key: 'id', label: 'No', sorter: false, filter: false},
  {key: 'category', label: '분류'},
  {key: 'title', label: '제목'},
  {key: 'createAt', label: '작성일'},
]
