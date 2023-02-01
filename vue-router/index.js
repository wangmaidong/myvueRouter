import install from './install.js'
import createMatcher from './createMatcher.js'
class VueRouter {
  constructor(options) {
    let routes = options.routes || []
    // 创建匹配器的过程 需要实现功能 1.匹配功能 2.可以添加匹配 动态路由的添加 addRoutes 
    this.matcher = createMatcher(routes)
  }
  init(app) { // 目前这个app指代的就是最外层的new Vue
    // 需要根据用户配置 做出一个映射表来

  }
}
VueRouter.install = install
export default VueRouter