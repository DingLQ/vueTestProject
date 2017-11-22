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
      <div class="attributeItem">
        <div class="form-group">
          <label for="">宽度</label>
          <input type="text" v-model="width">
        </div>
        <div class="form-group">
          <label for="">高度</label>
          <input type="text" v-model="e_height">
        </div>
        <div class="form-group">
          <label for="">内边距</label>
          <input type="text">
        </div>
        <div class="form-group">
          <p>{{selectData.id}}</p>
          <p>{{e_height}}</p>
        </div>
        <div><button @click="changeSubmit">修改</button></div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  props: ['selectData'],
  data () {
    return {
      width: 100
    }
  },
  computed: {
    e_height: function () {
      if (this.selectData.id === 'null') {
        return 0
      } else {
        return this.selectData.styleList.height.match(/\d*/)[0]
      }
    }
  },
  methods: {
    changeSubmit () {
      console.log('data' + this.$data)
      this.$emit('styleListChange', this.height)
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
      .form-group
        display inline-block
        width 50%
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
          width 50%
          font-size 12px
          height 20px
          line-height 20px
      p
        font-size 12px
        text-align center
</style>
