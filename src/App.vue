<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <footer>
      <p>2016-2017© dingy test</p>
    </footer>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'

export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" scoped>
@import "common/stylus/index.styl"

</style>
