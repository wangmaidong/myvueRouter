<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
