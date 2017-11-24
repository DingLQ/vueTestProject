// 测试数据

var main = {
  id: '0',
  name: 'main',
  type: 'main',
  value: '',
  styleList: [
    {
      name: 'height',
      value: 'unchangeable',
      type: 'px',
      disabled: 'true'
    },
    {
      name: 'background',
      value: 'unchangeable',
      disabled: 'true',
      type: 'color'
    },
    {
      name: 'width',
      value: 'unchangeable',
      type: '%',
      disabled: 'true'
    },
    {
      name: 'font-size',
      value: 'unchangeable',
      type: 'px',
      disabled: 'true'
    },
    {
      name: 'color',
      value: 'unchangeable',
      type: '%',
      disabled: 'true'
    },
    {
      name: 'line-height',
      value: 'unchangeable',
      type: '',
      disabled: 'true'
    }
  ],
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
      range: [14, 1092],
      disabled: false
    },
    {
      name: 'background',
      value: 'red',
      disabled: 'false',
      type: 'color'
    },
    {
      name: 'width',
      value: '100',
      type: '%',
      disabled: 'true'
    },
    {
      name: 'font-size',
      value: '14',
      type: 'px',
      disabled: 'true'
    },
    {
      name: 'color',
      value: '100',
      type: '%',
      disabled: 'true'
    },
    {
      name: 'line-height',
      value: 'normal',
      type: '',
      disabled: 'true'
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
          name: 'width',
          value: '100',
          type: '%',
          disabled: 'disabled'
        },
        {
          name: 'height',
          value: '24',
          disabled: false,
          type: 'px'
        },
        {
          name: 'line-height',
          value: '24',
          disabled: 'false',
          type: 'px'
        },
        {
          name: 'font-size',
          value: '14',
          disabled: 'false',
          type: 'px'
        },
        {
          name: 'background',
          value: '#000',
          disabled: 'false',
          type: 'color'
        },
        {
          name: 'color',
          value: '#fff',
          disabled: 'false',
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
