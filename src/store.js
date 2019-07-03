import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showLoginModal: false,
    showDrawer : false
  },
  getters: {
    showLoginModal: state => state.showLoginModal
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
    }
  }
})
