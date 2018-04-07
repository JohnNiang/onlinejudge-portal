import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index/Index'], resolve)
const Problem = resolve => require(['@/views/problem/Problem'], resolve)
const ProblemDetail = resolve =>
  require(['@/views/problem/ProblemDetail'], resolve)
const About = resolve => require(['@/views/about/About'], resolve)

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
    },
    {
      path: '/problems/:id',
      name: 'problem_detail',
      component: ProblemDetail,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
