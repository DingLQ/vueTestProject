<template>
  <div class="form-group">
    <label for="">{{name}}</label>
    <input type="text" v-model="value" :disabled="disabled">
    <span v-if="type !== 'color'">{{type}}</span>
  </div>
</template>

<script>
export default {
  name: 'styleInput',
  props: ['styleData'],
  data () {
    return {
      name: this.styleData.name,
      value: this.styleData.value,
      type: this.styleData.type,
      range: this.styleData.range,
      disabled: this.styleData.disabled || false,
      view: this.styleData.view || true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
.form-group
  width 50%
  display inline-block
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
    width 40%
    font-size 12px
    height 20px
    line-height 20px
  span
    display inline-block
    width 10%
    font-size 12px
    height 20px
    line-height 20px
</style>
