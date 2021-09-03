<template>
  <div>
    <router-link to="step1">最初の質問へ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toStep1(){
      this.$router.push('/step1')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
