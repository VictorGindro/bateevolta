import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        user:{},
        viagens:[],
        isAuth:false
    },
    mutations:{
        login(state,user){
            state.user=user;
            state.isAuth=true;
        },
        logout(state){
            state.user={};
            state.isAuth=false;
        },
    },
    getters:{
        user: state => state.user,
        viagens: state => state.viagens,
        isAuth: state => state.isAuth
    },
    actions:{
        login (state,user) {
            state.commit('login',user);
          },
        logout (state) {
            state.commit('logout');
          }
    }

})