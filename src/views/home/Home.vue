<template>
  <div class="home">
    <p>home is ok</p>
    <button @click="$router.push({name:'demo-1'})">demo-1</button>
    <button @click="$router.push({name:'demo-jsx'})">demo-jsx</button>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style lang="scss">
.home {
}
</style>