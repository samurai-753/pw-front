import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoginModal: false,
    showDrawer : false,
    userToken : null
  },
  getters: {
    showLoginModal: state => state.showLoginModal,
    userToken: state => state.userToken,
  },
  mutations: {
    showLoginModal(state) {
      state.showLoginModal = true
    },
    hideLoginModal(state) {
      state.showLoginModal = false
    },
    toggleDrawer(state) {
      state.showDrawer = !state.showDrawer
    },
    defineToken(state, payload) {
      state.userToken = payload.token
    }
  },
  actions: {
    showLoginModal(context) {
      context.commit('showLoginModal')
    },
    hideLoginModal(context) {
      context.commit('hideLoginModal')
    },
    toggleDrawer(context){
      context.commit('toggleDrawer')
    },
    defineUserToken(context, payload) {
      context.commit('defineToken', payload)
    }
  }
})
