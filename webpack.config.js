const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    publicPath: 'http://localhost:8080/dist/',
    hotOnly: true,
    proxy: { '/api': 'http://localhost:3000' },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
