let path = require('path');//node的模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // js 打包压缩
console.log('打包开始')
console.log(process.env.NODE_ENV)
module.exports = function (env, arguments) {
  return {
    entry: ['./app.js','./login.js'], // 入口
    output:{
    filename:'build.js',
    // 这个路径必须是绝对路径
    path: path.resolve('./dist')
    }, // 出口
    optimization: {
      minimizer: [
        new UglifyJsPlugin()
      ]
    },
    devServer:{
    // contentBase:'./index.html',
    publicPath: '/',
    port:8082,
    compress:true,// 服务器压缩
    open:true,// 自动打开浏览器
    // hot:true//热更新
    },// 开发服务器
    module:{
      rules:[
        {
          test:/.js$/,
          loader: 'babel-loader',
          include:'/app.js',
        },
        // {
        //   test:/.css$/,
        //   loader: 'style-loader!css-loader',
        // },
        {
          test: /.(png|jpe?g|gif|svg|mp4)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: '1000',
            name: 'static/[name]_[hash:6].[ext]?[hash:6]'
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader"
          ]
        }
      ]
    }, // 模块配置
    plugins:[
      new HtmlWebpackPlugin({
        title: 'main',
        template: path.resolve(__dirname, './index.html'),
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })

    ], // 插件的配置
    // mode:'development', // 可以更改模式 webpack 4.x
    resolve:{}, // 配置解析
    }
}
// 在webpack中如何配置开发服务器 webpack-dev-serverfi
