<template>
<div id="app">
  <v-app>
    <v-navigation-drawer color="#345A61" v-model="drawer" app clipped dark>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-anchor</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Configurações</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left :collapse='!drawer' color='rgb(72, 97, 102)' dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img ></v-img>
      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <List />
    </v-content>

     
  </v-app>
</div>
</template>

<script>
import List from './pages/List';

export default {
  name: 'App',
  components: {
    List,
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
<style>
.v-application--wrap{
  background-color:#CEF7F5;
}
.background{
    background-color:#CEF7F5;
}
</style>
