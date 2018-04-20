import * as type from '../mutation-type'

const state = {
  isAuthShow: false
}

const getters = {
  isAuthShow: state => state.isAuthShow
}

const mutations = {
  [type.TOGLE_AUTH_PAGE](state) {
    state.isAuthShow = !state.isAuthShow
  }
}

export default { state, getters, mutations }
