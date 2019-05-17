<template>
  <v-app>
    <div>
      <Drawer/>
      <Header/>
    </div>
    <div class="main-container">
      <MainComponent/>
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
.main-container {
  background-image: linear-gradient(to bottom, #1E88E5, #1565C0);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
