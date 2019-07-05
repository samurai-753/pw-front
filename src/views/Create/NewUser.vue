<template>
    <div class="container">
        <div class="elevation-20 box">
            <v-flex>
                <h2 class="title"> {{this.title}} </h2>
            </v-flex>
            <v-divider class="divider"/>
            <v-form>
                <v-container grid-list-xs>
                    <v-layout>
                        <v-flex>
                            <div v-for="field in fields" :key="field.label">
                                <component 
                                    :is="field.fieldType" 
                                    v-model="field.value" 
                                    :label="field.label" 
                                    :required="field.required" 
                                    :items="field.items" 
                                    :type="field.type" 
                                />
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
            <v-divider class="divider"/>
            <v-flex xs12>
                <v-layout class="actions">
                    <v-btn v-for="action in actions" :color="action.color" :key="action.onClick" v-on:click="HandleFunctionCall(action.onClick)" >{{action.label}}</v-btn>
                </v-layout>
            </v-flex>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { VTextField, VSelect } from 'vuetify/lib'

import {API_URL} from '../../config/config'

import {mapState} from 'vuex'


export default {
  name: 'NewUser',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Novo Usuário',
        apiEndpoint: `${API_URL}/professor`,
        fields: [
                {
                    label: 'Nome',
                    name: 'nome',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Email',
                    name: 'email',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Telefone',
                    name: 'telefone',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Sala',
                    name: 'sala',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Senha',
                    name: 'senha',
                    fieldType: 'v-text-field',
                    type: 'password',
                    value: '',
                    required: true,
                },
                {
                    label: 'Confirmar senha',
                    name: 'confirmarSenha',
                    fieldType: 'v-text-field',
                    type: 'password',
                    value: '',
                    required: true,
                }
        ],
        actions: [
            {
                "label" : "Cadastrar",
                "color" : "success",
                "onClick": "sendRequisition"
            },
            {
                "label" : "Cancelar",
                "color" : "error",
                "onClick": "cancel"
            },
        ],
        showConfirmPassword: false,
        showPassword: false,
        idx: null,
        editable: false
    }
  },
  computed: {
    ...mapState({
        token : state => state.userToken
    })
  },
  mounted() {
      const { idx } = this.$route.params
      this.idx = idx
      if (idx !== -1) {
          this.editable = true
          var self = this
          axios.get(this.apiEndpoint + '/' + idx).then((response) => {
              const {email, nome, telefone} = response.data.data.detalhes
              const {sala} = response.data.data
              let user = {
                  email, nome, telefone, sala
              }
              self.fields = self.fields.filter(field => field.name !== "senha" && field.name !== "confirmarSenha")
              for (var i = 0; i < self.fields.length; i++) {
                  self.fields[i].value = user[self.fields[i].name]
              }
              self.actions[0].label = "Editar"
              self.actions[0].onClick = "editar"
              self.title = "Editar professor"
          })
      }
  },
  methods: {
    HandleFunctionCall(functionName){
        this[functionName]()
    },
    sendRequisition(){
        let body = {}
        this.fields.forEach((field) => {
            body[field.name] = field.value
        })
        if (body.senha === body.confirmarSenha) {
            axios.post(this.apiEndpoint, body).then((response) => {
            //Recuperar o token
            const {status} = response
            if (status === 200) {
                this.$notify({
                    group: 'main',
                    type: 'success',
                    title: 'Sucesso!',
                    text: 'Usuário cadastrado com sucesso'
                });
            } else {
                this.$notify({
                    group: 'main',
                    type: 'error',
                    title: 'Ocorreu um erro!',
                    text: 'Erro'
                });
            }
            }).catch((err) => {
                this.$notify({
                    group: 'main',
                    type: 'error',
                    title: 'Ocorreu um erro!',
                    text: err
                });
            })
        } else {
            this.$notify({
                group: 'main',
                type: 'error',
                title: 'Ocorreu um erro!',
                text: 'As senhas não correspondem'
            });
        }
    },
    editar(){
        let body = {}
        this.fields.forEach((field) => {
            body[field.name] = field.value
        })

        let header = {'Authorization' : this.token}
        console.log(this)

        axios.patch(this.apiEndpoint + '/' + this.idx, body, {headers: header}).then(() => {
            this.$notify({
                group: 'main',
                type: 'success',
                title: 'Sucesso!',
                text: 'Usuário editado com sucesso!'
            });
        })
    },
    cancel(){
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 5%;
}

.box {
    padding: 30px;
    background-color: white;
    width: 100%;
    border-radius: 40px;
}

.divider {
    margin-top: 20px;
    margin-bottom: 20px
}

.title {
    text-align: center;
}

.actions {
    display: flex;
    justify-content: center;
}

</style>