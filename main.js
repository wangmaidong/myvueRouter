import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
new Vue({
  name: 'root',
  el: '#app',
  render: h => h(App),
  router // 这里让所有组件都可以获取到router属性， 不要放到vue的原型上，不想让新的vue实例也有router属性
})