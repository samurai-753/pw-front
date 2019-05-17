<template>
  <div class='main-container'>
    <v-flex>
      <h2 class="table-title">Cadastrar Aluno</h2>
    </v-flex>
    <v-form ref="form">
      <v-container grid-list-xl>
        <v-layout v-if="showList" >
          <v-flex xs12>
                <v-text-field label="Nome do Aluno" required></v-text-field>
                <v-text-field label="Curso" required></v-text-field>
                <v-select :items="projects" label="Projeto"></v-select>
          </v-flex>
          <v-flex xs12>
                <v-text-field label="Email institucional" required></v-text-field>
                <v-select :items="categories" label="Categoria" required></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-flex xs12>
    <v-layout>
      <v-btn  color="error">Cancelar</v-btn>
      <v-btn color="success">Cadastrar</v-btn>
    </v-layout>
    </v-flex>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'


export default {
  name: 'RegisterStudent',
  components: {
  },
  data () {
    return {
      title: 'Cadastrar Aluno',
      showList: true,
      right: null,
      categories: ['Iniciação científica', 'Mestrado', 'Doutorado', 'Pós-doutorado'],
      projects: []
    }
  },
  mounted() {
  }
}
</script>

<style>
  .table-title {
    text-align: center;
  }

</style>