<template>
  <div class="divElement" :class="classList" :style="styleList" @click.stop="upId">
    {{value}}
    <p-element v-for="item in childNode" :key="item.id" :classList="item.classList" :styleList="item.styleList" :value="item.value"></p-element>
  </div>
</template>

<script>
import pElement from '@/components/pElement/pElement.vue'

export default {
  name: 'div-element',
  props: ['styleList', 'classList', 'value', 'childNode', 'key'],
  components: {
    pElement: pElement
  },
  methods: {
    upId (params) {
      alert(1)
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
