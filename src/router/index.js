import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/html',
      name: 'HTML',
      component: List,
      children: [
        {path: '/html/1', name: 'html1', component: List}
      ]
    },
    {
      path: '/css',
      name: 'Css',
      component: List,
      children: [
      ]
    },
    {
      path: '/js',
      name: 'JS',
      component: List,
      children: [
      ]
    }
  ]
})
