<template>
  <v-app >
    <div class="main">
      <v-container grid-list-md>
        <v-flex xs12>
          <Header/>
          <Drawer/>
        </v-flex>
      </v-container>
      <v-container>
        <v-flex xs12>
          <MainComponent/>
        </v-flex>
      </v-container>    
    </div>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Drawer from './components/Drawer'
import MainComponent from './components/MainComponent'


export default {
  name: 'App',
  components: {
    Header,
    Drawer,
    MainComponent
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.container-header {
  height: 200px
}
.main {
  background-image: linear-gradient(to bottom, #1E88E5, #1565C0);
  height: 100%;
}
</style>
