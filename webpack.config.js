const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/main.jsx',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js',
    // 打包前清空path目录
    clean: true
  },
  module:{
    rules:[
      // loader配置
      {
         test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.less$/i,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.s[ca]ss$/i,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test:/\.(png|jpe?g|gif|svg|webp)$/i,
        type:'asset',
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test:/\.(ttf|woff2?)$/i,
        type:'asset/resource',
        generator: {
          filename: 'static/fonts/[hash:10][ext][query]'
        }
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use:['babel-loader']
      }
    ]
  },
  devServer:{
    port:'12345',
    // open:true,
    hot:true,
    host:'localhost'
  },
  plugins:[
    // plugins
    // new ESLintPlugin({context: path.resolve(__dirname,'src')}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public/index.html')
    })
  ],
  resolve:{
    extensions:['.js','.jsx']
  },
  mode:'development'
}