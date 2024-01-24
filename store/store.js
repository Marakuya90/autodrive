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
    setInitialState() {
      this.state.isPopup = false
      this.state.activeCity = ''
      this.state.isSend = false
    },
    setActiveCity(state, payload) {
      this.state.activeCity = payload
    },
    setPopup(state, payload) {
      this.state.isPopup = payload
    },
    sending(state,payload) {
      this.state.isSend = payload
    }
  },
  actions: {
    actionActiveCity({ state,commit }, payload) {
      if(state.isPopup === false)
        state.isPopup = true
      commit('setActiveCity', payload)
    },
    actionSending({commit}) {
      commit('sending',true)
    }
  }
})