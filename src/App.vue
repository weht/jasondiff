<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  margin: 50px 50px;
  padding-top: 50px;
  width: 95%;
  min-height: 85vh;
  background: #edf0f7;
  overflow-y: auto;
}
*::-webkit-scrollbar {
  display: none;
}
</style>
