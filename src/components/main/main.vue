<template>
  <div class="main centerblock clearfix">
   <toolbar class="tob" :class="{fly: ifFloat}" :style="{top: topNumber + 'px'}" @styleListChange = "changeTest" :selectData="selectData"></toolbar>
   <tmpview class="tmp" :dataJson="mainData"></tmpview>
  </div>
</template>

<script>
import templateview from '@/components/templateview/templateview.vue'
import toolbar from '@/components/toolbar/toolbar.vue'
import dataObj from '@/common/js/data.js'
import methods from '@/common/js/methods.js'
import eventBus from '@/common/js/eventBus.js'

export default {
  name: 'main',
  data () {
    return {
      ifFloat: false,
      topNumber: 0,
      mainData: dataObj,
      selectData: dataObj,
      methods: methods
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
    changeTest (height) {}
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWatch)
    var that = this
    eventBus.$on('selectChange', function (id) {
      // 选中的组件改变
      that.selectData = that.methods.searchById(id, that.mainData)
      console.log(that.selectData)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/tools.styl';

.main {
  width: 1000px;
  height: auto;
  position: relative;
  padding-bottom: 50px;

  .tob {
    float: left;
  }

  .fly {
    position: absolute;
    left: 0px;
  }

  .tmp {
    float: right;
  }
}
</style>
