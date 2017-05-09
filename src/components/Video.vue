<template>
  <md-card id="video">
    <md-card-content class="container">
      <h2 class="md-title">{{ currentVideo.name }}</h2>
      <h3 class="md-subhead">{{ currentVideo.author }}</h3>
      <video-player :title="currentVideo.name" :options="currentVideo.options"></video-player>
    </md-card-content>

    <md-bottom-bar>
      <router-link :to="{name: 'home'}">
        <md-bottom-bar-item md-icon="home">
          Home
        </md-bottom-bar-item>
      </router-link>
      <a :download="currentVideo.file" :href="currentVideo.file">
        <md-bottom-bar-item md-icon="file_download" md-active>
          Download
        </md-bottom-bar-item>
      </a>
    </md-bottom-bar>
  </md-card>
</template>

<style scoped lang="scss">
.container {
  flex: 1 0 auto;
}

.md-bottom-bar a:hover {
  text-decoration: none;
}

</style>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['currentVideo']),
    },
  };
</script>
