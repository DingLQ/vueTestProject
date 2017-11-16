<template>
  <p class="pElement" :class="classList" :style="styleList" @click.stop="upId">{{value}}</p>
</template>

<script>
export default {
  name: 'p-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'key'],
  methods: {
    upId () {
      alert(2)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pElement
  width 100%
</style>
