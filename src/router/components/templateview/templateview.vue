<template>
  <div class="templateview">
    <div-element v-for="item in dataJson.childNode" :id="item.id" :key="item.id" :styleList="item.styleList" :classList="item.classList" :value="item.value" :childNode="item.childNode"></div-element>
  </div>
</template>

<script>
import divElement from '@/components/divElement/divElement.vue'

export default {
  name: 'templateview',
  props: ['dataJson'],
  components: {
    divElement: divElement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/templateview.styl';
</style>
