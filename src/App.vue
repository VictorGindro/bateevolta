<template>
  <v-app>
    <v-app-bar app clipped-left color='rgb(51, 204, 204)' dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer " v-if=" this.$store.getters.isAuth == true">
      </v-app-bar-nav-icon>
      <v-img>
        <v-btn icon @click="home">
          <v-icon>home</v-icon>
        </v-btn>
      </v-img>
      <v-toolbar-title></v-toolbar-title>
      <div class="flex-grow-1"></div>
      {{user.nome}}
      <v-speed-dial v-model="on" direction="bottom" :open-on-hover="hover" :transition="transition">
        <template v-slot:activator>
          <v-btn v-model="on" dark icon>
              
            <v-icon v-if="on">mdi-close</v-icon>
            <v-icon v-else>person</v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="teal" v-if=" this.$store.getters.isAuth == false" @click="login()">
          <v-icon>last_page</v-icon>
        </v-btn>
        <v-btn fab dark small color="teal" v-if=" this.$store.getters.isAuth == true" @click="logout()">
          <v-icon>first_page</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-app-bar>
    <v-navigation-drawer color="rgb(41, 163, 163)" v-model="drawer"  app clipped dark>
      <v-list dense>
        <v-list-item @click="diponiveis()">
          <v-list-item-action>
            <v-icon>list</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Viagens Disponiveis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="this.$store.getters.user.role.authority != 'ROLE_ORGANIZADOR'" @click="compras()">
          <v-list-item-action>
            <v-icon>calendar_today</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Minhas compras</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="this.$store.getters.user.role.authority == 'ROLE_ORGANIZADOR'" @click="criarViagem()">
          <v-list-item-action>
            <v-icon>library_add</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Nova viagem</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item v-if="this.$store.getters.user.role.authority == 'ROLE_ORGANIZADOR'"  @click="listViagens()">
          <v-list-item-action>
            <v-icon>library_books</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Minhas viagem</v-list-item-title>
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
    hover: true,
    transition: 'slide-y-reverse-transition',
    user: {}
  }),updated(){
    this.user=this.$store.getters.user
    if(this.$store.getters.user.role.authority=="none"){
      this.drawer=false
    }
  },methods:{
      compras(){
        this.$router.push("/turista/compras");
      },
      diponiveis(){
        this.$router.push("/listar");
      },
      home(){
        this.$router.push("/home");
      },
      login(){
          this.$router.push("/login");
      },
      logout(){
        this.$store.dispatch("logout").then(()=>{
          this.drawer = false;
          // eslint-disable-next-line
          console.log(this.$store.getters.user);
          this.$router.push("/login");
        });
      },
      criarViagem(){
      this.$router.push("/viagem/criar")
      },
      listViagens(){
      this.$router.push("/organizador/viagens")
      }
    },
    computed: {
    isAuth: function(){
      return true;
    }
  }
};
</script>

<style>
.background{
    background-color:#CEF7F5;
}
</style>
