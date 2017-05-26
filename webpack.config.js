const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'app.bundle.css'
});


var config = {
  entry: {
    app: './src/scripts/index.ts'
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: ['node_modules'],
        loader: 'ts-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader?importLoaders=1&url=false', 'postcss-loader', 'sass-loader'],
        })
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    extractSass,
  ],
  devServer: {
    contentBase: ['./', path.join(__dirname + '/src/images')],
    compress: true,
    port: 8080,
    disableHostCheck: true,
    stats: {
      colors: true,
    },
    /**
     * Will do URL rewriting for us since we use HTML 5 mode
     */
    historyApiFallback: {
      index: '/',
    },
    /**
     * Open the browser when starting the project
     */
    open: true,
  },
};

module.exports = config;
