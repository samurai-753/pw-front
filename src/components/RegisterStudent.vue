<template>
  <div class='main-container'>
    <v-container grid-list-xl>
      <v-layout v-if="showList">
        <v-flex s12>
          <h2 class="table-title">Cadastrar Aluno</h2>
          <v-flex xs12 sm6 md4>
            <v-form ref="form">
              <v-text-field label="Nome do Aluno" required></v-text-field>
              <v-text-field label="Email institucional" required></v-text-field>
              <v-text-field label="Curso" required></v-text-field>
              <v-select :items="categorias" label="Categoria" required></v-select>
              <v-select :items="projetos" label="Projeto"></v-select>
            </v-form>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
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
      categorias: ['Iniciação científica', 'Mestrado', 'Doutorade', 'Pós-doutorado'],
      projetos: []
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