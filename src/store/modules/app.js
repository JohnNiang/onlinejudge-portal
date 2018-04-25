import * as type from '../mutation-type'

const state = {
  isAuthShow: false,
  globalInfo: null
}

const getters = {
  isAuthShow: state => state.isAuthShow,
  globalInfo: state => state.globalInfo
}

const mutations = {
  [type.TOGLE_AUTH_PAGE](state) {
    state.isAuthShow = !state.isAuthShow
  },
  [type.SET_GLOBAL_INFO](state, info) {
    state.globalInfo = info
  },
  [type.CLEAR_GLOBAL_INFO](state) {
    state.globalInfo = null
  }
}

export default { state, getters, mutations }
