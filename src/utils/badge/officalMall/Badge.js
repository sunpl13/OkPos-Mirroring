// 회원 리스트
export const userListColumns = [
  {key: 'userId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'email', label: '이메일', _props: {className: 'email'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false, _props: {className: 'createdAt'}},
  {key: 'status', label: '상태', sorter: false, filter: false, _props: {className: 'status'}},
]

// 상태값 Color get 함수
export const getMallBadgeColor = status => {
  switch (status) {
    case 'ACTIVE':
      return 'success'
    case 'INACTIVE':
      return 'danger'
    case true:
      return 'success'
    case false:
      return 'danger'
    case '취소 요청':
      return 'warning'
    case '취소 처리중':
      return 'warning'
    case '취소 완료':
      return 'danger'
    case '배송 완료':
      return 'success'
    default:
      return 'primary'
  }
}
