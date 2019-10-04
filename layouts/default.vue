<template>
  <div>
    <page-header />
    <nuxt />

    <!-- <page-footer/> -->
  </div>
</template>

<script>
import PageHeader from '~/components/pageHeader.vue'
import PageFooter from '~/components/pageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
</style>
