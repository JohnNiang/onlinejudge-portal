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
  [type.SET_TOKEN](state, token) {
    // set access token
    localStorage.setItem('accessToken', token.value)
    state.accessToken = token.value

    // set refresh token
    localStorage.setItem('refreshToken', token.refreshToken.value)
    state.refreshToken = token.refreshToken.value

    // set token type
    localStorage.setItem('tokenType', token.tokenType)
    state.tokenType = token.tokenType

    // set additional info
    localStorage.setItem('username', token.additionalInformation.username)
    state.username = token.additionalInformation.username
  }
}

const actions = {
  login({ commit }, { username, password }) {
    auth.login(username, password).then(response => {
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
  },
  refresh({ commit }, { refreshToken }) {
    auth.refreshToken(refreshToken).then(response => {
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
