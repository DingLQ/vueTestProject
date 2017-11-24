// js基础扩展方法

// 获取chi对象在fth对象中子节点的下标，如果没有返回-1
var getIndex = function (chi, fth) {
  for (var i = 0; i < fth.childNode.length; i++) {
    if (fth.childNode[i] === chi) {
      return i
    }
  }
  return -1
}

// 获取样式列表
var getStyleList = function (dataList) {
  var rObj = {}
  var obj = {}
  for (obj of dataList) {
    if (obj.type === 'color') {
      rObj[obj.name] = obj.value
    } else {
      rObj[obj.name] = obj.value + obj.type
    }
  }
  return rObj
}

export default {
  getIndex: getIndex,
  getStyleList: getStyleList
}
