<template>
  <div class="elevation-20 generic-component-container">
    <v-flex>
      <h2 class="table-title">{{this.title}}</h2>
    </v-flex>
    <v-divider class="generic-component-divider"/>
    <v-form ref="form">
      <v-container grid-list-xl>
        <v-layout v-if="showList" >
          <v-flex v-for="(layout,index) in body" :key=index>
            <div v-for="field in LayoutFields(layout)" :key="field.label">
              <component :is="field.fieldType" :label="field.label" :required="field.required" :items="field.items"/>
            </div>
            </component>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider class="generic-component-divider"/>
    <v-flex xs12>
      <v-layout class="generic-component-actions">
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
  .generic-component-actions{
    display: flex;
    justify-content: center;
  }

  .generic-component-container{
    padding: 30px;
  }

  .generic-component-divider{
    margin-top: 20px;
    margin-bottom: 20px
  }

</style>