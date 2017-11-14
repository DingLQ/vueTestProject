// template组装器，没有数据处理代码

// 引入初始方法和数组，组装成为一个初始对象
var methods = require('methods.js')
var data = require('data.js')

// 包含参数和方法

var obj = {
  methods: methods,
  data: data
}

var baseClassConstructor = function (baseData) {
  var data = {}

  // 给基础对象添加获取元素的方法
  data.getElement = methods.searchById

  // 给基础对象添加设置元素的方法
  data.setElement = methods.setElement

  // 给基础对象添加删除元素的方法
  data.delElement = methods.delElement

  // 给基础对象增加增加元素的方法
  data.addElement = methods.addElement

  return data
}

var baseclass = baseClassConstructor(obj)

module.exports = baseclass
