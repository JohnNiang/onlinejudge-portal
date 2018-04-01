import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    pushMessage(state, message) {
      state.messages.push(message)
    },
    removeMessage(state, index) {
      state.messages.splice(index, 1)
    }
  }
})

export default store
