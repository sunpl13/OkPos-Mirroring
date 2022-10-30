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
  {key: 'id', label: 'No', sorter: false, filter: false},
  {
    key: 'userName',
    label: '사용자명',
  },
  {
    key: 'email',
    label: '이메일',
  },
  {
    key: 'phoneNumber',
    label: '휴대전화번호',
  },
  {
    key: 'firstRegistration',
    label: '최초등록일',
  },
  {
    key: 'status',
    label: '상태',
    sorter: false,
    filter: false,
  },
]
