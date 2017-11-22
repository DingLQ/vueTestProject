<template>
  <div class="form-group">
    <label for="">{{name}}</label>
    <input type="text" v-model="width">
  </div>
</template>

<script>
export default {
  name: 'input',
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
</style>
