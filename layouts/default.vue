<template>
  <div>
    <component-header/>
    <section class="container">
      <nuxt/>
    </section>
  </div>
</template>

<script>
  import ComponentHeader from '../components/Header.vue'

  export default {
    components: {
      ComponentHeader
    }
  }

</script>

<style lang="less" scoped>

</style>