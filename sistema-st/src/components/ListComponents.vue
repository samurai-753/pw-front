<template>
  <v-container class='teste' fluid grid-list-md>
    <v-layout  v-if="showList" pa-3>
      <v-flex xs12>
        <h2 class='table-title'> {{title}} </h2>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Pesquisar"
          ></v-text-field>
        </v-flex>
          <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              hide-actions
              class="list-components"
            >
            <template v-slot:header>
              <div class="button-drawer">{{item.title}}</div>
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {EventBus} from './EventBus.js'


export default {
  name: 'ListComponent',
  components: {
  },
  data () {
    return {
      title: null,
      showList: false,
      items: [],
      right: null
    }
  },
  mounted() {
    console.log(this.showList)
    EventBus.$on('SHOW-VIEW-LIST', (payload, title, child) => {
      console.log(title, child)
      this.title = title
      this.items =  [{ title: title + '1'},
        { title: title+'2'}],
      this.showList = payload
    })
  }
}
</script>

<style>
  .teste {
    width: 800px;
    height: 400px;
    background-color: aquamarine;
  }
  .table-title {
    text-align: center;
  }
</style>