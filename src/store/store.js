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
        login(state,token){
            state.user.token=token;
            state.isAuth=true;
        },
        logout(state){
            state.user={};
            state.isAuth=false;
        },
        updateUser(state,user){
            state.user=user;
        }
    },
    getters:{
        user: state => state.user,
        viagens: state => state.viagens,
        isAuth: state => state.isAuth
    },
    actions:{
        login (state,token) {
            state.commit('login',token);
          },
        logout (state) {
            state.commit('logout');
          },
          saveUser(state,user){
            state.commit('updateUser',user);
          }
    }

})