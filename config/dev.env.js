/**
 * @description 
 * @author cq
 * @Date 2020-09-22 11:15:28
 * @LastEditTime 2020-09-22 13:05:20
 * @LastEditors cq
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
