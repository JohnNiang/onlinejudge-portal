import service from '../utils/service'

const baseUrl = '/oauth/token'
const clientId = 'onlinejudge'
const clientSecret = 'openonlinejudge'

export function login(username, password) {
  return service({
    url: baseUrl,
    params: {
      grant_type: 'password',
      username: username,
      password: password,
      client_id: clientId,
      client_secret: clientSecret
    },
    method: 'get'
  })
}

export function refreshToken(refreshToken) {
  return service({
    url: baseUrl,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret
    },
    method: 'get'
  })
}
