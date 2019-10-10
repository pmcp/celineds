<template>
  <div
    :style="styleObject"
    v-html="block.text" />
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    styleObject() {
      return {
        width: `${this.block.width}%`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
