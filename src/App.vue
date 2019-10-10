<template>
  <v-app>
    <v-app-bar app clipped-left color='rgb(51, 204, 204)' dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer " v-if=" this.$router.history.current.path !='/home'">
      </v-app-bar-nav-icon>
      <v-img>
        <v-btn icon @click="home">
          <v-icon>home</v-icon>
        </v-btn>
      </v-img>
      <v-toolbar-title></v-toolbar-title>
      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon dark v-on="on">
            <v-icon>person</v-icon>
          </v-btn>
        </template>
        <v-list >
          <v-list-item v-if=" this.$router.history.current.path =='/home'" >
            <v-list-item-title @click="login()">
              <v-btn>Login</v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item v-else-if="this.$router.history.current.path !='/login'" >
            <v-list-item-title @click="login()">
              <v-btn>Logout</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-if=" this.$router.history.current.path !='/home'" color="rgb(41, 163, 163)" v-model="drawer"
      app clipped dark>
      <v-list dense>
        <v-list-item @click="compras()">
          <v-list-item-action>
            <v-icon>calendar_today</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Minhas compras</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="diponiveis()">
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Viagens Disponiveis</v-list-item-title>
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
    drawer: false,
    fab:  false,
    items: [
        { title: 'Login' },
      ],
  }),
      methods:{
      compras(){
        this.$router.push("/compras");
      },
      diponiveis(){
        this.$router.push("/listar");
      },
      home(){
        this.$router.push("/home");
      },
      login(){
          this.$router.push("/login")
      }
    }
};
</script>
<style>
.background{
    background-color:#CEF7F5;
}
</style>
