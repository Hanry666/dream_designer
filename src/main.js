import Vue from 'vue' 
import App from './App.vue'
import ElementUI from 'element-ui';  //引入element ui
import 'element-ui/lib/theme-chalk/index.css'; //element ui样式
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'
import VueRouter from 'vue-router';
import router from './router'
import 'hover.css'
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(ElementUI);
const vm=new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
