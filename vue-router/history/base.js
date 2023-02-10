export const createRoute = (record, location) => { // 根据匹配到的记录来计算所有匹配到的记录
  let matched = []
  if (record) {
    while (record) {
      matched.unshift(record)
      record = record.parent
    }
  }
  return {
    ...location,
    matched
  }
}
export default class History {
  constructor(router) {
    this.router = router
    // 这个代表的是 当前路径匹配出来的记录
    // / {path: '/', component: home}
    // /about/a {path: '/about', component: about} {path: '/about/A', component: A}
    this.current = createRoute(null, {
      path: '/'
    })
    // current初始是一个 {path:'/', matched: []}
  }
  transitionTo(location, complete) {
    // 获取当前路径 匹配出对应的记录 当路径变化时获取对应的记录  ---> 渲染页面  router-view
    // 通过路径 拿到对应 的记录 有了记录之后 就可以找到对象的匹配
    let current = this.router.match(location)
    // 防止重复点击 不需要再次渲染
    // 匹配到的个数和路径都是相同的 就不需要再次跳转了
    if (location === this.current.path && this.current.matched.length === current.matched.length) {
      return
    }
    this.current = current // 这个current只是响应式的 他的变化不会更新_route
    this.cb && this.cb(current)
    complete && complete()
  }
  listen(cb) {
    this.cb = cb
  }
}