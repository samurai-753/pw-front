<template>
  <div class='main-container'>
    <v-flex>
      <h2 class="table-title">Cadastrar Projeto</h2>
    </v-flex>
    <v-container grid-list-xl>
      <v-flex>
        <v-form ref='registerProject'>
          <v-text-field label='Nome do Projeto'></v-text-field>
          <v-textarea box label="Descrição do Projeto"></v-textarea>
        </v-form>
      </v-flex>
      <v-flex>
        <v-btn color="error">Cancelar</v-btn>
        <v-btn color="info">Vincular Alunos</v-btn>
        <v-btn color="success">Cadastrar</v-btn>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'


export default {
  name: 'RegisterProject',
  components: {
  },
  data () {
    return {
      title: 'Cadastrar Aluno',
      showList: true,
      right: null,
      categorias: ['Iniciação científica', 'Mestrado', 'Doutorado', 'Pós-doutorado'],
      students: []
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