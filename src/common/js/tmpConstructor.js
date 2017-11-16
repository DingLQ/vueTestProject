// template组装器，没有数据处理代码，目的是数据私有化

// 引入初始方法和数组，组装成为一个初始对象
import data from '@/common/js/data.js'

// 包含参数和方法

var baseClassConstructor = function (baseData) {
  var data = {}
  // 获取基础元素
  data.getBaseData = function () {
    return baseData
  }

  // 更改组件的值
  data.setBaseData = function (obj) {
    baseData = obj
  }

  return data
}

var baseclass = baseClassConstructor(data)

export default baseclass
