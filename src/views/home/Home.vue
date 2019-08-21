<template>
  <div class="home">
    <p>home is created</p>

    <ul>
      <li><router-link class="mt-8 ml-16 fs-24" to="any">404</router-link></li>
      <li><router-link class="mt-8 ml-16 fs-24" to="/about">about</router-link></li>
      <li><router-link class="mt-8 ml-16 fs-24" to="/error-page">error-page</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  mounted() {
    console.log('home is mounted')
  }
}
</script>

<style lang="less">
.home {
}
</style>
