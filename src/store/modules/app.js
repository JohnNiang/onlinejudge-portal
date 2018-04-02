import * as type from '../mutation-type'

const state = {
  accessToken: localStorage.getItem('accessToken')
    ? localStorage.getItem('accessToken')
    : null,
  tokenType: ocalStorage.getItem('tokenType')
    ? localStorage.getItem('tokenType')
    : null,
  refreshToken: ocalStorage.getItem('refreshToken')
    ? localStorage.getItem('refreshToken')
    : null,
  globalError: undefined
}

const getters = {
  accessToken: state => state.accessToken,
  tokenType: state => state.tokenType,
  refreshToken: state => state.refreshToken
}

const mutations = {
  [type.ERROR_OCCURRED](state, errorMessage) {
    state.globalError = errorMessage
  }
}

const actions = {}

export default { state, getters, mutations, actions }
