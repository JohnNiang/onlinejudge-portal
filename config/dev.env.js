'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_URL: '"http://123.207.230.81:8080"'
  BASE_URL: '"http://127.0.0.1:8080"'
})
