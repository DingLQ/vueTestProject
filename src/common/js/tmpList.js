// 模板列表

var tmpList = {
  main: {
    name: 'main',
    type: 'main',
    value: '',
    styleList: '样式列表',
    classList: '样式类列表',
    childNode: [],
    entryPoty: {},
    ruleList: []
  },
  div: {
    name: 'divElement',
    type: 'div',
    value: '1111',
    styleList: {
      background: 'red',
      width: '100%',
      height: '14px',
      'font-size': '12px'
    },
    classList: {
      test: true
    },
    childNode: [],
    entryPoty: {},
    ruleList: {
      height: {
        name: 'height',
        type: 'px',
        rule: [14, 1092]
      }
    }
  }
}

export default tmpList
