import Vue from 'vue'

import Alert from './alert/Alert'

const _components = {
  Alert
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
