<template>
  <header class="container">
    <el-menu :default-active="activeIndex" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" mode="horizontal"
      @select="selectNav" :router="true">
      <el-menu-item index="/">
        <i class="fa fa-home"></i>
        <span>首页</span>
      </el-menu-item>

      <el-submenu index="/blog">
        <template slot="title"><i class="fa fa-book"></i>博客</template>
        <el-menu-item index="/blog"><i class="fa fa-list"></i>博客列表</el-menu-item>
        <el-menu-item index="/blog/post"><i class="fa fa-pencil"></i>写博客</el-menu-item>
      </el-submenu>

      <el-menu-item index="/chat">
        <i class="fa fa-comments"></i>
        <span>聊天室</span>
      </el-menu-item>

      <el-menu-item index="/show">
        <i class="fa fa-area-chart"></i>
        <span>数据分析</span>
      </el-menu-item>
    </el-menu>
  </header>
</template>

<script>
  export default {
    name: 'headerComponent',
    data() {
      return {
        activeIndex: this.$router.currentRoute.path,
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