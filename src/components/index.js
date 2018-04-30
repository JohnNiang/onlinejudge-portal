import Vue from 'vue'

import Alert from './alert/Alert'
import Avatar from './avatar/avatar'

const _components = {
  Alert,
  Avatar
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
