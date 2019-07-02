import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import NewUser from './views/Create/NewUser.vue'
import NewProject from './views/Create/NewProject.vue'
import NewStudent from './views/Create/NewStudent.vue'
import NewGroup from './views/Create/NewGroup.vue'
import NewClass from './views/Create/NewClass.vue'
import NewPublication from './views/Create/NewPublication.vue'

import ViewProjects from './views/View/ViewProjects.vue'
import ViewStudents from './views/View/ViewStudents.vue'
import ViewClasses from './views/View/ViewClasses.vue'
import ViewPublications from './views/View/ViewPublications.vue'
import ViewContacts from './views/View/ViewContacts.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: NewUser
    },
    {
      path: '/NewProject',
      name: 'NewProject',
      component: NewProject
    },
    {
      path: '/NewStudent',
      name: 'NewStudent',
      component: NewStudent
    },
    {
      path: '/NewGroup',
      name: 'NewGroup',
      component: NewGroup
    },
    {
      path: '/NewClass',
      name: 'NewClass',
      component: NewClass
    },
    {
      path: '/NewPublication',
      name: 'NewPublication',
      component: NewPublication
    },
    {
      path: '/ViewProjects',
      name: 'ViewProjects',
      component: ViewProjects
    },
    {
      path: '/ViewStudents',
      name: 'ViewStudents',
      component: ViewStudents
    },
    {
      path: '/ViewClasses',
      name: 'ViewClasses',
      component: ViewClasses
    },
    {
      path: '/ViewPublications',
      name: 'ViewPublications',
      component: ViewPublications
    },
    {
      path: '/ViewContacts',
      name: 'ViewContacts',
      component: ViewContacts
    }
  ]
})
