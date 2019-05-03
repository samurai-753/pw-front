<template>
    <div class="container-login" v-if="user === null">
      <v-btn
        flat
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </div>
    <div class="container-login" v-on:click="showPopup" v-else>
      <div class="container-user-info">
        <!-- <div class="container-user-info-row"> -->
          <span class="user-info-username">Rafael Durelli</span>
          <img class="user-info-img" src="../assets/rafaduds.png" />
        <!-- </div> -->
      </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      user: {
        name: "Rafael Durelli",
        photo: "photo"
      }
    }
  },
  methods: {
    showPopup(){
      console.log("aer")
    }
  }
}
</script>

<style>
  .container-login { 
    width: 110%;
  }

  .container-login:hover { 
    background-color:rgba(255, 255, 255, 0.2);
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
