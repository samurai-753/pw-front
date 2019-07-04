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
  name: 'NewGroup',
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
        apiEndpoint: `${API_URL}/projeto`,
        fields: [
                {
                    label: 'Nome',
                    name: 'name',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Orientador',
                    name: 'orientador',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Coorientador',
                    name: 'coorientador',
                    fieldType: 'v-select',
                    items: [],
                    trueValue: '',
                    value: '',
                    required: false
                },
                {
                    label: 'Alunos',
                    name: 'alunos',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
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
        orientadores: [],
        orientadoresId: []
    }
  },
  created(){
      this.getProfessores()
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
          let indice = this.orientadores.indexOf(body['coorientador'])
          body['coorientador'] = this.orientadoresId[indice]

          axios.post(this.apiEndpoint, body).then((response) => {
              const {data} = response.data
              if (data.status === 200) {
                    this.$notify({
                        group: 'main',
                        type: 'success',
                        title: 'Sucesso!',
                        text: 'Projeto criado com sucesso'
                    });
              }
          })
      },
      cancel(){
          this.$router.push('/')
      },
      getProfessores(){
            axios.get(`${API_URL}/professor`).then((response) => {
                const {data} = response.data

                let orientadores = []
                let orientadoresId = []

                data.forEach((professor) => {
                    orientadores.push(professor.detalhes.nome)
                    orientadoresId.push(professor.idx)
                })

                this.orientadores = orientadores
                this.orientadoresId = orientadoresId

                this.fields[2].items = orientadores
            })
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