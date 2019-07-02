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
  name: 'ViewProjects',
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
        headers: [
            { text: 'Nome', value: 'nome' },
            { text: 'Orientador', value: 'orientador' }
        ],
        projects: [
            {'nome' : 'Code Smells', 'orientador' : 'Rafael Durelli'},
            {'nome' : 'Otimização de maluqice', 'orientador' : 'Mayron Moreira'},
            {'nome' : 'IoT', 'orientador' : 'Neumar Malheiros'},
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