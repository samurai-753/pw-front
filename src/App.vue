<template>
  <v-app>
    <the-header />
    <v-content class="main-div">
      <div @click="closeLoginModal">
        <router-view/>
        <the-login-modal id="login-modal" v-if="showLoginModal"/>
        <the-drawer/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TheLoginModal from './components/TheLoginModal'
import TheHeader from './components/TheHeader'
import TheDrawer from './components/TheDrawer'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    TheLoginModal,
    TheHeader,
    TheDrawer
  },
  computed : {
    ...mapState({
      showLoginModal : state => state.showLoginModal
    })
  },
  data () {
    return {
      //
    }
  },
  methods: {
    closeLoginModal(event) {
      if (this.showLoginModal && event.target.className === "modal-wrapper") {
        this.hideLoginModal()
      }
    },
    ...mapActions(['hideLoginModal'])
  }
}
</script>

<style scoped>
  .main-div {
    background-image: linear-gradient(to bottom, #1E88E5, #1565C0);
  }
</style>

