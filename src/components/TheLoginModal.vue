<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <v-layout row wrap align-center>
                <v-flex xs11 >
                  <span class="title"> Acesse a sua conta </span>
                </v-flex>  
                <v-flex xs1>
                  <v-icon class="close-icon" @click="hideLoginModal"> close </v-icon>
                </v-flex>              
              </v-layout>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
               <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    label="Email"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    label="Senha"
                    type="password"
                  ></v-text-field>
                </v-flex>

                <v-flex xs12  class="text-xs-right">
                  <a href="#" @click="forgotPassword">Esqueci minha senha</a>
                </v-flex>

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <div class="container-button">
                <v-flex xs12>
                  <v-btn color="success" @click="sendInfo" block >Login</v-btn>
                </v-flex>
              </div>

              <div class="container-button">
                <v-flex xs12  class="text-xs-center">
                    <!-- <a href="#" @click="goToNewUser">Ainda não é cadastrado?</a> -->
                    <a href="#" @click="goToNewUser">Ainda não é cadastrado?</a>
                    <!-- <router-link @click="goToNewUser" to="/newuser">Ainda não é cadastrado?</router-link> -->
                </v-flex>
              </div>

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>

import {API_URL} from '../config/config'
import axios from 'axios'

import { mapState, mapActions } from 'vuex'


export default {
  name: "TheLoginModal",
  data: function() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    sendInfo(){
        let apiEndpoint = `${API_URL}/login`
        const {email, password} = this
        let body = {email, password}
        axios.post(apiEndpoint, body).then((response) => {
          if(response.data.message != null){
            throw Exception;
          }
          const {access_token} = response.data
          const user_name = response.data.nome;
          this.hideLoginModal()
          this.defineUserToken({'token' : access_token, 'name' : user_name})
          this.$notify({
            group: 'main',
            type: 'success',
            title: 'Sucesso!',
            text: 'Credenciais aprovadas'
          });
        }).catch((err) => {
          this.$notify({
            group: 'main',
            type: 'error',
            title: 'Ocorreu um erro!',
            text: 'As credenciais não existem no banco'
          });
        })
    },
    goToNewUser(event){
        event.preventDefault()
        this.$router.push('/newuser')
        this.hideLoginModal()
    },
    forgotPassword(){
      alert("Ainda não implementado")
    },
    ...mapActions(['hideLoginModal', 'defineUserToken'])
  }
}
</script>

<style>
.title {
  color: #516a94;
}

.container-button {
  padding: 5px;
}
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 25px;

}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.close-icon {
    border-radius: 20px;
    height: 35px;
    width: 35px;
}

.close-icon:hover{
    background-color: rgb(207, 207, 207, 0.5);
    border-radius: 20px;
}
</style>

