<template>
  <p class="pElement" :class="classList" :style="styleList" @click.stop="changeChoose">{{value}}</p>
</template>

<script>
import eventBus from '@/common/js/eventBus.js'

export default {
  name: 'p-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'id'],
  methods: {
    changeChoose () {
      eventBus.$emit('selectChange', this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.pElement
  width 100%
</style>
