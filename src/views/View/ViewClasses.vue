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
            <v-data-table :headers="headers" :items="classes" :search="searchTerm" class="elevation-1" :expand="expanded" item-key="disciplina">
                <template v-slot:items="props">
                    <tr @click="props.expanded = !props.expanded">
                        <td>{{ props.item.disciplina }}</td>
                        <td>{{ props.item.professor }}</td>
                    </tr>
                </template>
                <template v-slot:expand="props">
                    <v-card flat>
                        <v-card-text>{{props.item.arquivos}}</v-card-text>
                    </v-card>
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
  name: 'Viewclasses',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Ver Disciplinas',
        apiEndpoint: `${API_URL}/disciplina`,
        expanded: false,
        headers: [
            { text: 'Disciplina', value: 'disciplina' },
            { text: 'Professor responsável', value: 'professor' }
        ],
        classes: [
            // {'disciplina' : 'Programação Web', 'professor' : 'Rafael Durelli', 'arquivos': 'durelli.pdf'},
            // {'disciplina' : 'Programação Matemática', 'professor' : 'Mayron Moreira', 'arquivos': 'mayron.pdf'},
            // {'disciplina' : 'Sistemas distribuídos', 'professor' : 'Neumar Malheiros', 'arquivos': 'neumar.pdf'},
        ],
        searchTerm: ''
    }
  },
  created(){
      axios.get(this.apiEndpoint).then((response) => {
          console.log(response)
          alert(response)
      }).catch((err) => {
          alert(err)
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