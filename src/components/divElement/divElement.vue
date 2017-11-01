<template>
  <div class="divElement" :class="classList" :style="styleList">{{value}}</div>
</template>

<script>
export default {
  name: 'divel-element',
  props: ['styleList', 'classList', 'value']
}
</script>

<style lang="stylus" scoped>
.divElement
  width 100%
.test
  font-size 20px
</style>
