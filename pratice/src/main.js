import Vue from 'vue'
import App from './App.vue'
export const eventBus = new Vue();
Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
