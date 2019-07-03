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
                            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
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

export default {
  name: 'NewClass',
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
        title: 'Nova Disciplina',
        fields: [
                {
                    label: 'Nome',
                    name: 'name',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true
                },
                {
                    label: 'Tipo da disciplina',
                    name: 'description',
                    fieldType: 'v-select',
                    items: ["Graduação", "Pós-Graduação"],
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
        ],
        dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          headers: { "My-Awesome-Header": "header value" }
        }
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

.upload-box {
    width: 100%;
    height: 200px;
    background-color: rgb(223, 223, 223);
}

</style>