<template>
  <div class="main centerblock clearfix">
   <toolbar class="tob" :class="{fly: ifFloat}" :style="{top: topNumber + 'px'}" @elementAdd = "changeTest" :selectData="selectData"></toolbar>
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
      methodsL: methods
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
    changeTest (id, element) {
      var testData = {
        name: 'p',
        type: 'p',
        value: 'add test',
        childNode: [],
        styleList: [
          {
            name: 'width',
            value: '100',
            type: '%',
            disabled: 'disabled'
          },
          {
            name: 'height',
            value: '24',
            disabled: false,
            type: 'px'
          },
          {
            name: 'line-height',
            value: '24',
            disabled: 'false',
            type: 'px'
          },
          {
            name: 'font-size',
            value: '14',
            disabled: 'false',
            type: 'px'
          },
          {
            name: 'background',
            value: '#000',
            disabled: 'false',
            type: 'color'
          },
          {
            name: 'color',
            value: '#fff',
            disabled: 'false',
            type: 'color'
          }
        ]
      }
      this.methodsL.addById(id, testData, this.mainData)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollWatch)
    var that = this
    eventBus.$on('selectChange', function (id) {
      // 选中的组件改变
      that.selectData = that.methodsL.searchById(id, that.mainData)
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
