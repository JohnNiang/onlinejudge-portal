import * as type from '../mutation-type'
import authApi from '../../apis/auth'
import userApi from '../../apis/user'

const AUTH_RESULT = 'authResult'

const state = {
  authResult: JSON.parse(localStorage.getItem(AUTH_RESULT)),
  user: undefined,
  globalError: undefined
}

const getters = {
  accessToken: state =>
    state.authResult ? state.authResult.access_token : null,
  tokenType: state => (state.authResult ? state.authResult.token_type : null),
  refreshToken: state =>
    state.authResult ? state.authResult.refresh_token : null,
  user: state => state.user,
  userId: state => (state.authResult ? state.authResult.user_id : null),
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
    state.authResult = token
    localStorage.setItem(AUTH_RESULT, JSON.stringify(token))
  },
  [type.CLEAR_TOKEN](state) {
    localStorage.removeItem(AUTH_RESULT)
    state.authResult = null
  },
  [type.SET_USRE_DETAIL](state, user) {
    state.user = user
  },
  [type.SET_USER_EXTRA_DETAIL](state, userExtra) {
    if (state.user) {
      state.user.extra = userExtra
    }
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
        commit(type.CLEAR_TOKEN)
        console.error(`login error, response: ${response}`)
      }
    })
  },
  refreshUserDetail({ commit }) {
    userApi.getDetail().then(response => {
      if (response && response.status === 200) {
        commit(type.SET_USRE_DETAIL, response.data)
      } else {
        commit(type.ERROR_OCCURRED, 'Error occurred when getting user detail')
      }
    })
  },
  refreshUserExtraDetail({ commit, state }) {
    if (!state.user) {
      return
    }
    userApi.getExtraDetail().then(response => {
      if (response && response.status === 200) {
        commit(type.SET_USER_EXTRA_DETAIL, response.data)
      } else {
        commit(
          type.ERROR_OCCURRED,
          'Error occurred when getting user extra detail'
        )
      }
    })
  }
}

export default { state, getters, mutations, actions }
