<template>
  <img
    :src="imageSrc"
    :style="styleObject"
    class="image--basic">
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
    imageSrc() {
      return `http://celinedscms.friendlyinter.net
${this.block.image.styles[0].path}`
    },
    styleObject() {
      return {
        width: `${this.block.width}%`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.image {
  &--basic {
    object-fit: contain;
    object-position: top;
  }
}
</style>
