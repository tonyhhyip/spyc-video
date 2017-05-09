<template>
  <md-card>
    <md-list class="md-double-line">
        <md-list-item v-for="(video, key) in videos" :key="key">
          <router-link :to="{ name: 'video', query: {video: key}}">
            <md-icon class="md-accent">video_library</md-icon>
            <div class="md-list-text-container">
              <span>{{ video.name }}</span>
              <span>{{ video.author }}</span>
            </div>
          </router-link>
        </md-list-item>
    </md-list>
  </md-card>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      videos: state => state.video,
    }),
  };
</script>
