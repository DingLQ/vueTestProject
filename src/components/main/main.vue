<template>
  <div class="main centerblock clearfix">
   <toolbar class="tob" :class="{fly: ifFloat}" :style="{top: topNumber + 'px'}" @styleListChange = "changeTest" :selectData="selectData" :selectRules="selectRules"></toolbar>
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
      selectRules: dataObj.childNode[0].ruleList,
      selectData: dataObj.childNode[0].styleList,
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
    changeTest (height) {
      this.mainData.childNode[0].styleList.height = height + 'px'
    },
    getSelect (id) {
      console.log(this.mainData)
      console.log(this.methods.searchById('0d0', this.mainData))
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWatch)
    var that = this
    eventBus.$on('selectChange', function (id) {
      alert(id + ':theId')
      that.getSelect(id)
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
