<template>
  <section>

    {{ project }}

  </section>
</template>

<script>
export default {
  async asyncData({ app, params, error, payload }) {
    if (payload) {
      return { post: payload }
    } else {
      let { data } = await app.$axios.post(
        process.env.COCKPIT_API_URL +
          'collections/get/projects?token=' +
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

      return { project: data.entries[0] }
    }
  }
}
</script>
