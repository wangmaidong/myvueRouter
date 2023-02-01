const addRouteRecord = (route, pathList, pathMap, parentRecord) => {
  let path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path
  let record = { // 根据当前路由产生一个记录
    path: path,
    component: route.component,
    parent: parentRecord
  }
  if (!pathMap[path]) { // 防止用户编写当前路由时有重复的
    pathMap[path] = record
    pathList.push(path)
  }
  if (route.children) {
    route.children.forEach(r => {
      addRouteRecord(r, pathList, pathMap, record)
    })
  }
}
// 具备新增和添加的功能
export default function (routes, oldPathList, oldPathMap) {
  let pathList = oldPathList || []
  let pathMap = oldPathMap || {}
  routes.forEach(route => {
    addRouteRecord(route, pathList, pathMap)
  })
  return {
    pathList,
    pathMap
  }
}