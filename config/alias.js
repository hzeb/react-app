'use strict';
const path = require('path');
const paths = require('./paths');

const src = paths.appSrc; // 开发源码目录
module.exports = {
  // 自定义路径别名
  SRC: src,
  ASSET: path.resolve(src, 'assets'),
  COMPONENT: path.resolve(src, 'components'),
  MIXIN: path.resolve(src, 'mixin'),
  SERVICE: path.resolve(src, 'services'),
  VIEW: path.resolve(src, 'views'),
  UTIL: path.resolve(src, 'util'),
}