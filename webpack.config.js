const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const htmlWebpackPlugin = require('html-webpack-plugin');

const clientConfig = {
  entry: {
    client: './frontend/render'
  },

  output: {
    // Output js bundles
    filename: '[name].js',
    path: path.resolve('public')
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
              [
                'transform-runtime',
                {
                  polyfill: false,
                  regenerator: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },

  plugins: [
    // Use webpack 3's module concatentation for faster start up
    new webpack.optimize.ModuleConcatenationPlugin(),

    new htmlWebpackPlugin({
      template: './frontend/index.html',
      filename: 'index.html'
    })
  ]
};

const serverConfig = {
  ...clientConfig,

  entry: {
    server: './backend/server'
  },

  output: {
    // Output js bundles
    filename: '[name].js',
    path: path.resolve('private')
  },

  target: 'node',

  node: {
    __dirname: false
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-object-rest-spread',
              'transform-class-properties',
              [
                'transform-runtime',
                {
                  polyfill: false,
                  regenerator: true
                }
              ]
            ]
          }
        }
      }
    ]
  },

  plugins: [
    // Use webpack 3's module concatentation for faster start up
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};

module.exports = [clientConfig, serverConfig];
