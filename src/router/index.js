import Vue from 'vue'
import Router from 'vue-router'
import finequality from '../components/finequality.vue'
import bookcity from '../components/bookcity.vue'
import bookshelf from '../components/bookshelf'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/finequality',
      name: 'finequality',
      component: finequality
    },
    {
      path: '/bookcity',
      name: 'bookcity',
      component: bookcity
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: bookshelf
    }
  ]
})
