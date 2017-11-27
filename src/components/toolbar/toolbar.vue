<template>
  <div class="toolbar centerblock">
    <h1>工具栏</h1>
    <div class="list">
      <h2>组件列表</h2>
      <div class="mouduleItem">
        <button>div容器</button>
        <button>p标签</button>
      </div>
      <div class="mouduleItem">
        <button>span标签</button>
        <button>文本框</button>
      </div>
      <div class="mouduleItem">
        <button>文本域</button>
        <button>内联块</button>
      </div>
      <div class="mouduleItem">
        <button>单选</button>
        <button>多选</button>
      </div>

    </div>
    <div class="list">
      <h2>组件属性</h2>
      <p>{{selectData.id}}</p>
      <div class="attributeItem">
        <div class="form-group">
          <label for="">宽度</label>
          <input type="text" v-model="sswidth.value" :disabled="sswidth.disabled">
          <span v-if="sswidth.type !== 'color'"></span>
        </div>
        <div class="form-group">
          <label for="">高度</label>
          <input type="text" v-model.lazy="ssheight.value" :disabled="ssheight.disabled">
          <span v-if="ssheight.type !== 'color'"></span>
        </div>
        <div class="form-group">
          <label for="">大小</label>
          <input type="text" v-model="ssfontsize.value" :disabled="ssfontsize.disabled">
          <span v-if="ssfontsize.type !== 'color'"></span>
        </div>
        <div class="form-group">
          <label for="">行高</label>
          <input type="text" v-model="sslineheight.value" :disabled="sslineheight.disabled">
          <span v-if="sslineheight.type !== 'color'"></span>
        </div>
        <div class="form-group">
          <label for="">颜色</label>
          <input type="text" v-model="sscolor.value" :disabled="sscolor.disabled">
          <span v-if="sscolor.type !== 'color'"></span>
        </div>
        <div class="form-group">
          <label for="">背景</label>
          <input type="text" v-model="ssbackground.value" :disabled="ssbackground.disabled">
          <span v-if="ssbackground.type !== 'color'"></span>
        </div>
      </div>
        <div><button>修改</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  props: ['selectData'],
  data () {
    return {
      datas: this.selectData
    }
  },
  computed: {
    'sswidth' () {
      return this.searchStyle('width', this.selectData.styleList)
    },
    'ssheight' () {
      return this.searchStyle('height', this.selectData.styleList)
    },
    'ssfontsize' () {
      return this.searchStyle('font-size', this.selectData.styleList)
    },
    'sslineheight' () {
      return this.searchStyle('line-height', this.selectData.styleList)
    },
    'sscolor' () {
      return this.searchStyle('color', this.selectData.styleList)
    },
    'ssbackground' () {
      return this.searchStyle('background', this.selectData.styleList)
    }
  },
  methods: {
    searchStyle (name, list) {
      var obj = {value: 'null'}
      for (obj of list) {
        if (obj.name === name) return obj
      }
      return obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
.toolbar
  width 178px
  height 488px
  border 1px solid #ececed
  background #f2f2f2
  color #222222
  h1
    text-align center
    height 30px
    font-size 16px
    line-height 30px
    background #efefef
    border-bottom 1px solid #ececed
  .list
    margin 10px 6px
    width 162px
    background #efefef
    border 1px solid #ececed
    h2
      height 26px
      font-size 14px
      line-height 26px
      text-align center
    .mouduleItem
      width 140px
      margin 10px auto
      font-size 0
      button
        display inline-block
        width 68px
        padding 8px 0
        text-align center
        font-size 14px
        color #222
        background #efefef
        border 1px solid #000
        &:active
          color #fff
          background #37C5CE
    .attributeItem
      font-size 0
      button
        font-size 12px
      .form-group
        width 50%
        display inline-block
        margin 6px 0
        label
          display inline-block
          width 50%
          height 20px
          font-size 12px
          line-height 20px
          text-align center
        input
          display inline-block
          width 40%
          font-size 12px
          height 20px
          line-height 20px
        span
          display inline-block
          width 10%
          font-size 12px
          height 20px
          line-height 20px
</style>
