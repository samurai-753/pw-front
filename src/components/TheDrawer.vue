<template>
    <v-layout>
      <v-navigation-drawer
        v-model="openMenu"
        absolute
        temporary
        clipped
        class="text-xs-center blue darken-3"

      >
        <v-expansion-panel class="full-height">
            <v-expansion-panel-content
              v-for="(item,i) in items"
              :key="i"
              hide-actions
              class="blue darken-3 "
            >
            <template v-slot:header>
              <v-btn flat big class="white--text ">{{item.title}}</v-btn>
            </template>
            <v-card class="blue darken-2 text-xs-center">
              <div v-for="(child, ic) in item.child" :key="ic">
                <router-link :to="child.route"> <v-btn flat big class="white--text ">{{child.title}} </v-btn> </router-link>
              </div>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-navigation-drawer>
    </v-layout>
</template>

<script>

import { mapState } from 'vuex'

export default {

    
  name: 'TheDrawer',
  components: {
  },
  data () {
    return {
      items: [
        { 
            title: 'Projetos', child: [
                {title : 'Novo', route: '/NewProject'},
                {title : 'Visualizar', route: '/ViewProjects'}
            ]
        },
        { 
            title: 'Alunos', child: [
                {title : 'Novo', route: '/NewStudent'},
                {title : 'Visualizar', route: '/ViewStudents'}
            ]
        },
        { 
            title: 'Grupos', child: [
                {title : 'Novo', route: '/NewGroup'},
                {title : 'Visualizar', route: '/ViewGroups'}
            ]
        },
        { 
            title: 'Disciplina', child: [
                {title : 'Novo', route: '/NewClass'},
                {title : 'Visualizar', route: '/ViewClasses'}
            ]
        },
        { 
            title: 'Publicações', child: [
                {title : 'Novo', route: '/NewPublication'},
                {title : 'Visualizar', route: '/ViewPublications'}
            ]
        },
        { 
            title: 'Contato', child: [
                {title : 'Novo', route: '/NewPublication'},
                {title : 'Visualizar', route: '/ViewPublications'}
            ]
        },
      ],
      right: null
    }
  },
  computed: {
    ...mapState({
        openMenu : state => state.showDrawer
    })
  },
  created() {
      console.log("drawer created")
  },
}
</script>

<style>
  .full-height {
    height: 100%;
  }
</style>