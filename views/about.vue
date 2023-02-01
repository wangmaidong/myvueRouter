<template>
  <div>
    about
    <router-link to="/about/a">a</router-link>
    <router-link to="/about/b">b</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped lang='scss'>

</style>
