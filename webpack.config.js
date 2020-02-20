const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  devServer: {
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [
      {
        test: /\.(m|js|jsx)$/,
        exclude: /node_modules/,
        use:'babel-loader'
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html' 
    })
  ]
};