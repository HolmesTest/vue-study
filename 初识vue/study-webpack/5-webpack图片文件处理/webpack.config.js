const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当图片大小小于limit时，会将图片转成jpeg的base64编码的形式使用
               //当图片大小大于limit时，会使用file-loader加载(也即需要安装file-loader)
              limit: 1024,
              name: 'img/[name].[hash:8].[ext]'
             
            }
          }
        ]
      }
    ]
  }
}