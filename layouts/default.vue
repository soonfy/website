<template>
  <div>
    <component-header/>
    <section class="container">
      <nuxt/>
    </section>
    <component-footer/>
  </div>
</template>

<script>
  import ComponentHeader from '../components/header.vue'
  import ComponentFooter from '../components/footer.vue'

  export default {
    components: {
      ComponentHeader,
      ComponentFooter
    }
  }

</script>

<style lang="less" scoped>
  section {
    min-height: 600px;
    /* display: flex;
    flex-direction: column; */
  }
</style>