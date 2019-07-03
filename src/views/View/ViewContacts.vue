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
            <v-data-table :headers="headers" :items="professores" :search="searchTerm" class="elevation-1" :expand="expanded" item-key="nome">
                <template v-slot:items="props">
                    <tr @click="props.expanded = !props.expanded">
                        <td>{{ props.item.nome }}</td>
                        <td>{{ props.item.email }}</td>
                    </tr>
                </template>
                <template v-slot:expand="props">
                    <v-card flat>
                        <v-card-text> Teleone: {{props.item.telefone}}</v-card-text>
                        <v-card-text> Sala: {{props.item.sala}}</v-card-text>
                    </v-card>
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
  name: 'ViewPublications',
  components: {
    VTextField,
    VSelect
  },
  props: {
    name: String
  },
  data () {
    return {
        expanded: false,
        title: 'Ver Contatos',
        headers: [
            { text: 'Nome', value: 'nome' },
            { text: 'Email', value: 'email' },
        ],
        professores: [
            { 'nome' : 'Rafael Durelli', 'email': 'Rafael@ufla.br' ,'sala' : 'DCC - 001', 'telefone' : '3599121 - 1234'},
            { 'nome' : 'Mayron Moreira', 'email': 'Mayron@ufla.br' ,'sala' : 'DCC - 002', 'telefone' : '3599121 - 5678'},
            { 'nome' : 'Neumar Malheiros', 'email': 'Neumar@ufla.br' ,'sala' : 'DCC - 003', 'telefone' : '3599121 - 9012'},
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