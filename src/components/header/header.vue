<template>
  <div class="header">
    <div class="info">
      <span class="logo">DTB</span>
      <span class="title"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/tools.styl"

.header
  width 100%
  height 50px
  background #3a8fb7
  margin-bottom 30px;
  color #fff
  .info
    width 1000px
    margin 0 auto
    .logo
      display inline-block
      font-size 20px
      line-height 50px
    .title
      display inline-block
      text-align center
</style>
