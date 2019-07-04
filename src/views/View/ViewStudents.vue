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
            <v-data-table :headers="headers" :items="students" :search="searchTerm" class="elevation-1" >
                <template v-slot:items="props">
                    <td>{{ props.item.nome }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>{{ props.item.telefone }}</td>
                    <td>{{ props.item.resumo }}</td>
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
  name: 'ViewStudents',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Ver Alunos',
        apiEndpoint: `${API_URL}/aluno`,
        headers: [
            { text: 'Nome', value: 'nome' },
            { text: 'E-mail', value: 'email' },
            { text: 'Telefone', value: 'telefone' },
            { text: 'Resumo', value: 'resumo' }
        ],
        students: [],
        searchTerm: ''
    }
  },
  created(){
      axios.get(this.apiEndpoint).then((response) => {
          response.data.data.forEach(aluno => {
              let newStudent = {
                  nome: aluno.detalhes.nome,
                  telefone: aluno.detalhes.telefone,
                  email: aluno.detalhes.email,
                  resumo: aluno.resumo,
                  id: aluno.idx
              }
              this.students.push(newStudent)
          });
      }).catch((err) => {
        this.$notify({
            group: 'main',
            type: 'error',
            title: 'Aconteceu um erro ao pegar os dados',
            text: err
        });
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