<template>
  <div id="app">
    <router-view name="page-header"/>
    <div>
      <router-view></router-view>
    </div>
    <footer>
      <router-view name="page-footer"/>
    </footer>
  </div>
</template>
<script>

</script>
<style lang="scss">
  #app {
    width: 100%;
    margin: 0 auto;
  }
</style>
