import service from '../utils/service'

const baseUrl = '/oauth/token'

export function login(username, password) {
  return service({
    url: baseUrl,
    params: {
      grant_type: 'password',
      username: username,
      password: password,
      client_id: 'onlinejudge',
      client_secret: 'openonlinejudge'
    },
    method: 'get'
  })
  // return service({
  //   url: baseUrl,
  //   params: {
  //     grant_type: 'password',
  //     username: username,
  //     password: password
  //   },
  //   auth: {
  //     username: 'onlinejudge',
  //     password: 'openonlinejudge'
  //   },
  //   method: 'get'
  // })
}

export function getProblems() {
  return service({
    url: '/api/v1/problems/status/released',
    method: 'get'
  })
}
