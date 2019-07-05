<template>
    <div class="container">
        <div class="elevation-20 box">
            <v-flex>
                <h2 class="title"> {{this.title}} </h2>
            </v-flex>
            <v-divider class="divider"/>
                <v-text-field v-model="searchTerm"  placeholder="Pesquisar">
                    <v-tooltip slot="append" bottom>
                        <v-icon slot="activator" color="primary" dark>search</v-icon>
                        <span>Pesquisar</span>
                    </v-tooltip>
                </v-text-field>
            <v-divider class="divider"/>
            <v-data-table :headers="headers" :items="projects" :search="searchTerm" class="elevation-1" >
                <template v-slot:items="props">
                    <td>{{ props.item.nome }}</td>
                    <td>{{ props.item.orientador }}</td>
                    <td>{{ props.item.coorientador }}</td>
                </template>
            </v-data-table>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { VTextField, VSelect } from 'vuetify/lib'

import {API_URL} from '../../config/config'

export default {
  name: 'ViewGroups',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Ver Projetos',
        apiEndpoint: `${API_URL}/projeto`,
        headers: [
            { text: 'Nome', value: 'nome' },
            { text: 'Orientador', value: 'orientador' },
            { text: 'Coorientador', value: 'coorientador' }
        ],
        projects: [],
        searchTerm: ''
    }
  },
  created(){
      console.log("created")
      axios.get(this.apiEndpoint).then((results) => {
          const {data} = results.data
          data.forEach(projeto => {
              let newProject = {
                  'nome' : projeto.nome,
                  'orientador': projeto.orientador.detalhes.nome,
                  'coorientador': projeto.coorientador.detalhes.nome
              }
              this.projects.push(newProject)
          });
      }).then((err) => {
          console.log(err)
      })
  }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 2%;
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