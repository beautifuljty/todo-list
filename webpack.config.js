// 开发时的配置文件
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: "/build/",
  },
  devServer: {
    inline: true,
    hot:true,
    // port:3000
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx",".css"]
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
