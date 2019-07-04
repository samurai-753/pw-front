<template>
    <div class="container">
        <div class="elevation-20 box">
            <v-flex>
                <h2 class="title"> {{this.title}} </h2>
            </v-flex>
            <v-divider class="divider"/>
            <v-form>
                <v-container grid-list-xs>
                    <v-layout column>
                        <v-flex>
                            <div v-for="field in fields" :key="field.label">
                                <component :is="field.fieldType" v-model="field.value" :label="field.label" :required="field.required" :items="field.items"/>
                            </div>
                        </v-flex>
                        <v-flex>
                            <vue-dropzone ref="myVueDropzone" id="dropzone" v-on:vdropzone-success="completed" :options="dropzoneOptions"></vue-dropzone>
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

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {API_URL} from '../../config/config'
import { mapState } from 'vuex';

export default {
  name: 'NewPublication',
  components: {
    VTextField,
    VSelect,
    vueDropzone: vue2Dropzone
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Nova Publicação',
        apiEndpoint: `${API_URL}/publicacao`,
        fields: [
                {
                    label: 'Nome',
                    name: 'name',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Informação',
                    name: 'info',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Tipo',
                    name: 'tipo',
                    fieldType: 'v-select',
                    items: ["Conferencia", "Resumo", "Periodico"],
                    value: '',
                    required: true
                }
        ],
        dict: {"Conferencia" : "CONF", "Resumo" : "RES", "Periodico" : "PER"},
        docid: null,
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
        dropzoneOptions: {
          url: `${API_URL}/documento`,
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "Authorization": this.token }
        }
    }
  },
  computed: {
      ...mapState({
         token : state => state.userToken 
      })
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
          body['documento'] = this.docid
          body['tipo'] = this.dict[body.tipo]
          axios.post(this.apiEndpoint, body, {headers: {'authorization' : this.token}}).then((response) => {
              if(response.status === 200) {
                  this.$notify({
                    group: 'main',
                    type: 'success',
                    title: 'Sucesso!',
                    text: 'Publicação cadastrada com sucesso'
                });
              } else {
                this.$notify({
                    group: 'main',
                    type: 'error',
                    title: 'Ocorreu um erro',
                    text: 'Erro'
                });
              }
          }).catch((err) => {
            this.$notify({
                group: 'main',
                type: 'error',
                title: 'Ocorreu um erro',
                text: err
            });
          })

      },
      cancel(){
          this.$router.push('/')
      },
      completed(file, response){
        this.docid = response.data.idx
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