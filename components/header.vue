<template>
  <header class="container">
    <el-menu :default-active="activeIndex" background-color="#505050" text-color="#fff" active-text-color="#FFCC00" mode="horizontal"
      @select="selectNav" :router="true">
      <el-menu-item index="/">
        <i class="fa fa-home"></i>
        <span>首页</span>
      </el-menu-item>

      <el-submenu index="/blog/">
        <template slot="title"><i class="fa fa-book"></i>博客</template>
        <el-menu-item index="/blog/"><i class="fa fa-list"></i>博客列表</el-menu-item>
        <el-menu-item index="/blog/post/"><i class="fa fa-pencil"></i>写博客</el-menu-item>
      </el-submenu>

      <el-menu-item index="/chat/">
        <i class="fa fa-comments"></i>
        <span>聊天室</span>
      </el-menu-item>

      <el-menu-item index="/show/">
        <i class="fa fa-area-chart"></i>
        <span>数据分析</span>
      </el-menu-item>

      <el-menu-item index="/home/">
        <i class="fa fa-user"></i>
        <span>个人主页</span>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: 'headerComponent',
    data() {
      let currentRoute = this.$router.currentRoute.path;
      return {
        activeIndex: currentRoute,
      };
    },
    methods: {
      selectNav(key, keyPath) {
        this.$router.push(key);
      },
    },
  }

</script>

<style scoped lang="less">

</style>