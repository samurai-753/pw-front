<template>
  <div class='main-container'>
    <v-flex>
      <h2 class="table-title">Cadastrar Aula</h2>
    </v-flex>
    <v-form ref='registerProject'>
      <v-container grid-list-xl>
        <v-layout>
          <v-flex xs12>
            <v-text-field label='Nome'></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label='Categoria'></v-text-field>
          </v-flex>
        </v-layout>
        <input class="btn-browser" ref="inputUpload" label="esolhaarquivos" type="file" @change="onUploadFile" >
      </v-container>
      <v-flex>
        <v-btn color="error">Cancelar</v-btn>
        <v-btn color="success">Cadastrar</v-btn>
      </v-flex>
    </v-form>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'


export default {
  name: 'RegisterClass',
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
  methods: {
    onUploadFile(event) {
      console.log(event)
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

  .btn-browser{

  }

</style>