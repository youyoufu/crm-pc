'use strict';
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

//处理项目中的css文件，生产环境和测试环境默认是打开sourceMap，而extract中的提取样式到单独文件只有在生产环境中才需要
module.exports = {
  loaders: Object.assign(
    utils.cssLoaders({
      sourceMap: isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap,
      extract: isProduction
    }),
    {
      ts: 'ts-loader',
      tsx: 'babel-loader!ts-loader'
    }
  ),
  // 在模版编译过程中，编译器可以将某些属性，如 src 路径，转换为require调用，以便目标资源可以由 webpack 处理.
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};
