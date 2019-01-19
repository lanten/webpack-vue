<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  mounted() {
    // 在根节点添加一个 reload 方法
    this.$parent.reload = this.reload
  }
}
</script>

<style lang="scss">
</style>
