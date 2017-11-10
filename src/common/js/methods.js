// alpha: v0.0.1
// author: dlq
// description:初始版本，代码结构考虑不完善，以现在的方式，应该会比较耗资源。

/**
 * searchByid函数的功能是根据id再目标元素中搜索相应的子组件
 * @function
 * @param {string} id - 目标对象的id 例 ‘0d1p1’
 * @param {object} obj - 数据对象
 * @returns {object} - 目标对象
 */
var searchById = function (id, obj) {
  // 解析id number为数字，letter为字母
  var number = id.match(/\d+/g)
  var letter = id.match(/[A-z]+/g)
  // 目标对象
  var goalObj = {}

  // 根据number数组判断目标对象属性
  if (number.length === 1) {
    return obj
  } else if (number.length === 2) {
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
    var fId = number[0] + letter[0] + number[1]

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
}

/**
 * deleteById根据id删除指定的元素
 * @function
 * @param {string} id - 目标对象的id
 * @param {object} obj - 数据对象
 * @returns {boolean} - 返回删除结果
 */
var deleteById = function (id, obj) {
  return true
}

/**
 * addById根据目标id给其增加子组件
 * @function
 * @param {string} id - 目标对象的id
 * @param {string} type - 新增对象的类型
 * @param {object} obj - 数据对象
 * @returns {boolean} - 返回增加结果
 */
var addById = function (id, type, obj) {
  return true
}

/**
 * updateById根据目标id修改器内容
 * @function
 * @param {string} id - 目标对象的id
 * @param {object} element - 改组件的新对象
 * @param {object} obj - 数据对象
 * @returns {boolean} - 返回增加结果
 */
var updateById = function (id, element, obj) {
  return 0
}

/**
 * checkRule该模块用作对源数据的规则修改
 * @function
 * @param {string} id - 目标对象的id
 * @param {object} obj - 传入的数据对象
 * @returns {object} - rule修改过后的对象
 */
var checkRule = function (id, obj) {
  return obj
}

module.exports = {
  searchById: searchById,
  addById: addById,
  deleteById: deleteById,
  updateById: updateById,
  checkRule: checkRule
}
