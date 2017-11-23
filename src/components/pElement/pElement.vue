<template>
  <p class="pElement" :class="classList" :style="getstyle" @click.stop="changeChoose">{{value}}</p>
</template>

<script>
import eventBus from '@/common/js/eventBus.js'

export default {
  name: 'p-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'id'],
  computed: {
    getstyle: function () {
      var slist = this.styleList
      var rObj = {}
      var obj = {}
      for (obj of slist) {
        if (obj.type === 'color') {
          rObj[obj.name] = obj.value
        } else {
          rObj[obj.name] = obj.value + obj.type
        }
      }
      return rObj
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
