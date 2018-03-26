<template>
  <div>
    <span>{{test}}</span>
    <input type="text" name="123" id="id" @click="console.log(this)">
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(123)
  },
  data() {
    return {
      test: 'vue test ok12'
    }
  }
};
</script>
