import service from '../utils/service'

const baseUrl = '/api/v1/users'

const userApi = {}

userApi.getDetail = () => {
  return service({
    url: `${baseUrl}/me`,
    method: 'get'
  })
}

userApi.getExtraDetail = () => {
  return service({
    url: `${baseUrl}/me/extra`,
    method: 'get'
  })
}

export default userApi
