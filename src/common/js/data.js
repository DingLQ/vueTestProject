// 测试数据

var main = {
  id: '0',
  name: 'main',
  type: 'main',
  value: '',
  styleList: [],
  classList: [],
  childNode: [],
  entryPoty: {}
}

var divElement = {
  id: '0d0',
  name: 'div',
  type: 'div',
  value: '',
  styleList: [
    {
      name: 'height',
      value: '200',
      type: 'px',
      range: [14, 1092]
    },
    {
      name: 'background',
      value: 'red',
      type: ''
    },
    {
      name: 'width',
      value: '100',
      type: '%',
      disabled: 'disabled'
    }
  ],
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
      styleList: [
        {
          name: 'height',
          value: '24',
          type: 'px'
        },
        {
          name: 'line-height',
          value: '24',
          type: 'px'
        },
        {
          name: 'font-size',
          value: '14',
          type: 'px'
        },
        {
          name: 'background',
          value: '#000',
          type: 'color'
        },
        {
          name: 'color',
          value: '#fff',
          type: 'color'
        }
      ]
    }
  ],
  entryPoty: {}
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
