<template>
  <div class="templateview">
    <div class="primary">
      <p>hello</p>
      <p>testsladfjkskdfosjdfokjowefjlaskdjfoewjflajldfjeonakndv</p>
      <p>testNumber:{{showNumber}}</p>
    </div>
    <button class="test">测试按钮</button>
    <div class="grayList">
      <div v-for="item in items" :key="item.id" class="item" :id="item.id" :style="{background:item.color}">
        <p>{{item.id}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'templateview',
  props: ['showNumber'],
  data () {
    return {
      msg: 'first vue ',
      items: (() => {
        var ary = []
        var basecolor = 233
        for (var i = 1; i <= 18; i++) {
          var tmp = {}
          tmp.id = i
          tmp.color = `rgb(${basecolor}, ${basecolor}, ${basecolor})`
          ary.push(tmp)
          basecolor += 1
        }
        return ary
      })()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import "../../common/stylus/templateview.styl"
</style>
