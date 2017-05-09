import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

const store = new Store({
  state: {
    video: {},
  },
  mutations: {
    importVideo(state, video) {
      state.video = video;
    },
  },
  getters: {
    currentVideo(state) {
      const link = state.route.query.video;
      if (!link) {
        return null;
      }
      const video = state.video[link];
      const file = `${process.env.NODE_ENV === 'production' ? '/video' : ''}/static/video/${video.file}`;

      const options = {
        sources: [
          { type: 'video/mp4', src: file },
        ],
        start: 0,
      };

      return {
        file,
        options,
        name: video.name,
        author: video.author,
      };
    },
  },
});

export default store;
