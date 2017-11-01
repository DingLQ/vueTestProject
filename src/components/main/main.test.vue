<template>
  <div class="main centerblock clearfix">
   <toolbar class="tob" :class="{fly: ifFloat}" :style="{top: topNumber + 'px'}" @heightChange="change"></toolbar>
   <tmpview class="tmp" :divHeight="testNumber"></tmpview>
  </div>
</template>

<script>
import templateview from '@/components/templateview/templateview.vue'
import toolbar from '@/components/toolbar/toolbar.vue'
import testObj from '@/common/js/tmpData.js'

export default {
  name: 'main',
  data () {
    return {
      ifFloat: false,
      topNumber: 0,
      testb: testObj,
      testNumber: 100
    }
  },
  components: {
    tmpview: templateview,
    toolbar: toolbar
  },
  methods: {
    scrollWatch () {
      if (window.scrollY > 79) {
        this.ifFloat = true
        this.topNumber = window.scrollY - 79
      } else {
        this.ifFloat = false
      }
    },
    change (height) {
      this.testNumber = parseInt(height > 100 ? height : 100)

      console.log(this.testNumber)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWatch)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import "../../common/stylus/tools.styl"

.main
  width 1000px
  height auto
  position relative
  padding-bottom 50px
  .tob
    float left
  .fly
    position absolute
    left 0px
  .tmp
    float right

</style>
