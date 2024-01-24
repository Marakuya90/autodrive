import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  state: {
    isPopup: false,
    activeCity: '',
    isSend: false
  },
  getters: {},
  mutations: {
    setInitialState(state) {
      state.isPopup = false
      state.activeCity = ''
      state.isSend = false
    },
    setActiveCity(state, payload) {
      if (state.isPopup === false)
        state.isPopup = true
      state.activeCity = payload
    },
    setPopup(state, payload) {
      state.isPopup = payload
    },
    close(state) {
      state.isPopup = false
      state.isSend = false
      state.activeCity = ''
    }
  },
  actions: {
    actionActiveCity({ state, commit }, payload) {
      if (state.isPopup === false)
        commit('isPopup', true)
      commit('setActiveCity', payload)
    },
    actionSending({ state, commit }, payload) {
      state.isSend = payload
      commit('setActiveCity', '')
    }
  }
})