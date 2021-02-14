import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
  state: {
      rolledNumber: 0,
      priceMultiplier: 2,
      playerStatement: "",
      playerBet: 0,
  },

  mutations: {
      changeRolledNumber(state, payload) {
          state.rolledNumber = payload
      },

      changePlayerStatement(state, payload) {
          state.playerStatement = payload
      },

      changePriceMultiplier(state, payload) {
          state.priceMultiplier = payload
      },

      changePlayerBet(state, payload) {
          state.playerBet = payload
      }
  },
  actions: {
  },
  modules: {
  }
})
