export default {
  functional: true, // 函数式组件 不用new 没有this 没有生命周期 提高性能
  render(h,context) { // context当前上下文
    // this.$route 有matched属性 这个属性有几个就依次的将他赋予到对应的router-view上
    console.log(context)
    let { parent, data } = context
    // parent 是当前组件的父组件
    // data  是这个组件上的一些标识
    let route = parent.$route
    let depth = 0
    data.routerView = true // 标识路由属性
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) { // 不明白从router-view 16分钟看
        depth++
      }
      parent = parent.$parent
    }
    let record = route.matched[depth]
    if (!record) {
      return h() // 渲染一个空元素
    }
    return h(record.component, data)
  }
}