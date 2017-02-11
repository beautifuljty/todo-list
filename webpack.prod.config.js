// 打包时的开发文件，就是webpack的配置
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "./build/",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
},
  module: {
    loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: "babel-loader"
       },
       {
         test: /\.css/,
         loader: 'style!css'
       },
       {
         test: /\.(jpe?g|png)$/,
         loader: 'file-loader'
       }
    ]
  }
}
