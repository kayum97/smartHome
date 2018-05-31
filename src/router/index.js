import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import VueAxios from 'vue-axios'
import panels from '@/components/panels'
import login from '@/components/login'
import buy from '@/components/buy'
import publics from '@/components/public'
import settings from '@/components/settings'

import axios from 'axios';

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
      mode: 'history',
      routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      requiresAuth: false
    },
    {
      path: '/',
      name: 'panels',
      component: panels,
      requiresAuth: true
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy,
      requiresAuth: true
    },
    {
      path: '/publics',
      name: 'publics',
      component: publics,
      requiresAuth: true
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
      requiresAuth: true
    }
  ]
})
