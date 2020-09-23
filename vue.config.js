
const webpack = require('webpack');
const path = require('path');

module.exports = {
  productionSourceMap:false,
  publicPath:"./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  devServer: {
    open: true, //浏览器自动打开页面
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 8911,
    https: false,
    hotOnly: false, //热更新（webpack已实现了，这里false即可）
    proxy: {
      //配置跨域
      '/api': {
        target: "http://www.dkstu.cn",
        ws:true,
        changOrigin:true,
        pathRewrite:{
          '^/api':'/'
        }
      }
    }
  },
  configureWebpack: {//引入jquery
      plugins: [
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
          "windows.jQuery":"jquery"
        })
      ]
    },

};
