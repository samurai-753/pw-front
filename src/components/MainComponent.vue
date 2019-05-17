<template>
  	<div class="main-component-container">
    <div class="main-component-item">
      <!-- <component :is="currentComponent"></component> -->
      <generic-component/>

    </div>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'
// import ListComponents from './ListComponents'
import RegisterStudent from './RegisterStudent'
import RegisterProject from './RegisterProject'
import RegisterClass from './RegisterClass'
import GenericComponent from './GenericComponent'


export default {
  name: 'MainComponent',
  components: {
  	// ListComponents,
		RegisterStudent,
		RegisterProject,
    RegisterClass,
    GenericComponent
  },
  data () {
    return {
    	showList: true,
			showRegisterStudent: false,
			showRegisterProject: false,
      showRegisterClass: false,
      currentComponent: null

    }
  },
  mounted() {
    EventBus.$on('SHOW', (payload) => {
    	this.showList = payload
    })
    EventBus.$on('SHOW-REGISTER-Alunos', (payload) => {
    	this.currentComponent = "register-student"
      // EventBus.$emit("REGISTER-STUDENT", true)
		})
		EventBus.$on('SHOW-REGISTER-Projetos', (payload) => {
    	this.currentComponent = "register-project"
      // EventBus.$emit("REGISTER-STUDENT", true)
		})
		EventBus.$on('SHOW-REGISTER-Aulas', (payload) => {
    	this.currentComponent = "register-class"
      // EventBus.$emit("REGISTER-STUDENT", true)
    })
  }
}
</script>

<style>

.main-component-container {
  width: 800px;
  height: 400px;
}

.main-component-item {
  background-color: white;
}

</style>