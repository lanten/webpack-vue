<template>
  <div class="home">
    <p>router - {{$route.meta.title}}</p>
    <button @click="$router.back()">back</button>
  </div>
</template>

<script>
export default {
  name: 'home',

  mounted() {
    console.log(this)
  }
}
</script>

<style lang="scss">
.home {
}
</style>