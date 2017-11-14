// alpha: v0.0.1
// author: dlq
// description:初始版本，代码结构考虑不完善，以现在的方式，应该会比较耗资源。

var methods = {
  /**
   * searchByid函数的功能是根据id再目标元素中搜索相应的子组件
   * @function
   * @param {string} id - 目标对象的id 例 ‘0d1p1’
   * @param {object} obj - 数据对象
   * @returns {object} - 目标对象
   */
  searchById: function (id, obj) {
    // 解析id number为数字，letter为字母
    var numberList = id.match(/\d+/g)
    var letterList = id.match(/[A-z]+/g)
    // 目标对象
    var goalObj = {}

    // 根据number数组判断目标对象属性
    if (numberList.length === 1) {
      return obj
    } else if (numberList.length === 2) {
      // 根据id取得对象
      for (goalObj of obj.childNode) {
        if (goalObj.id === id) {
          break
        }
      }
    } else {
      // 父元素
      var fObj = {}

      // 获取父元素id
      var fId = numberList[0] + letterList[0] + numberList[1]

      // 根据id取得对象
      for (fObj of obj.childNode) {
        if (fObj.id === fId) {
          for (goalObj of fObj.childNode) {
            if (goalObj.id === id) {
              break
            }
          }
        }
      }
    }
    return goalObj
  },

  /**
   * deleteById根据id删除指定的元素,不针对main
   * @function
   * @param {string} id - 目标对象的id
   * @param {object} obj - 数据对象
   * @returns {object} - 对象数据更新后
   */
  deleteById: function (id, obj) {
    // 解析id number为数字，letter为字母
    var numberList = id.match(/\d+/g)
    var letterList = id.match(/[A-z]+/g)
    var goalObj = {}

    // 根据number数组判断目标对象属性
    if (numberList.length === 1) {
      return obj
    } else if (numberList.length === 2) {
      // 根据id取得对象
      for (goalObj of obj.childNode) {
        if (goalObj.id === id) {
          obj.childNode.splice(obj.childNode.indexOf(goalObj), 1)
          break
        }
      }
    } else {
      // 父元素
      var fObj = {}

      // 获取父元素id
      var fId = numberList[0] + letterList[0] + numberList[1]

      // 根据id取得对象
      for (fObj of obj.childNode) {
        if (fObj.id === fId) {
          var index = obj.childNode.indexOf(fObj)
          for (goalObj of fObj.childNode) {
            if (goalObj.id === id) {
              obj.childNode[index].childNode.splice(fObj.childNode.indexOf(goalObj), 1)
            }
          }
        }
      }
    }
    return obj
  },

  /**
   * addById给目标对象添加子组件
   * @function
   * @param {string} id - 目标对象
   * @param {object} newData - 新增的对象
   * @param {object} obj - 数据对象
   * @returns {object} - 返回增加新元素后的对象
   */
  addById: function (id, newData, obj) {
    // 解析id number为数字，letter为字母
    var numberList = id.match(/\d+/g)
    var letterList = id.match(/[A-z]+/g)

    // 根据number数组判断目标对象属性
    if (numberList.length === 1) {
      if (obj.childNode.length === 0) {
        newData.id = '0d0'
      } else {
        newData.id = numberList[0] + letterList[0] + (parseInt(numberList[1]) + 1)
      }
      obj.childNode.push(newData)
    } else {
      var fIndex = obj.childNode.indexOf(this.searchById(id, obj))
      if (obj.childNode.length === 0) {
        newData.id = numberList[0] + letterList[0] + numberList[1] + newData.type.charAt(0) + '0'
      } else {
        newData.id = numberList[0] + letterList[0] + numberList[1] + letterList[1] + (parseInt(numberList[1]) + 1)
      }
      obj.childNode[fIndex].childNode.push(newData)
    }
    return obj
  },

  /**
   * updateById根据目标id修改器内容
   * @function
   * @param {object} updateData - 数据更新后的对象
   * @param {object} obj - 数据对象
   * @returns {boolean} - 返回增加结果
   */
  updateById: function (updateData, obj) {
    // 解析id number为数字，letter为字母
    var numberList = obj.id.match(/\d+/g)
    var letterList = obj.id.match(/[A-z]+/g)
    var id = updateData.id
    var faindex = 0
    var upindex = 0
    var goalObj = {}

    // 根据number数组判断目标对象属性
    if (numberList.length === 2) {
      for (goalObj of obj.childNode) {
        if (goalObj.id === id) {
          upindex = obj.childNode.indexOf(goalObj)
          obj.childNode[upindex] = updateData
        }
      }
    } else {
      // 父元素
      var fObj = {}

      // 获取父元素id
      var fId = numberList[0] + letterList[0] + numberList[1]

      // 根据id取得对象
      for (fObj of obj.childNode) {
        if (fObj.id === fId) {
          faindex = obj.childNode.indexOf(goalObj)
          for (goalObj of fObj.childNode) {
            if (goalObj.id === id) {
              upindex = obj.childNode[faindex].indexOf(goalObj)
              obj.childNode[faindex][upindex] = updateData
            }
          }
        }
      }
    }
    return obj
  },

  /**
   * checkRule该模块用作对源数据的规则修改
   * @function
   * @param {string} id - 目标对象的id
   * @param {object} obj - 传入的数据对象
   * @returns {object} - rule修改过后的对象
   */
  checkRule: function (id, obj) {
    return obj
  }
}
module.exports = methods
