<template :style="styleObject">
  <div :style="styleObject">
    <component
      v-for="(block, key) in blocks"
      :key="key"
      :is="block.component"
      :block="block.settings"
    />
  </div>
</template>

<script>
import imageBlock from '~/components/blocks/imageBlock.vue'
import textBlock from '~/components/blocks/textBlock.vue'
import verticalDivider from '~/components/blocks/verticalDivider.vue'
import horizontalDivider from '~/components/blocks/horizontalDivider.vue'
export default {
  components: {
    imageBlock: imageBlock,
    verticalDivider: verticalDivider,
    horizontalDivider: horizontalDivider,
    textBlock: textBlock
  },
  props: {
    settings: {
      type: Object,
      default: () => {
        width: '100%'
      }
    },
    blocks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    styleObject() {
      return {
        width: this.settings.width + '%'
      }
    }
  }
}
</script>
