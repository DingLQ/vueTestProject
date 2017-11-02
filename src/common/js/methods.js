// alpha: v0.0.1
// author: dlq
// description:初始版本，代码结构考虑不完善，以现在的方式，应该会比较耗资源。

/**
 * searchByid函数的功能是根据id再目标元素中搜索相应的子组件
 * @function
 * @param {string} id - 目标对象的id
 * @param {object} obj - 数据对象
 * @returns {object} - 目标对象
 */
var searchById = function (id, obj) {
  return obj
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
