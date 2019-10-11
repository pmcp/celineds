<template>
  <div
    :style="styleObject"
    class="imageContainer" >
    
    <img
      v-if="block.image !== null"
      :src="imageSrc"
      class="image--basic">
  </div>
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
      return `http://celinedscms.friendlyinter.net/storage/uploads/
${this.block.image.path}`
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
    width: 100%;
    height: auto;
    // object-fit: contain;
    // object-position: top;
  }
}
</style>
