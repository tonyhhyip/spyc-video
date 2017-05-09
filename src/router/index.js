import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Video from '@/components/Video';
import fetcher from './fetch';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/video',
      name: 'video',
      component: Video,
    },
  ],
});

router.beforeEach(fetcher);

router.beforeResolve((to, from, next) => {
  if (window.player) {
    window.player.remove();
    window.player = null;
    document.getElementsByTagName('video')[0].remove();
  }
  next();
});

export default router;
