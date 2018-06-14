import Vue from 'vue'
import Router from 'vue-router'

const Main = resolve => require(['@/views/main/Main'], resolve)
const Index = resolve => require(['@/views/index/Index'], resolve)
const Problem = resolve => require(['@/views/problem/Problem'], resolve)
const ProblemDetail = resolve =>
  require(['@/views/problem/ProblemDetail'], resolve)
const About = resolve => require(['@/views/about/About'], resolve)
const Contest = resolve => require(['@/views/contest/Contest'], resolve)
const ContestDetail = resolve =>
  require(['@/views/contest/ContestDetail'], resolve)
const User = resolve => require(['@/views/user/User'], resolve)
const UserCenter = resolve => require(['@/views/user/UserCenter'], resolve)
const Test = resolve => require(['@/views/test/Test'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Index
        },
        {
          path: 'problems',
          name: 'problem',
          component: Problem
        },
        {
          path: 'problems/:problemId',
          name: 'problem_detail',
          component: ProblemDetail,
          props: true
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'contests',
          name: 'contest',
          component: Contest
        },
        {
          path: 'contests/:contestId',
          name: 'contest_detail',
          component: ContestDetail,
          props: true
        },
        {
          path: 'users',
          component: User,
          redirect: 'center',
          children: [
            {
              path: 'center',
              name: 'user_center',
              component: UserCenter
            }
          ]
        },
        {
          path: 'test',
          component: Test
        }
      ]
    }
  ]
})
