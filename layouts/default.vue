<template>
  <div>
    <page-header />
    <nuxt />

    <!-- <page-footer/> -->
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style>
</style>
