
export default class History {
  constructor(router) {
    this.router = router
  }
  transitionTo(location, complete) {
    // 获取当前路径 匹配出对应的记录 当路径变化时获取对应的记录  ---> 渲染页面  router-view
    console.log(location)
    complete  && complete()
  }
}