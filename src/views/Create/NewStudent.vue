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
                                <component :is="field.fieldType" v-model="field.value" :label="field.label" :required="field.required" :items="field.items"/>
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


export default {
  name: 'NewStudent',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Novo Projeto',
        apiEndpoint: `${API_URL}/student`,
        fields: [
                {
                    label: 'Nome do aluno',
                    name: 'nome',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Email institucional',
                    name: 'email',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Curso',
                    name: 'curso',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Resumo',
                    name: 'resumo',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
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
        ]
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
          console.log(body)
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