前端路由常见的两个方案
hash模式 /#/aaa  通过#后面路径的方式进行切换 缺点 不美观
window.location.hash = '/aaa'
window.location.onhasnchange = function() {} 渲染对应的路由组件
在导航栏按下enter键不会强制刷新

history模式
window.location.pushState({}, null, '/aaa') 实现增添路径 但是强制刷新还是会有问题 会去请求服务器（需要服务端解决这个问题）
window.onpopstate = function() {} 监视浏览器路由的变化

vue-router 源码中 在hash模式下如果支持onpopstate会优先使用，如果是低版本的浏览器会使用onhashchange