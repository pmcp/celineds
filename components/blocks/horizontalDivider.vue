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
        height: this.block.height + '%',
        width: '100%'
      }
    }
  }
}
</script>
