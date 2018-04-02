import axios from 'axios'
import NProgress from 'nprogress'
import * as type from '../mutation-type'

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
      config.headers['Authorization'] = `${store.getters.tokenType} ${
        store.getters.accessToken
      }`
    } // there must not include `else` clause
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
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()
    console.error('axios resposne error', error.message)
    if (!error.status) {
      store.commit(type.ERROR_OCCURRED, 'Network weakness')
      return null
    }
    const response = error.response
    const status = response ? response.status : -1
    if (status === 401) {
      // unauthorization
      store.commit(type.ERROR_OCCURRED, 'Please sign in firstly!')
    } else if (status === 403) {
      // forbidden
      store.commit(type.ERROR_OCCURRED, 'Forbiddon to access the resource')
    }
    if (status === -1) {
      return null
    }
    return error.response
  }
)

export default service
