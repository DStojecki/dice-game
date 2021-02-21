import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
  state: {
      rolledNumber: 0,
      previousNumber: null,
      priceMultiplier: 0,
      playerStatement: "",
      playerBet: 0,
      canRoll: false,
      money: 0, 
      canCreateHistory: false,
      gameHistory: []
  },

  mutations: {
      changePreviousNumber(state, payload) {
          state.previousNumber = payload
      }, 
    
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
      },

      changeCanRoll(state, payload) {
          state.canRoll = payload
      },

      addResult(state, payload) {
          state.money = parseInt(state.money + payload)
      },
      
      setMoney(state, payload) {
          state.money = payload
      },
      
      addGameHistoryRecord(state, payload) {
          state.gameHistory.push(payload)
      },

      clearHistory(state) {
          state.gameHistory = []
      },

      setCanCreateHistory(state, payload) {
        state.canCreateHistory = payload
      }

       

  }, 
  actions: {
  },
  modules: {
  }
})
