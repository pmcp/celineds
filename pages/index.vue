<template>

  <main class="cf pa3 pa4-m pa5-l mw9 w-100 center">
    <div class="flex flex-wrap">
      <div
        v-for="(category, key) in categories"
        :key="key"
        class="outline w-25 pa3 mr2 tc "
      >
        <a :href="category.linkedArticle.slug">{{ category.name }}</a>
      </div>
    </div>
  </main>

</template>

<script>
import { mapMutations } from 'vuex'
export default {
  async asyncData({ app, store }) {
    const { data } = await app.$axios.post(
      process.env.COCKPIT_API_URL +
        'collections/get/Categories' +
        process.env.COCKPIT_API_TOKEN,
      JSON.stringify({
        // filter: { published: true },
        // sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    return {
      categories: data.entries
    }
  }
}
</script>

<style lang="scss">
@import '~tachyons';
</style>
