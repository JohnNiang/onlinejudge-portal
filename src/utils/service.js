import axios from 'axios'
import NProgress from 'nprogress'
import * as type from '../store/mutation-type'

import store from '../store'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  withCredentials: false
})

/**
 * request interceptor
 */
service.interceptors.request.use(
  config => {
    const accessToken = store.getters.accessToken
    if (accessToken) {
      // if logined
      console.log('config authentication header')
      config.headers['Authorization'] = `${store.getters.tokenType} ${
        store.getters.accessToken
      }`
    }
    // there must not include `else` clause
    NProgress.start()
    return config
  },
  error => {
    console.error('axios request error', error.message)
    // set error into store
    store.commit(type.ERROR_OCCURRED, error.message)
    return Promise.reject(error)
  }
)

/**
 * response interceptor
 */
service.interceptors.response.use(
  response => {
    // clear global error
    console.log('clear error')
    store.commit(type.ERROR_OCCURRED, null)
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    // clear global error
    console.log('clear error')
    store.commit(type.ERROR_OCCURRED, null)
    console.error('axios resposne error', error.message)
    console.error('axios error response', error.response)
    const response = error.response
    const status = response ? response.status : -1
    console.error('axios error response status', status)
    if (status === 401) {
      // refresh token first
      if (
        store.getters.refreshToken &&
        response.data.error === 'invalid_token'
      ) {
        // use refresh token to get an access token
        store.dispatch('refresh', { refreshToken: store.getters.refreshToken })
      }
      // unauthorization
      store.commit(type.ERROR_OCCURRED, 'Please sign in firstly!')
    } else if (status === 403) {
      // forbidden
      store.commit(type.ERROR_OCCURRED, 'Forbiddon to access the resource')
    }
    if (status === -1) {
      store.commit(type.ERROR_OCCURRED, 'Unknown error occurred')
      return null
    }
    return response
  }
)

export default service
