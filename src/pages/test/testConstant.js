exports.testOptions = [
  {
    value: 'test',
    label: '테스트',
  },
  {
    value: 'test1',
    label: '테스트1',
  },
  {
    value: 'test2',
    label: '테스트2',
  },
]

exports.testTableValues = [
  {
    id: 1,
    smallColumn: '1',
    normalColumn: '1',
    largeColumn: '1',
  },
  {
    id: 2,
    smallColumn: '2',
    normalColumn: '2',
    largeColumn: '2',
  },
  {
    id: 3,
    smallColumn: '3',
    normalColumn: '3',
    largeColumn: '3',
  },
]

exports.testTableColumns = [
  {key: 'id', label: 'ID', _props: {className: 'small'}},
  {key: 'smallColumn', label: '스몰 사이즈', _props: {className: 'small'}},
  {key: 'normalColumn', label: '노말 사이즈'},
  {key: 'largeColumn', label: '라지 사이즈', _props: {className: 'large'}},
]
