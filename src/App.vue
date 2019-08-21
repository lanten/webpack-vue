<template>
  <div id="app" :class="[`app-wrap-${$route.name}`]">
    <div id="content" :class="['app-content', `app-content-${$route.name}`]">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from './components/navbar'

const lang = $app.systemInfo.language

@Component({
  components: { Navbar },
})
export default class App extends Vue {}
</script>

<style lang="less">
@import './styles/index.less';
</style>
