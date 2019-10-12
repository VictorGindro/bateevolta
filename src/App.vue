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


      <v-speed-dial v-model="on" direction="bottom" :open-on-hover="hover" :transition="transition">
        <template v-slot:activator>
          <v-btn v-model="on" dark icon>
            <v-icon v-if="on">mdi-close</v-icon>
            <v-icon v-else>person</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="teal" @click="login()">
          <v-icon>last_page</v-icon>
        </v-btn>
        <v-btn fab dark small color="teal">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-speed-dial>
      </v-app-bar>
      <v-navigation-drawer v-if=" this.$router.history.current.path !='/home'" color="rgb(41, 163, 163)"
        v-model="drawer" app clipped dark>
        <v-list dense>
          <v-list-item @click="diponiveis()">
            <v-list-item-action>
              <v-icon>list</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Viagens Disponiveis</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="compras()">
            <v-list-item-action>
              <v-icon>calendar_today</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Minhas compras</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
                    <v-list-item @click="criarViagem()">
            <v-list-item-action>
              <v-icon>add_box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Nova viagem</v-list-item-title>
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
    fab: false,
    on: false,
    hover: false,
    transition: 'slide-y-reverse-transition',
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
      },
        criarViagem(){
          this.$router.push("/viagem")
      }
    }
};
</script>
<style>
.background{
    background-color:#CEF7F5;
}
</style>
