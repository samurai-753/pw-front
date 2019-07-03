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
                    <td>{{ props.item.curso }}</td>
                </template>
            </v-data-table>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { VTextField, VSelect } from 'vuetify/lib'
import { scrypt } from 'crypto';

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
        headers: [
            { text: 'Nome', value: 'nome' },
            { text: 'E-mail', value: 'email' },
            { text: 'Curso', value: 'curso' }
        ],
        students: [
            {'nome' : 'Dudei', 'email' : 'dudei@gmail.com', 'curso' : 'Ciência da Computação'},
            {'nome' : 'Jobel', 'email' : 'jobel@gmail.com', 'curso' : 'Sistemas de Informação'},
            {'nome' : 'Ribola', 'email' : 'ribo@gmail.com', 'curso' : 'Eng. Controle e Automação'},
        ],
        searchTerm: ''
    }
  },
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