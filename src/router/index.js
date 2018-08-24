import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsRoom from '@/components/NewsRoom'
import Where from '@/components/Where'
import AboutOreo from '@/components/AboutOreo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NewsRoom',
      name: 'NewsRoom',
      component: NewsRoom
    },
    {
      path: '/Where',
      name: 'Where',
      component: Where
    },
    {
      path: '/AboutMe',
      name: 'Me',
      component: AboutOreo
    }
  ],
  mode: 'history'
})
