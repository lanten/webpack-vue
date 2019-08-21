<template>
  <div class="navbar">
    <p>navbar is created</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  mounted() {
    console.log('navbar is mounted')
  }
}
</script>

<style lang="less">
.navbar {
}
</style>
