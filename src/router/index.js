import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/layout/pages/home';
import Highlights from '@/layout/pages/highlights';
import About from '@/layout/pages/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path:'/highlights',
      name:'highlights',
      component: Highlights,
    },
    {
      path:'/about',
      name:'about',
      component: About,
    }
  ],
});
