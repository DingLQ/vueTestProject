<template>
  <p class="pElement" :class="classList" :style="getstyle" @click.stop="changeChoose">{{value}}</p>
</template>

<script>
import eventBus from '@/common/js/eventBus.js'
import tool from '@/common/js/tool.js'

export default {
  name: 'p-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'id'],
  computed: {
    getstyle: function () {
      return tool.getStyleList(this.styleList)
    }
  },
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
