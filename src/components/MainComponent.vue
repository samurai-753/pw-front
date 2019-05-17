<template>
  	<div class="main-component-container">
    <div class="main-component-item">
      <generic-component v-if="currentComponent != null" :name="currentComponent" :key="componentKey"/>
    </div>
  </div>
</template>

<script>
import {EventBus} from './EventBus.js'
import RegisterStudent from './RegisterStudent'
import RegisterProject from './RegisterProject'
import RegisterClass from './RegisterClass'
import GenericComponent from './GenericComponent'
import { setTimeout } from 'timers';


export default {
  name: 'MainComponent',
  components: {
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
      currentComponent: null,
      componentKey: 0
    }
  },
  mounted() {
    EventBus.$on('SHOW', (payload) => {
    	this.showList = payload
    })
    EventBus.$on('SHOW-REGISTER', (payload) => {
      setTimeout(() => {
        this.currentComponent = payload
        console.log(this.currentComponent)
      },100)
      this.currentComponent = null
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