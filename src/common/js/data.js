// 用作数据处理

var main = {
  id: '0',
  name: 'main',
  type: 'main',
  value: '',
  styleList: '样式列表',
  classList: '样式类列表',
  childNode: [],
  entryPoty: {},
  ruleList: []
}

var divElement = {
  id: '0d0',
  name: 'div',
  type: 'div',
  value: '',
  styleList: {
    background: 'red',
    width: '100%',
    height: '200px'
  },
  classList: {
    test: true
  },
  childNode: [
    {
      id: '0d0p0',
      name: 'p',
      type: 'p',
      value: '1212',
      childNode: [],
      styleList: {
        height: '24px',
        'line-height': '24px',
        'font-size': '14px',
        color: '#fff',
        background: '#000'
      }
    }
  ],
  entryPoty: {},
  ruleList: {
    height: {
      name: 'height',
      type: 'px',
      range: [14, 1092]
    }
  }
}

function newElement (father, child) {
  father.childNode.push(child)
  return father
}

function getData () {
  return newElement(main, divElement)
}

var b = getData()
export default b
