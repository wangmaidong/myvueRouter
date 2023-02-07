import Vue from 'vue'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import VueRouter from '../vue-router'
// use 方法会调用install 方法会注册全局组件 router-link router-view
let routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'a',
        component: {
          render: (h) => <h1> about a</h1>,
        },
      },
      {
        path: 'b',
        component: {
          render: (h) => <h1> about b</h1>,
        },
      },
    ],
  },
]
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes,
})
