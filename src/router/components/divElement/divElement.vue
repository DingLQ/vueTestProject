<template>
  <div class="divElement" :class="classList" :style="getstyle" @click.stop="changeChoose">
    {{value}}
    <p-element v-for="item in childNode" :id="item.id" :key="item.id" :classList="item.classList" :styleList="item.styleList" :value="item.value"></p-element>
  </div>
</template>

<script>
import pElement from '@/components/pElement/pElement.vue'
import eventBus from '@/common/js/eventBus.js'
import tool from '@/common/js/tool.js'

export default {
  name: 'div-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'id'],
  computed: {
    getstyle: function () {
      return tool.getStyleList(this.styleList)
    }
  },
  components: {
    pElement: pElement
  },
  methods: {
    changeChoose () {
      eventBus.$emit('selectChange', this.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.divElement
  width 100%
.test
  font-size 20px
</style>
