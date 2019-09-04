<template>
  <v-app>
    <v-app-bar app clipped-left :collapse='!drawer' color='rgb(51, 204, 204)' dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img></v-img>
      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import Header from './components/Header'
export default {
  name: 'App',
  components: {
   // Header
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
<style>
.background{
    background-color:#CEF7F5;
}
</style>
