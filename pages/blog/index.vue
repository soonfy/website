<template>
  <div class="blog-container">
    article
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '/blog'
      }
    },
    head: {
      title: '博客列表',
    },
    methods: {
      selectNav(key, keyPath) {
        this.$router.push(key);
      },
    },
  }

</script>

<style scoped lang="less">
  .blog-container {
    display: flex;
    display: -webkit-flex;
  }

  .blog-nav {
    width: 200px;
  }
</style>