<template>
  <section
    v-if="project && project.layout"
    class="article-layout__container"
  >

    <article-section
      v-for="(layout, key) in project.layout"
      :key="key"
      :layout="layout"
    />
  </section>
</template>

<script>
import articleSection from '~/components/articleSection.vue'
export default {
  components: { articleSection: articleSection },
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      console.log(payload)
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

      if (!data.entries[0]) {
        return error({ message: '404 Page not found', statusCode: 404 })
      }
      console.log('data', data)
      return { project: data.entries[0] }
    }
  }
}
</script>
<style lang="scss" scoped>
.article {
  &-layout {
    &__container {
      width: 100%;
    }
  }
}
</style>
