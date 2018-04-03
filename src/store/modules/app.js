import * as type from '../mutation-type'
import * as auth from '../../apis/auth'

const state = {
  accessToken: localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : null,
  tokenType: localStorage.getItem('tokenType')
    ? localStorage.getItem('tokenType')
    : null,
  refreshToken: localStorage.getItem('refreshToken')
    ? localStorage.getItem('refreshToken')
    : null,
  username: localStorage.getItem('username')
    ? localStorage.getItem('username')
    : null,
  globalError: undefined
}

const getters = {
  accessToken: state => state.accessToken,
  tokenType: state => state.tokenType,
  refreshToken: state => state.refreshToken,
  username: state => state.username,
  globalError: state => state.globalError
}

const mutations = {
  [type.ERROR_OCCURRED](state, errorMessage) {
    state.globalError = errorMessage
  },
  [type.SET_ACCESS_TOKEN](state, accessToken) {
    localStorage.setItem('accessToken', accessToken)
    state.accessToken = accessToken
  },
  [type.SET_REFRESH_TOKEN](state, refreshToken) {
    localStorage.setItem('refreshToken', refreshToken)
    state.refreshToken = refreshToken
  },
  [type.SET_TOKEN_TYPE](state, tokenType) {
    localStorage.setItem('tokenType', tokenType)
    state.tokenType = tokenType
  },
  [type.SET_USERNAME](state, username) {
    localStorage.setItem('username', username)
    state.username = username
  }
}

const actions = {
  login({ commit }, { username, password }) {
    auth.login(username, password).then(response => {
      if (response && response.status === 200) {
        const accessToken = response.data.value
        const tokenType = response.data.tokenType
        const refreshToken = response.data.refreshToken.value
        const username = response.data.additionalInformation.username
        commit(type.SET_ACCESS_TOKEN, accessToken)
        commit(type.SET_REFRESH_TOKEN, refreshToken)
        commit(type.SET_TOKEN_TYPE, tokenType)
        commit(type.SET_USERNAME, username)
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
