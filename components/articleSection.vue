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
import imageblock from '~/components/blocks/imageblock.vue'
import verticalDivider from '~/components/blocks/verticalDivider.vue'
import textBlock from '~/components/blocks/textBlock.vue'
export default {
  components: {
    imageblock: imageblock,
    verticalDivider: verticalDivider,
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
