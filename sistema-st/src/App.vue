<template>
  <v-app>
    <v-container grid-list-md>
      <v-flex xs12>
        <Header/>
      </v-flex>
    </v-container>
    <v-container>
      <v-flex xs12>
        <Drawer/>
      </v-flex>
    </v-container>    
  </v-app>
</template>

<script>
import Header from './components/Header'
import Drawer from './components/Drawer'



export default {
  name: 'App',
  components: {
    Header,
    Drawer
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
</style>
