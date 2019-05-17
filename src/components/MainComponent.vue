<template>
	<v-container>
	  <v-layout>
	  	<v-flex v-if="showList">
	    	<ListComponents/>
	    </v-flex>
	    <v-flex v-if="showRegisterStudent">
	    	<RegisterStudent/>
	    </v-flex>
			<v-flex v-if="showRegisterProject">
	    	<RegisterProject/>
	    </v-flex>
			<v-flex v-if="showRegisterClass">
	    	<RegisterClass/>
	    </v-flex>
	  </v-layout>
	</v-container>

</template>

<script>
import {EventBus} from './EventBus.js'
import ListComponents from './ListComponents'
import RegisterStudent from './RegisterStudent'
import RegisterProject from './RegisterProject'
import RegisterClass from './RegisterClass'


export default {
  name: 'MainComponent',
  components: {
  	ListComponents,
		RegisterStudent,
		RegisterProject,
		RegisterClass,
  },
  data () {
    return {
    	showList: true,
			showRegisterStudent: false,
			showRegisterProject: false,
			showRegisterClass: false,

    }
  },
  mounted() {
    EventBus.$on('SHOW', (payload) => {
    	console.log('recebeu')
    	this.showList = payload
    })
    EventBus.$on('SHOW-REGISTER-Alunos', (payload) => {
    	this.showRegisterStudent = payload
      // EventBus.$emit("REGISTER-STUDENT", true)
		})
		EventBus.$on('SHOW-REGISTER-Projetos', (payload) => {
    	this.showRegisterProject = payload
      // EventBus.$emit("REGISTER-STUDENT", true)
		})
		EventBus.$on('SHOW-REGISTER-Aulas', (payload) => {
    	this.showRegisterClass = payload
      // EventBus.$emit("REGISTER-STUDENT", true)
    })
  }
}
</script>

<style>

</style>