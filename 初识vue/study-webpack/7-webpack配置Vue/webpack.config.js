const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    //当在代码中import Vue from 'vue'时，会首先来这里找vue有没有配置别名，有的话就直接
    //进入文件；没有的话就去node_modules/vue/dist中寻找默认的vue.min.js文件
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}