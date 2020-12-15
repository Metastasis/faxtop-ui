import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import AuthPlugin from './plugins/auth';

Vue.config.productionTip = false;

const auth = new AuthPlugin();
Vue.use(auth, {
  endpoints: {
    verify: '/api/verify',
    login: '/api/signin',
    logout: '/api/signout'
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
