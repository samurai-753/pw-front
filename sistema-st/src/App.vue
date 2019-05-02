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
        <ListComponents/>
      </v-flex>
    </v-container>    
  </v-app>
</template>

<script>
import Header from './components/Header'
import Drawer from './components/Drawer'
import ListComponents from './components/ListComponents'


export default {
  name: 'App',
  components: {
    Header,
    Drawer,
    ListComponents
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
