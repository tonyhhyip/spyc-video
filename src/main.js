import Vue from 'vue';
import VueMaterial from 'vue-material';
import { sync } from 'vuex-router-sync';
import VueVideoPlayer from 'vue-video-player';
import App from './App';
import router from './router';
import store from './store';

sync(store, router);

Vue.use(VueVideoPlayer);
Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'teal',
  accent: 'indigo',
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
