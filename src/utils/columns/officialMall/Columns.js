// 회원 리스트
export const userListColumns = [
  {key: 'userId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'email', label: '이메일', _props: {className: 'email'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false, _props: {className: 'createdAt'}},
  {key: 'status', label: '상태', sorter: false, filter: false, _props: {className: 'status'}},
]

// 탈퇴회원 리스트
export const resignUserListColumns = [
  {key: 'userId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'email', label: '이메일', _props: {className: 'email'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'resignReason', label: '탈퇴사유', _props: {className: 'resignReason'}},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false, _props: {className: 'createdAt'}},
  {key: 'updatedAt', label: '계정탈퇴일', sorter: false, filter: false, _props: {className: 'updatedAt'}},
  {key: 'status', label: '상태', sorter: false, filter: false, _props: {className: 'status'}},
]

// 1:1 문의 리스트
export const inquiryListColumns = [
  {key: 'inquiryId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '문의 유형', _props: {className: 'category'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'email', label: '이메일', _props: {className: 'email'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'reply', label: '답변', sorter: false, filter: false, _props: {className: 'reply'}},
]

// FAQ 리스트
export const faqListColumns = [
  {key: 'faqId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '분류', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
]

// 자료실 리스트
export const dataRoomListColumns = [
  {key: 'dataRoomId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '분류', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false, _props: {className: 'createdAt'}},
]

// 주문 현황 관리
export const orderListColumns = [
  {key: 'orderId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'orderNumber', label: '주문번호', sorter: false, _props: {className: 'orderNumber'}},
  {key: 'receiver', label: '수취인', _props: {className: 'receiver'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'category', label: '주문상태', _props: {className: 'category'}},
  {key: 'totalPrice', label: '주문총액', _props: {className: 'totalPrice'}},
  {key: 'createdAt', label: '주문일', sorter: false, filter: false, _props: {className: 'createdAt'}},
]

// 배너 관리
export const bannerListColumns = [
  {key: 'bannerId', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'image', label: '이미지', _props: {className: 'image'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
]
