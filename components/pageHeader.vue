<template>
  <header class="w-100 text-center">
    <a
      class="text-gray-800 text-3xl font-bold"
      href="/"
    >
      <h1>
        {{ globals.title }}
      </h1>
    </a>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['globals'])
  }
}
</script>
