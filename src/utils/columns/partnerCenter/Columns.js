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
    key: 'userName',
    _props: {color: 'primary', className: 'userName'},
  },
  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
  },
  {
    key: 'status',
    _props: {color: 'primary', className: 'status'},
    sorter: false,
    filter: false,
  },
  {
    key: 'deletedAt',
    _props: {color: 'primary', className: 'deletedAt'},
  },
  {
    key: 'phoneNumber',
    _props: {color: 'primary', className: 'phoneNumber'},
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
    key: 'businessNumber',
    _props: {color: 'primary', className: 'businessNumber'},
  },
  {
    key: 'businessAddress',
    _props: {color: 'primary', className: 'businessAddress'},
  },
  {
    key: 'secessionReason',
    _props: {color: 'primary', className: 'secessionReason'},
  },
]
/** 1:1 문의 리스트 */
export const userInquiryListColumns = [
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
    filter: false,
  },
  {
    key: 'files',
    _props: {color: 'primary', className: 'files'},
    filter: false,
    sorter: false,
  },
  {
    key: 'deleteBtn',
    label: '',
    _props: {color: 'primary', className: 'deleteBtn'},
    filter: false,
    sorter: false,
  },
]

/** 영업 대리점/ 딜러 지원 리스트 */
export const dealerSupportList = [
  {
    key: 'no',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'category',
    _props: {color: 'primary', className: 'Category'},
  },
  {
    key: 'announcementTitle',
    _props: {color: 'primary', className: 'announcementTitle'},
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
    filter: false,
  },
]

/** 자료 리스트 */
export const materiaList = [
  {
    key: 'no',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'title',
    _props: {color: 'primary', className: 'title'},
  },
  {
    key: 'category',
    _props: {color: 'primary', className: 'Category'},
  },

  {
    key: 'createdAt',
    _props: {color: 'primary', className: 'createdAt'},
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

/** 발주 신청 리스트 */
export const orderList = [
  {
    key: 'no',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'orderNo',
    _props: {color: 'primary', className: 'orderNo'},
  },
  {
    key: 'businessName',
    _props: {color: 'primary', className: 'BusinessName'},
  },
  {
    key: 'representativeName',
    _props: {color: 'primary', className: 'RepresentativeName'},
  },

  {
    key: 'createdAt',
    label: 'Order Date',
    _props: {color: 'primary', className: 'createdAt'},
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

/** 유지보수 신청 리스트 */
export const maintenanceApplicationList = [
  {
    key: 'no',
    _props: {color: 'primary', className: 'no'},
  },
  {
    key: 'maintenanceApplicationNo',
    _props: {color: 'primary', className: 'maintenanceApplicationNo'},
  },
  {
    key: 'businessName',
    _props: {color: 'primary', className: 'BusinessName'},
  },
  {
    key: 'businessNumber',
    _props: {color: 'primary', className: 'businessNumber'},
  },
  {
    key: 'representativeName',
    _props: {color: 'primary', className: 'RepresentativeName'},
  },

  {
    key: 'createdAt',
    label: 'Order Date',
    _props: {color: 'primary', className: 'createdAt'},
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
