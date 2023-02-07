import createRouteMap from './create-route-map'
import { createRoute } from './history/base.js'
export default function (routes) {
  //pathList 会把所有路由组成一个数组 ['/','/about','/about/a','/about/b']
  //pathMap { /:{}, /about/a: {}}
  let { pathList, pathMap } = createRouteMap(routes)
  console.log('pathLsit-->', pathList)
  console.log('pathMap-->', pathMap)
  function match(location) { // 通过用户输入的路径 获取对应的匹配记录
    console.log('match-->', location)
    let record = pathMap[location] // 获取对应的记录
    return createRoute(record, {
      path: location
    })
   }
  function addRoutes(routes) { // 用户动态添加的路由
    createRouteMap(routes, pathList, pathMap)
  }
  return {
    match,
    addRoutes
  }
}