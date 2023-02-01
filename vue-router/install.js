export let Vue
import RouterView from './components/router-view.js'
import RouterLink from './components/router-link.js'
const install = function (_Vue) {
  // install 方法内部一般用来定义一些全局的内容 指令 全局组件 给原型扩展方法
  console.log('install')
  Vue = _Vue
  Vue.component('router-link', RouterLink)
  Vue.component('router-view', RouterView)
  // 希望每个子组件 都可以获取到router属性
  Vue.mixin({
    beforeCreate() {
      // 如果有router 说明在根实例上增加了router 当前这个实例是根实例
      if (this.$options.router) {
        this._routerRoot = this // 将当前根实例放到了_routerRoot
        this._router = this.$options.router
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot
      }
      console.log(this._routerRoot._router)
    }
  })
}
export default install