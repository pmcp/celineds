<template>
  <div :style="styleObject" />
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
        width: this.block.width + '%'
      }
    }
  }
}
</script>
