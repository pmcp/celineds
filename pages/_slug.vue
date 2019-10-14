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
  async asyncData({ app, params, error, payload }) {
    async function f(path) {
      let { data } = await app.$axios.post(
        process.env.COCKPIT_API_URL +
          'cockpit/image' +
          process.env.COCKPIT_API_TOKEN +
          '&src=' +
          path +
          '&w=200&h=200&o=1',
        JSON.stringify(),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    if (payload) {
      return { project: payload }
    } else {
      let { data } = await app.$axios.post(
        process.env.COCKPIT_API_URL +
          'collections/get/projects' +
          process.env.COCKPIT_API_TOKEN,
        JSON.stringify({
          filter: { published: true, slug: params.slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      // if (data.entries[0].layout) {
      //   data.entries[0].layout.forEach(section => {
      //     // console.log(section.children)
      //     if (section.children != []) {
      //       section.children.forEach(block => {
      //         if (block.settings && block.settings.image) {
      //           // f(block.settings.image.path).then(result => {
      //           //   console.log('here', result)
      //           // })
      //         }

      //         // if (section.children != []) {
      //         // }
      //       })
      //     }
      //   })
      // }

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }

      return { project: data.entries[0] }
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
