import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import SireDirectory from './views/SireDirectory.vue'
import AdvancedSearch from './views/AdvancedSearch.vue'

Vue.use(Router)

// https://vuejs-templates.github.io/webpack/prerender.html

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/siredirectory',
      name: 'siredirectory',
      component: SireDirectory
    },
    {
      path: '/search',
      name: 'advancedsearch',
      component: AdvancedSearch
    }
  ]
})
