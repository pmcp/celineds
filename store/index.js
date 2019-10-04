import axios from 'axios'
export const state = () => ({
  globals: {}
})
export const mutations = {
  setGlobals(state, payload) {
    state.globals = payload.data
  }
}
export const actions = {
  async nuxtServerInit({ commit }, context) {
    await axios
      .post(
        process.env.COCKPIT_API_URL +
          'singletons/get/globals' +
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
      .then(response => {
        return commit('setGlobals', { data: response.data })
      })
      .catch(e => {
        console.log(e)
      })
    // console.log('HERE', data)
    // await commit('setGlobals', data.title)
    // return
  }
}
