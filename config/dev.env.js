'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://47.92.84.126/siso-enroll"',//生产环境的url 
  // BASE_API: '"http://192.168.11.34:8081"',//生产环境的url 
})
