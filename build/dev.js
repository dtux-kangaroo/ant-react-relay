const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
  mode: 'development',
  entry: {
    app: path.resolve(__dirname,'../src/app.js')
  },
  output: {
    path:path.resolve(__dirname,'../dist'),
    filename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test:/\.scss$/,
        use:[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  devServer:{
    port:3000,
    contentBase: path.resolve(__dirname,'../dist/'),
    publicPath: '/dist/',
    stats: {colors: true},
    proxy: [{
      path: '/graphql',
      target: 'http://localhost:8080'
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname,'../src/index.html'),
      hash: false,
      chunksSortMode:"none",
      options:{
        title:'react-relay'
      },
      assets: {
        config_js: '/static/config/conf.dev.js'
      }
    })
  ]
}