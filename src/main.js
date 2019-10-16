import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import { store } from './store/store'
import VueTheMask from 'vue-the-mask'
import Vuex from 'vuex'
Vue.use(VueTheMask)
Vue.use(Vuex)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history"
});

const x = store;
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(!x.getters.isAuth){
      router.replace("/login");
    }
  }
  next();
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
