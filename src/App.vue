<template>
  <v-app>
    <v-app-bar app clipped-left :collapse='!drawer' color='rgb(51, 204, 204)' dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img></v-img>
      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>person</v-icon>
      </v-btn>
    </v-app-bar>
            <v-navigation-drawer color="rgb(41, 163, 163)" v-model="drawer" app clipped dark>
            <v-list dense>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>list</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Minhas compras</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
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
