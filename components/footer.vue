<template>
  <footer class="container">
    <div class="copyright">
      <span>Copyright</span>
      <i class="fa fa-copyright"></i>
      <span>2018. All Rights Reserved.</span>
    </div>
    <div>
      <router-link to="/home/">
        <span class="info"><i class="fa fa-user-o"></i>soonfy</span>
      </router-link>
      <span>&lt;soonfy@163.com&gt;</span>
    </div>
    <div>
      <i class="fa fa-share-square-o"></i>
      <a href="https://github.com/soonfy"><span class="info"><i class="fa fa-github"></i></span></a>
    </div>

  </footer>
</template>

<script>
  export default {
    name: 'footerComponent'
  }

</script>

<style scoped lang="less">
  footer {
    border-top: 1px solid #c0c0c0;
    padding: 20px;
    text-align: center;
    flex: auto;
    color: #909090;
  }

  footer>div {
    padding: 5px 0 0 0;
  }

  span:first-child {
    display: inline-block;
    margin-right: 5px;
  }

  .info {
    color: #909090;
    font-size: 12px;
  }
</style>