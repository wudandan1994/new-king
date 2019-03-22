<template>
  <div id="app">
    
    <router-view/>
    <h3>h3标签</h3>
    <van-button type="danger">主要按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
