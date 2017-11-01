// 用作数据处理

var main = {
  id: 0,
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
  id: 1,
  name: 'div',
  type: 'div',
  value: '1111',
  styleList: {
    background: 'red',
    width: '100%',
    height: '200px'
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

function newElement (father, child) {
  father.childNode.push(child)
  console.log(father)
  return father
}

function getData () {
  return newElement(main, divElement)
}

var b = getData()

export default b
