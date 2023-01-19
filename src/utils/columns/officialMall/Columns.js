import {CFormSelect} from '@coreui/react' // 회원 리스트
export const userListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'email', label: '이메일', _props: {className: 'email'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'createdAt', label: '최초등록일', sorter: false, filter: false, _props: {className: 'createdAt'}},
  {key: 'status', label: '상태', sorter: false, filter: false, _props: {className: 'status'}},
]

// 탈퇴회원 리스트
export const resignUserListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
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
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '카테고리', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
  {key: 'name', label: '이름', _props: {className: 'name'}},
  {key: 'phoneNumber', label: '휴대전화번호', _props: {className: 'phoneNumber'}},
  {key: 'reply', label: '답변', sorter: false, filter: false, _props: {className: 'reply'}},
]

// FAQ 리스트
export const faqListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '카테고리', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
]

// 자료실 리스트
export const dataRoomListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'category', label: '카테고리', _props: {className: 'category'}},
  {key: 'title', label: '제목', _props: {className: 'title'}},
  {key: 'createdAt', label: '작성일', sorter: false, filter: false, _props: {className: 'createdAt'}},
]

// 주문 현황 관리
export const orderListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'orderNumber', label: '주문번호', sorter: false, _props: {className: 'orderNumber'}},
  {key: 'receiver', label: '수취인', sorter: false, _props: {className: 'receiver'}},
  {key: 'phoneNumber', label: '휴대전화번호', sorter: false, _props: {className: 'phoneNumber'}},
  {key: 'totalPrice', label: '주문총액', filter: false, _props: {className: 'totalPrice'}},
  {key: 'orderDate', label: '주문일', sorter: false, filter: false, _props: {className: 'orderDate'}},
]

// 제품 관리
export const productListColumns = [
  {key: 'radioButton', label: '', sorter: false, filter: false, _props: {className: 'radioButton'}},
  {key: 'itemName', label: '제품명', sorter: false, filter: false, _props: {className: 'itemName'}},
  {key: 'orderItemCount', sorter: false, filter: false, label: '제품수량', _props: {className: 'orderItemCount'}},
  {key: 'orderItemPrice', sorter: false, filter: false, label: '제품가격', _props: {className: 'orderItemPrice'}},
  {key: 'orderStatus', label: '제품상태', sorter: false, filter: false, _props: {className: 'orderStatus'}},
  {key: 'invoiceNumber', sorter: false, filter: false, label: '송장번호', _props: {className: 'invoiceNumber'}},
]

// 취소 현황 관리
export const cancelListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'orderNumber', label: '주문번호', sorter: false, _props: {className: 'orderNumber'}},
  {key: 'itemName', label: '제품명', sorter: false, _props: {className: 'itemName'}},
  {key: 'receiver', label: '수취인', sorter: false, _props: {className: 'receiver'}},
  {key: 'cancelPrice', label: '취소금액', filter: false, _props: {className: 'cancelPrice'}},
  {key: 'cancelDate', label: '취소 요청일', sorter: false, filter: false, _props: {className: 'cancelDate'}},
  {
    key: 'orderStatus',
    label: '주문상태',
    sorter: false,
    filter: () => {
      return (
        <CFormSelect size='sm'>
          <option>주문상태 선택</option>
          <option value='결제 대기'>결제 대기</option>
          <option value='결제 완료'>결제 완료</option>
          <option value='배송 준비중'>배송 준비중</option>
          <option value='배송중'>배송중</option>
          <option value='배송 완료'>배송 완료</option>
          <option value='취소 처리중'>취소 처리중</option>
          <option value='취소 완료'>취소 완료</option>
        </CFormSelect>
      )
    },
    _props: {className: 'orderStatus'},
  },
]
// 취소 현황 관리
export const exchangeListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'orderNumber', label: '주문번호', sorter: false, _props: {className: 'orderNumber'}},
  {key: 'itemName', label: '제품명', sorter: false, _props: {className: 'itemName'}},
  {key: 'receiver', label: '수취인', sorter: false, _props: {className: 'receiver'}},
  {key: 'exchangePrice', label: '교환금액', filter: false, _props: {className: 'exchangePrice'}},
  {key: 'exchangeDate', label: '교환 요청일', sorter: false, filter: false, _props: {className: 'exchangeDate'}},
  {
    key: 'orderStatus',
    label: '주문상태',
    sorter: false,
    _props: {className: 'orderStatus'},
  },
]

// 배너 관리
export const bannerListColumns = [
  {key: 'no', label: 'No', sorter: false, filter: false, _props: {className: 'no'}},
  {key: 'title', label: '배너 타이틀', sorter: false, _props: {className: 'title'}},
  {key: 'image', label: '이미지', sorter: false, filter: false, _props: {className: 'image'}},
]
