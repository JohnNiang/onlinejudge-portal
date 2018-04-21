import service from '../utils/service'

const clientId = 'onlinejudge'
const clientSecret = 'openonlinejudge'

const authApi = {}

authApi.login = (username, password) => {
  return service({
    url: '/login',
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
    url: '/oauth/token',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret
    },
    method: 'post'
  })
}

export default authApi
