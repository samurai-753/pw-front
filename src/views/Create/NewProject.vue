<template>
    <div class="container">
        <div class="elevation-20 box">
            <v-flex>
                <h2 class="title"> {{this.title}} </h2>
            </v-flex>
            <v-divider class="divider"/>
            <v-form>
                <v-container grid-list-xs>
                    <v-layout>
                        <v-flex>
                            <div v-for="field in fields" :key="field.label">
                                <component :is="field.fieldType" v-model="field.value" :label="field.label" :required="field.required" :items="field.items" :disabled="!field.editable"/>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
            <v-divider class="divider"/>
            <v-flex xs12>
                <v-layout class="actions">
                    <v-btn v-for="action in actions" :color="action.color" :key="action.onClick" v-on:click="HandleFunctionCall(action.onClick)" >{{action.label}}</v-btn>
                </v-layout>
            </v-flex>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { VTextField, VSelect } from 'vuetify/lib'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'GenericComponent',
  components: {
    VTextField,
    VSelect
  },
  computed:{
    ...mapState({
        userToken: state => state.userToken,
        userName: state => state.userName
    })
  },
  props: {
    name: String
  },
  data () {
    return {
        title: 'Novo Projeto',
        fields: [
                {
                    label: 'Nome',
                    name: 'nome',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true,
                    editable: true
                },
                {
                    label: 'Descrição',
                    name: 'descricao',
                    fieldType: 'v-text-field',
                    value: '',
                    required: true,
                    editable: true
                },
                {
                    label: 'Orientador',
                    name: 'orientador',
                    fieldType: 'v-text-field',
                    value: this.userName,
                    required: true,
                    editable: false
                },
                {
                    label: 'Coorientador',
                    name: 'coorientador',
                    fieldType: 'v-select',
                    value: '',
                    required: true,
                    items: ["Breno", "Eduardo", "João"],
                    editable: true
                }
        ],
        actions: [
            {
                "label" : "Cadastrar",
                "color" : "success",
                "onClick": "sendRequisition"
            },
            {
                "label" : "Cancelar",
                "color" : "error",
                "onClick": "cancel"
            },
        ]
    }
  },
  methods: {
      HandleFunctionCall(functionName){
          this[functionName]()
      },
      sendRequisition(){
          let body = {}
          this.fields.forEach((field) => {
              body[field.name] = field.value
          })
          console.log(body)
      },
      cancel(){
          this.$router.push('/')
      }
  },
  created(){
      this.fields[2].value = this.userName;
  }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 5%;
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