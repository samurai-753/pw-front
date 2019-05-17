<template>
  <div>
    <v-flex>
      <h2 class="table-title">{{this.title}}</h2>
    </v-flex>
    <v-form ref="form">
      <v-container grid-list-xl>
        <v-layout v-if="showList" >
          <v-flex v-for="(layout,index) in body" :key=index>
            <!-- {{layout["layout-content"]}} -->
            <!-- {{layout}} -->
            <div v-for="field in LayoutFields(layout)" :key="field.label">
              <component :is="field.fieldType" :label="field.label" :required="field.required" :items="field.items"/>
            </div>
            <!-- <component  :key=field.label :items="field.items" :is="field.field-type" :label="field['label']" :required="field['required']" > -->
            </component>
                <!-- <v-text-field label="Nome do Aluno" required></v-text-field>
                <v-text-field label="Curso" required></v-text-field>
                <v-select :items="projects" label="Projeto"></v-select> -->
          </v-flex>
          <!-- <v-flex xs12>
                <v-text-field label="Email institucional" required></v-text-field>
                <v-select :items="categories" label="Categoria" required></v-select>
          </v-flex> -->
        </v-layout>
      </v-container>
    </v-form>
    <v-flex xs12>
      <v-layout>
        <v-btn v-for="action in actions" :color="action.color" v-on:click="HandleFunctionCall(action.onClick)" >{{action.label}}</v-btn>
      </v-layout>
    </v-flex>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'
import { VTextField, VSelect } from 'vuetify/lib'


export default {
  name: 'GenericComponent',
  components: {
    VTextField,
    VSelect
  },
  data () {
    return {
      title: '',
      showList: true,
      title: "",
      actions: [],
      body: []
    }
  },
  methods: {
    LayoutFields(layout) {
      return layout["layoutContent"]
    },
    HandleFunctionCall(functionName) {
      this[functionName]()
    },
    SayHello(){
      console.log("HelloWorld")
    }
  },
  created() {
    let pagefile = require('./teste.json')
    this.title = pagefile["title"]
    this.actions = pagefile["actions"]
    this.body = pagefile["body"]

    // let actions = []

    // for(var key in actionsFromFile) {
    //   console.log("for")
    //   let action = {
    //     label: actionsFromFile[key].label,
    //     color: actionsFromFile[key].color,
    //   }
    //   actions.push(action)
    // }

    // this.actions = actions

  },
  mounted() {
  },
}
</script>

<style>
  .table-title {
    text-align: center;
  }

</style>