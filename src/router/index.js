import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test.md'

Vue.use(Router)

export default new Router({
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
        {path: '/html/2', name: 'test', component: Test}
      ]
    },
    {
      path: '/css',
      name: 'Css',
      component: Home,
      children: [
      ]
    },
    {
      path: '/js',
      name: 'JS',
      component: Home,
      children: [
      ]
    }
  ]
})
