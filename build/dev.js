const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports={
  mode: 'development',
  entry: {
    app: path.resolve(__dirname,'../src/main.js')
  },
  output: {
    path:path.resolve(__dirname,'../dist'),
    filename: 'js/[name].[hash].js',
  },
  resolve:{
    alias:{
      mutations:path.resolve(__dirname,'../src/mutations')
    }
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
    publicPath: '/',
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
    }),
    new CopyWebpackPlugin([ 
      { from: path.resolve(__dirname,'../static'),to:"static"},
    ])
  ]
}