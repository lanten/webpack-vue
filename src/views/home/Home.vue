<template>
  <div class="home">
    <p>home is ok</p>
    <button @click="$router.push({name:'demo-1'})">demo-1</button>
    <button @click="$router.push({name:'demo-jsx'})">demo-jsx</button>

    <hr>

    <div>
      <p>{{$store.state.count}}</p>
      <button @click="$store.commit('addCount',2)">addCount</button>
      <button @click="$store.commit('reduceCount',1)">reduceCount</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  mounted() {
    // request
    // this.$api.request().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })
  }
}
</script>

<style lang="scss">
.home {
}
</style>