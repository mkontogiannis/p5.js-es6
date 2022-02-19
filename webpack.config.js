const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: __dirname + '/src/js/sketch.js',
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'js/sketch.js',
  },
  devServer: {
    client: {
      logging: 'info',
      progress: true,
    },
    compress: true,
    // inline: true,
    hot: 'only',
    open: true,
    port: 3333,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/index.html',
          to: 'index.html',
        },
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
  ],
};
