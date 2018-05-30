import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import VueAxios from 'vue-axios'
import panels from '@/components/panels'
import login from '@/components/login'
import buy from '@/components/buy'


import axios from 'axios';

Vue.use(VueAxios, axios)
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/panels',
      name: 'panels',
      component: panels
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    }
  ]
})
