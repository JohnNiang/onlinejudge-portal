import * as type from '../mutation-type'
import authApi from '../../apis/auth'
import store from '..'

const AUTH_RESULT = 'authResult'

const state = {
  authResult: JSON.parse(localStorage.getItem(AUTH_RESULT)),
  globalError: undefined
}

const getters = {
  accessToken: state =>
    state.authResult ? state.authResult.access_token : null,
  tokenType: state => (state.authResult ? state.authResult.token_type : null),
  refreshToken: state =>
    state.authResult ? state.authResult.refresh_token : null,
  username: state => (state.authResult ? state.authResult.username : null),
  globalError: state => state.globalError,
  isLogined: state =>
    state.authResult &&
    state.authResult.access_token !== null &&
    state.authResult.access_token !== undefined &&
    state.authResult.access_token !== ''
}

const mutations = {
  [type.ERROR_OCCURRED](state, errorMessage) {
    state.globalError = errorMessage
  },
  [type.SET_TOKEN](state, token) {
    store.authResult = Object.assign({}, token)
    localStorage.setItem(AUTH_RESULT, JSON.stringify(store.authResult))
  },
  [type.CLEAR_TOKEN](state) {
    localStorage.removeItem(AUTH_RESULT)
    state.authResult = null
  }
}

const actions = {
  refresh({ commit }, { refreshToken }) {
    authApi.refreshToken(refreshToken).then(response => {
      if (response && response.status === 200) {
        commit(type.SET_TOKEN, response.data)
      } else {
        commit(
          type.ERROR_OCCURRED,
          'Login failed, username or password was not available'
        )
        console.error(`login error, response: ${response}`)
      }
    })
  }
}

export default { state, getters, mutations, actions }
