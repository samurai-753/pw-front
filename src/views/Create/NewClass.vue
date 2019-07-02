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
                            <form ref="fileform">
                                <div class="upload-box">
                                    <span class="drop-files">Drop the files here!</span>
                                    <div v-for="(file, key) in files" :key="key" class="file-listing">
                                        <img class="preview" v-bind:ref="'preview'+parseInt( key )"/>
                                        {{ file.name }}
                                    </div>
                                </div>
                            </form>
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

export default {
  name: 'NewClass',
  components: {
    VTextField,
    VSelect
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
                    label: 'Descrição',
                    name: 'description',
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
                "onClick": "SayHello"
            },
        ],
        files: []
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
      }
  },
  mounted(){
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
     
        this.$refs.fileform.addEventListener(evt, function(e){
            e.preventDefault();
            e.stopPropagation();
        }.bind(this), false);
    }.bind(this));

    this.$refs.fileform.addEventListener('drop', function(e){
        for( let i = 0; i < e.dataTransfer.files.length; i++ ){
            this.files.push( e.dataTransfer.files[i] );
        }
    }.bind(this));
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

.upload-box {
    width: 100%;
    height: 200px;
    background-color: rgb(223, 223, 223);
}

</style>