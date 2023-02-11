import install from './install.js'
import createMatcher from './createMatcher.js'
import HashHistory from './history/hasHistory.js'
import BrowserHistory from './history/browserHistory.js'
class VueRouter {
  constructor(options) {
    let routes = options.routes || []
    // 创建匹配器的过程 需要实现功能 1.匹配功能 2.可以添加匹配 动态路由的添加 addRoutes 
    this.matcher = createMatcher(routes)
    // 创建历史管理
    // 路由有两种模式 hash  浏览器api
    this.mode = options.mode || 'hash'
    switch (this.mode) {
      case 'hash':
        this.history = new HashHistory(this)
        break;
      case 'history':
        this.history = new BrowserHistory(this)
        break;
    }
  }
  match(location) {
    return this.matcher.match(location)
  }
  init(app) { // 目前这个app指代的就是最外层的new Vue
    // 需要根据用户配置 做出一个映射表来

    // 需要根据当前路径 实现一下页面跳转的逻辑
    const history = this.history
    let setupHashListener = () => {
      history.setupListener();
    }
    // 跳转路径 会进行匹配操作 根据路径获取对应的记录
    // transitionTo 为父类方法  跳转逻辑
    // getCurrentLocation为子类方法 获取当前路径信息
    // setupListener hash监听
    history.transitionTo(history.getCurrentLocation(), setupHashListener)
    // 初始化时都需要调用更_route的方法
    history.listen((route) => {
      app._route = route
    })
  }
  push(location) {
    const history = this.history
    window.location.hash = location
  }
 }
VueRouter.install = install
export default VueRouter