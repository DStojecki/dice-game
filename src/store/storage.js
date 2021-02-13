import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
  state: {
      rolledNumber: 0,
  },

  mutations: {
      changeRolledNumber(state, payload) {
          state.rolledNumber = payload
      }
  },
  actions: {
  },
  modules: {
  }
})
