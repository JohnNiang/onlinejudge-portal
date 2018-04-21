import service from '../utils/service'

const baseUrl = '/login'
const clientId = 'onlinejudge'
const clientSecret = 'openonlinejudge'

const authApi = {}

authApi.login = (username, password) => {
  return service({
    url: baseUrl,
    params: {
      username: username,
      password: password
    },
    auth: {
      username: clientId,
      password: clientSecret
    },
    method: 'post'
  })
}

authApi.refreshToken = refreshToken => {
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

export default authApi
