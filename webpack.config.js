const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
  return {
    entry: {
      main: './src/app/app.module.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        baseHref: env.prod ? '/wine/' : '/',
        template: './src/index.ejs',
        filename: 'index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'] // Specify the common bundle's name.
      })
    ],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    },

    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: 'style-loader!css-loader'
        }, {
          test: /\.html$/,
          loader: 'html-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};

// https://github.com/preboot/angular-webpack/blob/master/webpack.config.js
// https://github.com/erikras/react-redux-universal-hot-example/issues/171