<template>
  <v-app>
    <the-header />
    <v-content class="main-div">
      <router-view/>
      <the-login-modal v-if="showLoginModal"/>
      <the-drawer/>
    </v-content>
  </v-app>
</template>

<script>
import TheLoginModal from './components/TheLoginModal'
import TheHeader from './components/TheHeader'
import TheDrawer from './components/TheDrawer'

import { mapState } from 'vuex'

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
  }
}
</script>

<style scoped>
  .main-div {
    background-image: linear-gradient(to bottom, #1E88E5, #1565C0);
  }
</style>

