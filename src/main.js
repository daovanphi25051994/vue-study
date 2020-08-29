import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VueResource from 'vue-resource'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = "https://vndreamers-dev.herokuapp.com/auth/login"
Vue.http.interceptors.push((request, next) =>{
  if (true) {
    const token = localStorage.getItem('access_token');
    // request = request.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${token}`,
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json'
    //   }
    // });
    Vue.http.headers.common['Authorization'] = `Bearer ${token}`;
  }
})

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
