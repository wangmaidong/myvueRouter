import History from './base.js'
const ensureSlash = () => {
  if (window.location.hash) {
    return 
  } 
  window.location.hash = '/'
}
export default class HashHistory extends History {
  constructor(router) {
    super(router)
    this.router = router
    // 如果使用hashHistory 默认如果没有hash 应该跳转到 首页 #
    ensureSlash()
  }
  getCurrentLocation() {
    return window.location.hash.slice(1) // 拿到hash路径并去掉#
  }
  setupListener() {
    window.addEventListener('hashchange', () => {
      console.log('hash变化')
    })
  }
}