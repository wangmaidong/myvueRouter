import  createRouteMap  from './create-route-map'
export default function (routes) {
  //pathList 会把所有路由组成一个数组 ['/','/about','/about/a','/about/b']
  //pathMap { /:{}, /about/a: {}}
  let  {pathLsit, pathMap} = createRouteMap(routes)
  function match() { // 通过用户输入的路径 获取对应的匹配记录
    
   }
  function addRoutes(routes) { // 用户动态添加的路由
    createRouteMap(routes, pathLsit, pathMap)
  }
  return {
    match,
    addRoutes
  }
}