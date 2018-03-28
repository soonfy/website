<template>
  <footer class="container">
    <i class="fa fa-copyright"></i>
    <router-link to="/index/">soonfy</router-link>
  </footer>
</template>

<script>
  export default {
    name: 'footerComponent'
  }

</script>

<style scoped lang="less">
  footer {
    border-top: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    flex: auto;
  }
</style>