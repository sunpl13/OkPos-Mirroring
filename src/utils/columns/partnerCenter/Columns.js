/** 회원 리스트 */
export const userListColumns = [
  {
    key: 'id',
    _props: {color: 'primary', className: 'userId'},
  },
  {
    key: 'userName',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'businessNumber',
    _props: {color: 'primary', className: 'businessNumber'},
  },
  {
    key: 'phoneNumber',
    _props: {color: 'primary', className: 'phoneNumber'},
  },
  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
    //<RangeDatePickerForm size='sm' />
  },
  {
    key: 'status',
    _props: {color: 'primary', className: 'status'},
    sorter: false,
    filter: false,
  },
]
/** 탈퇴 회원 리스트 */
export const withdrawalUsersColumns = [
  {
    key: 'id',
    _props: {color: 'primary', className: 'userId'},
  },
  {
    key: 'images',
    _props: {color: 'primary', className: 'secessionReason'},
  },
  {
    key: 'userName',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'businessNumber',
    _props: {color: 'primary', className: 'businessNumber'},
  },
  {
    key: 'phoneNumber',
    _props: {color: 'primary', className: 'phoneNumber'},
  },
  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'deletedAt',
    _props: {color: 'primary', className: 'deletedAt'},
  },
  {
    key: 'businessRegistration',
    _props: {color: 'primary', className: 'businessRegistration'},
  },
  {
    key: 'businessName',
    _props: {color: 'primary', className: 'businessName'},
  },
  {
    key: 'businessAddress',
    _props: {color: 'primary', className: 'businessAddress'},
  },
  {
    key: 'secessionReason',
    _props: {color: 'primary', className: 'secessionReason'},
  },
  {
    key: 'status',
    _props: {color: 'primary', className: 'status'},
    sorter: false,
    filter: false,
  },
]
/** 1:1 문의 리스트 */
export const userInquiryListColumns = [
  {
    key: 'id',
    _props: {color: 'primary', className: 'userId'},
  },
  {
    key: 'inquiryType',
    _props: {color: 'primary', className: 'inquiryType'},
  },
  {
    key: 'userName',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'email',
    _props: {color: 'primary', className: 'email'},
  },
  {
    key: 'phoneNumber',
    _props: {color: 'primary', className: 'phoneNumber'},
  },
  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
  },
]
/** 공지사항 리스트 */
export const noticeList = [
  {
    key: 'title',
    _props: {color: 'primary', className: 'title'},
  },
  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'files',
    _props: {color: 'primary', className: 'files'},
    filter: false,
  },
  {
    key: 'phoneNumber',
    _props: {color: 'primary', className: 'phoneNumber'},
    filter: false,
  },
  {
    key: 'deleteBtn',
    _props: {color: 'primary', className: 'deleteBtn'},
  },
]
