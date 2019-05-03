<template>
	<v-container>
	  <v-layout>
	  	<v-flex v-if="showList">
	    	<ListComponents/>
	    </v-flex>
	    <v-flex v-if="showRegister">
	    	<RegisterStudent/>
	    </v-flex>
	  </v-layout>
	</v-container>

</template>

<script>
import {EventBus} from './EventBus.js'
import ListComponents from './ListComponents'
import RegisterStudent from './RegisterStudent'

export default {
  name: 'MainComponent',
  components: {
  	ListComponents,
  	RegisterStudent,
  },
  data () {
    return {
    	showList: true,
    	showRegister: false,
    }
  },
  mounted() {
    EventBus.$on('SHOW', (payload) => {
    	console.log('recebeu')
    	this.showList = payload
    })
    EventBus.$on('SHOW-REGISTER-STUDENT', (payload) => {
    	this.showRegister = payload
      // EventBus.$emit("REGISTER-STUDENT", true)
    })
  }
}
</script>

<style>

</style>