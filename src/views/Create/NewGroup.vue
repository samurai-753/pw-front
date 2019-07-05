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
                                <component :is="field.fieldType" v-model="field.value" :label="field.label" :required="field.required" :disabled="!field.editable" :items="field.items"/>
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
import { mapState } from 'vuex'

export default {
  name: 'NewGroup',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  computed:{
    ...mapState({
        userToken: state => state.userToken,
        userName: state => state.userName
    })
  },
  data () {
    return {
        title: 'Novo Projeto',
        apiEndpoint: `${API_URL}/projeto`,
        fields: [
                {
                    label: 'Nome',
                    name: 'nome',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true,
                    editable: true
                },
                {
                    label: 'Orientador',
                    name: 'orientador',
                    fieldType: 'v-text-field',
                    value: this.userName,
                    required: true,
                    editable: false
                },
                {
                    label: 'Coorientador',
                    name: 'coorientador',
                    fieldType: 'v-select',
                    items: [],
                    value: '',
                    required: false,
                    editable: true
                },
                {
                    label: 'Aluno',
                    name: 'alunos',
                    fieldType: 'v-select',
                    items: [],
                    value: '',
                    required: true,
                    editable: true
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
        orientadoresId: [],
        alunos: [],
        alunosId: []
    }
  },
  created(){
      this.fields[1].value = this.userName;
      this.getProfessores()
      this.getAlunos()
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

          let indiceAluno = this.alunos.indexOf(body['alunos'])
          body['alunos'] = [this.alunosId[indiceAluno]]
          axios.post(this.apiEndpoint, body, {headers : {'authorization' : this.userToken}}).then((response) => {
              const {data} = response.data
              if (response.status === 200) {
                    this.$notify({
                        group: 'main',
                        type: 'success',
                        title: 'Sucesso!',
                        text: 'Projeto criado com sucesso'
                    });
              } else {
                  this.$notify({
                        group: 'main',
                        type: 'error',
                        title: 'Erro!',
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
      },
      getAlunos(){
          axios.get(`${API_URL}/aluno`).then((response) => {
                const {data} = response.data

                let alunos = []
                let alunosId = []

                data.forEach((aluno) => {
                    alunos.push(aluno.detalhes.nome)
                    alunosId.push(aluno.idx)
                })

                this.alunos = alunos
                this.alunosId = alunosId

                this.fields[3].items = alunos
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