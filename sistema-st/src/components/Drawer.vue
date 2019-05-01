<template>
    <v-layout>
      <v-navigation-drawer
        v-model="openMenu"
        absolute
        temporary
        clipped
      >
        <v-expansion-panel>
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              hide-actions
              class="drawer-container"
            >
            <template v-slot:header>
              <div class="button-drawer">{{item.title}}</div>
            </template>
            <v-card>
              <div v-for="(child, ic) in item.child" :key="ic"  class="button-drawer-content">
                <v-btn flat>{{child}}</v-btn>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-navigation-drawer>
    </v-layout>
</template>

<script>
import {EventBus} from './EventBus.js'


export default {
  name: 'Drawer',
  components: {
  },
  data () {
    return {
      openMenu: false,
      items: [
        { title: 'Projetos', child: ['Novo', 'Visualizar']},
        { title: 'Alunos', child: ['Novo', 'Visualizar']},
        { title: 'Grupos', child: ['Novo', 'Visualizar']},
        { title: 'Aulas', child: ['Novo', 'Visualizar']},
        { title: 'Publicações', child: ['Novo', 'Visualizar']},
        { title: 'Contato', child: ['Novo', 'Visualizar']},
      ],
      right: null
    }
  },
  mounted() {
    EventBus.$on('OPEN-MENU', (payload) => {
      console.log("ae disgraca")
      this.openMenu = payload
    })
  }
}
</script>

<style>
  .button-drawer {
    align-content: center;
    justify-content: center;
    font-weight: 200px;
  }

  .drawer-container {
    background-color: #2EA5CF !important;
    align-content: center;
  }

  .button-drawer-content {
    background-color: #2EA5CF !important;
    align-content: center;
  }

</style>
