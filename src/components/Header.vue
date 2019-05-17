<template>
  <v-toolbar class="blue darken-2" app>
    <div class="container-header">
      <div>
        <Menu/>
      </div>
      <div class="header-right">
        <Login/>
      </div>
    </div>
  </v-toolbar>
</template>

<script>
import Menu from './Menu'
import Login from './Login'


export default {
  name: 'Header',
  components: {
    Menu, 
    Login
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  }
}
</script>

<style>
  .container-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

/* 
  .header-right {
    align-self: flex-end;
  } */
</style>
