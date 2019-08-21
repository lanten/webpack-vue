<template>
  <div class="error-page">
    <p>error-page is created</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ErrorPage extends Vue {
  mounted() {
    console.log('error-page is mounted')
  }
}
</script>

<style lang="less">
.error-page {
}
</style>
