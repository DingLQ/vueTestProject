var testfun = function (obj) {
  var that = {}
  that.get_number = function () {
    return obj.number
  }
  that.change_number = function () {
    obj.number += 1
    console.log(obj.number)
  }
  return that
}
var testObj = testfun({number: 0})

export default testObj
