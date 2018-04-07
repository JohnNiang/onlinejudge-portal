import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index/Index'], resolve)
const Problem = resolve => require(['@/views/problem/Problem'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index
    },
    {
      path: '/problems',
      name: 'problem',
      component: Problem
    }
  ]
})
