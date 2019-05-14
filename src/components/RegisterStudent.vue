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
                <v-select :items="projetos" label="Projeto"></v-select>
          </v-flex>
          <v-flex xs12>
                <v-text-field label="Email institucional" required></v-text-field>
                <v-select :items="categorias" label="Categoria" required></v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-flex xs12>
    <v-layout>
      <v-btn color="success">Cadastrar</v-btn>
      <v-btn color="error">Cancelar</v-btn>
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
      categorias: ['Iniciação científica', 'Mestrado', 'Doutorado', 'Pós-doutorado'],
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