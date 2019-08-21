<template>
  <div class="error-page-404">
    <p>error-page-404 is created</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ErrorPage extends Vue {
  mounted() {
    console.log('error-page-404 is mounted')
  }
}
</script>

<style lang="less">
.error-page-404 {
}
</style>
