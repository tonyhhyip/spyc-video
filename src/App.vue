<template>
  <div id="app">
    <md-toolbar>
      <h2 class="md-title" style="flex: 1">
        <router-link :to="{ name: 'home'}">SPYC Video</router-link>
      </h2>
    </md-toolbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  margin-top: 2rem;
}

@media only screen and (min-width : 601px) {
  .container {
    width: 85%;
  }
}
@media only screen and (min-width : 993px) {
  .container {
    width: 70%;
  }
}

.md-toolbar h2.md-title {
  flex: 1;
  a {
    color: white;
    &:hover {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
