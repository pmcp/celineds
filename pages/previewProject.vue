<template>
  <section
    v-if="project && project.layout"
    class="article-layout__section"
  >
    <article-section
      v-for="(section, key) in project.layout"
      :key="key"
      :settings="section.settings"
      :blocks="section.children"
      class="article-layout__block"
    />
  </section>
</template>

<script>
import articleSection from '~/components/articleSection.vue'

export default {
  components: {
    articleSection: articleSection
  },
  data() {
    return {
      project: {}
    }
  },
  mounted: function() {
    window.addEventListener('message', this.handlePreviewEntry)
    // this.$nextTick(function() {
    //   console.log('test')
    //   window.addEventListener('message', this.handlePreviewEntry)
    // })
  },
  methods: {
    handlePreviewEntry(event) {
      console.log('test2', event)
      this.project = event.data.entry
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~tachyons';
.article {
  &-layout {
    &__section {
      @extend .flex;
      @extend .justify-center;
      flex-wrap: wrap;
      width: 100%;
    }
    &__block {
      @extend .flex;
      @extend .justify-center;
      flex-wrap: wrap;
      width: 100%;
    }
  }
}
</style>
