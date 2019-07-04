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
                        <td>
                            <v-icon  style="margin-right: 5px" @click="editItem(props.item)"> edit </v-icon>
                            <v-icon  @click="deleteItem(props.item)" > delete </v-icon>
                        </td>
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

import {API_URL} from '../../config/config'

import { mapState } from 'vuex'


export default {
    name: 'ViewPublications',
    components: {
        VTextField,
        VSelect
    },
    props: {
        name: String
    },
    computed: {
        ...mapState({
            userToken: state => state.userToken
        })
    },
    data () {
        return {
            expanded: false,
            title: 'Ver Contatos',
            apiEndpoint: `${API_URL}/professor`,
            dialog: false,
            headers: [
                { text: 'Nome', value: 'nome' },
                { text: 'Email', value: 'email' },
                { text: 'Actions', value: 'actions', sortable: false }
            ],
            professores: [],
            searchTerm: '',
            editedItem: {}
        }
    },
    created(){
        axios.get(this.apiEndpoint).then((response) => {
            const {data} = response.data
            data.forEach(professor => {
                const {detalhes, idx, sala} = professor
                const {nome, email, telefone} = detalhes
                let newProfessor = {
                    idx, nome, email, telefone, sala
                }
                this.professores.push(newProfessor)
            });
        }).catch((err) => {
            this.$notify({
                group: 'main',
                type: 'error',
                title: 'Ocorreu um erro!',
                text: err
            });
        })
    },
    methods : {
        deleteItem(professor) {
            const {idx} = professor
            let endpoint = `${this.apiEndpoint}/${idx}`

            let header = {'Authorization' : this.userToken}

            axios.delete(endpoint, {'headers': header}).then((response) => {
               this.$notify({
                    group: 'main',
                    type: 'success',
                    title: 'Professor deletado com sucesso!',
                }); 
            }).catch((err) => {
                this.$notify({
                    group: 'main',
                    type: 'error',
                    title: 'Ocorreu um erro!',
                    text: err
                }); 
            })
        },
        editItem(professor) {
            const {idx} = professor
            this.$router.push(`/newuser/${idx}`)
        },
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