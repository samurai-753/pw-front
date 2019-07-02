<template>
    <div class="container-login">
        <v-btn
            round
            target="_blank"
            color="#a7c7f9"
            v-on:click="showModal"
        >
            Login
        </v-btn>
    </div>
</template>

<script>

import { mapActions } from 'vuex'


export default {
  name: "TheLogin",
  data () {
    return {
      user: null
    }
  },
  methods: {
    showModal(){
        this.showLoginModal()
    },
    ...mapActions(['showLoginModal'])
  }
}
</script>

<style scoped>
  .container-login { 
    width: 110%;
  }

  .container-login:hover { 
    background-color:rgba(255, 255, 255, 0.5);
    width: 110%;
    height: 250%;
  }
  
  .container-user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-content: flex-end;
  }
  .user-info-img {
    height: 40px;
    border-radius: 50%;
    margin-left: 7px;
  }

  .user-info-username{
    color: #fff;
    font-size: 20px;
    margin-right: 7px;
  }
</style>
