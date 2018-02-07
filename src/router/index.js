import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Transition from 'docs/css/transitions/transition'
import Iterator from 'docs/js/Iterator/Iterator'
import Set from 'docs/js/Set/Set'
import Map from 'docs/js/Map/Map'
import Generator from 'docs/js/Generator/Generator'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      hidden: true
    },
    {
      path: '/html',
      name: 'HTML',
      component: Home,
      children: [
      ]
    },
    {
      path: '/css',
      name: 'CSS',
      component: Home,
      children: [
        {path: '/css/transition', name: 'transition', component: Transition}
      ]
    },
    {
      path: '/js',
      name: 'JS',
      component: Home,
      children: [
        {path: '/js/iterator', name: 'Iterator', component: Iterator},
        {path: '/js/set', name: 'Set', component: Set},
        {path: '/js/map', name: 'Map', component: Map},
        {path: '/js/generator', name: 'Generator', component: Generator}
      ]
    }
  ]
})
