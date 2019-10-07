<template>
  <div :style="styleObject">
    Section: {{ layout }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    layout: {
      type: Object,
      default: () => {
        settings: {
          width: '100%'
        }
      }
    }
  },
  computed: {
    styleObject() {
      return {
        width: this.layout.settings.width + '%',
        backgroundColor: 'red'
      }
    }
  }
}
</script>
